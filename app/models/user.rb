class User < ApplicationRecord
    has_secure_password
    has_many :user_players
    has_many :players, through: :user_players

    validates :username, uniqueness: true
    validates_presence_of :username, :password, :name
end
