class UserPlayerSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :player
end
