class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :players, :show_user_players_length, :show_users_player, :players, :get_users_average_rating, :show_users_player_name, :show_users_player_dob, :show_users_player_pace, :show_users_player_dribble, :show_users_player_defence, :show_users_player_physical, :show_users_player_rating, :show_users_player_shot, :show_users_player_pass

  def show_user_players_length
    self.object.players.length
  end

  def show_users_player
    self.object.players.where(name: self.object.name)[0]
  end

  def show_users_player_name
    self.object.players.where(name: self.object.name)[0]["name"]
  end
  def show_users_player_dob
    self.object.players.where(name: self.object.name)[0]["dob"]
  end
  def show_users_player_pace
    self.object.players.where(name: self.object.name)[0]["pace"]
  end

  def show_users_player_shot
    self.object.players.where(name: self.object.name)[0]["shot"]
  end
  def show_users_player_pass
    self.object.players.where(name: self.object.name)[0]["pass"]
  end
  def show_users_player_dribble
    self.object.players.where(name: self.object.name)[0]["dribble"]
  end
  def show_users_player_defence
    self.object.players.where(name: self.object.name)[0]["defence"]
  end
  def show_users_player_physical
    self.object.players.where(name: self.object.name)[0]["physical"]
  end
  def show_users_player_rating
    self.object.players.where(name: self.object.name)[0]["rating"]
  end

  def get_users_average_rating

    if self.object.players.length != 0
      self.object.players.map{|a| a.rating}.inject(0, :+)/self.object.players.length
    end
  end

end
