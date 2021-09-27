class UserPlayersController < ApplicationController

    def create
        user_player = UserPlayer.create!(userPlayer_params)
        byebug
        if user_player.valid?
            render json: user_player, status: :created
        end
    end

    private
    
    def userPlayer_params
        params.permit(:id, :user_id, :player_id)
    end

end