class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :players, :show_user_players_length, :show_users_player, :players, :get_users_average_rating

  def show_user_players_length
    self.object.players.length
  end

  def show_users_player
    self.object.players.where(name: self.object.name)[0]
  end

  def get_users_average_rating

    if self.object.players.length != 0
      self.object.players.map{|a| a.rating}.inject(0, :+)/self.object.players.length
    end
  end

end
