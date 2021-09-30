class UserPlayersController < ApplicationController

    def index
        render json: UserPlayer.all
    end

    def show
        players = UserPlayer.find_by(params[:user_id])
        render json: players
    end

    def create
        user_player = UserPlayer.create!(userPlayer_params)
        if user_player.valid?
            render json: user_player, status: :created
        end
    end

    def destroy
        player = UserPlayer.where(user_id: session[:user_id], player_id: params[:id])
        player[0].delete
        head :no_content
    end

    private
    
    def userPlayer_params
        params.permit(:id, :user_id, :player_id, :user_player)
    end

end