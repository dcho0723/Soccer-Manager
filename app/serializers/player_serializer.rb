class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :dob, :club, :country, :image, :name, :rating, :number, :position, :pace, :shot, :pass, :dribble, :defence, :physical, :bench
end
