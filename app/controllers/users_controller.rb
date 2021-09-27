class UsersController < ApplicationController
    # skip_before_action :authorize, only: [:create]

    def index
        render json: User.all
    end

    def create
        user = User.create!(user_params)
        if user.valid?
            # byebug
            session[:id] = user.id
            render json: user, status: :created
        end
        ##maybe need else, with render unproccessably.
    end

    def show 
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    private
    def user_params
        params.permit(:username, :password, :password_confirmation, :name)
    end


end
