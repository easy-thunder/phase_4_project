class UserWeaponSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :weapon

end
