class PlayersController < ApplicationController

    def index
        render json: Player.all
    end

    def show
        player = Player.find(params[:id])
        render json: player
    end

    def create 
        player = Player.create!(player_params)
        if player.valid?
            render json: player, status: :created
        end
    end

    def update
        player = Player.find_by(id: params[:playerId])
        player.update(player_params)

        render json: player, status: :accepted

    end


    private
    def player_params
        params.permit(:id, :dob, :club, :country, :image, :name, :rating, :number, :position, :pace, :shot, :pass, :dribble, :defence, :physical, :bench)
    end
end
