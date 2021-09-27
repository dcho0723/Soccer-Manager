class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :players, :show_user_players, :show_first_player

  def show_user_players
    self.object.players.length
  end

  def show_first_player
    self.object.players.first
  end
end
