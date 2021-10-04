class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :players, :favoriteclub, :show_user_players_length, :show_users_player, :players, :get_users_average_rating, :show_users_player_name, :show_users_player_dob, :show_users_player_pace, :show_users_player_dribble, :show_users_player_defence, :show_users_player_physical, :show_users_player_rating, :show_users_player_shot, :show_users_player_pass, :show_users_player_image

  def show_user_players_length
    self.object.players.length
  end

  def show_users_player
    if self.object.players.length != 0
      self.object.players.where(name: self.object.name)[0]
    end
  end

  def show_users_player_name
    if self.object.players.length != 0
      self.object.players.where(name: self.object.name)[0]["name"]
    end
  end
  def show_users_player_dob
    if self.object.players.length != 0
      self.object.players.where(name: self.object.name)[0]["dob"]
    end
  end
  def show_users_player_pace
    if self.object.players.length != 0
      self.object.players.where(name: self.object.name)[0]["pace"]
    end
  end

  def show_users_player_shot
    if self.object.players.length != 0
      self.object.players.where(name: self.object.name)[0]["shot"]
    end
  end
  def show_users_player_pass
    if self.object.players.length != 0
      self.object.players.where(name: self.object.name)[0]["pass"]
    end
  end
  def show_users_player_dribble
    if self.object.players.length != 0
      self.object.players.where(name: self.object.name)[0]["dribble"]
    end
  end
  def show_users_player_defence
    if self.object.players.length != 0
      self.object.players.where(name: self.object.name)[0]["defence"]
    end
  end
  def show_users_player_physical
    if self.object.players.length != 0
      self.object.players.where(name: self.object.name)[0]["physical"]
    end
  end
  def show_users_player_rating
    if self.object.players.length != 0
      self.object.players.where(name: self.object.name)[0]["rating"]
    end
  end
  def show_users_player_image
    if self.object.players.length != 0
      self.object.players.where(name: self.object.name)[0]["image"]
    end
  end

  def get_users_average_rating

    if self.object.players.length != 0
      self.object.players.map{|a| a.rating}.inject(0, :+)/self.object.players.length
    end
  end

end
