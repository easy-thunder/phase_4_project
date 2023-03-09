class UserWeapon < ApplicationRecord
  belongs_to :user
  belongs_to :weapon 
  validates :user_id, presence: true 
  validates :weapon_id, presence: true 
end
