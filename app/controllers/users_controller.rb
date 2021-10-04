class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :update]
    wrap_parameters format: []

    def index
        render json: User.all
    end

    def create
        user = User.create!(user_params)
        if user.valid?
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show 
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    def update
        user = User.find_by(id: session[:user_id])

        user.update(user_params)
        # byebug
        render json: user, status: :accepted
    end

    def team
        players = User.find_by(id: session[:user_id]).players
        render json: players
    end

    private
    def user_params
        params.permit(:user, :username, :password, :password_confirmation, :name, :favoriteclub, :id)
    end
end
