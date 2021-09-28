class UserPlayersController < ApplicationController

    def index
        render json: UserPlayer.all
    end

    def show
        players = UserPlayer.find_by(params[:user_id])
        render json: players
        # byebug
    end

    def create
        user_player = UserPlayer.create!(userPlayer_params)
        if user_player.valid?
            render json: user_player, status: :created
        end
    end

    private
    
    def userPlayer_params
        params.permit(:id, :user_id, :player_id, :user_player)
    end

end