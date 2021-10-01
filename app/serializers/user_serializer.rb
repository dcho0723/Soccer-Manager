class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :players, :show_user_players_length, :show_users_player, :players

  def show_user_players_length
    self.object.players.length
  end

  def show_users_player
    self.object.players.where(name: self.object.name)[0]
  end

end
