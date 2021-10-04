class Player < ApplicationRecord
    has_many :user_players
    has_many :users, through: :user_players

    validates_presence_of :dob, :country, :image, :rating, :number, :position, :pace, :shot, :pass, :dribble, :defence, :physical

    validates :rating, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 100}
    validates :number, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 100}
    validates :pace, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 100}
    validates :shot, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 100}
    validates :pass, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 100}
    validates :dribble, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 100}
    validates :defence, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 100}
    validates :physical, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 100}


end
