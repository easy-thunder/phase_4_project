class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :game_gems
  has_many :weapons

end
