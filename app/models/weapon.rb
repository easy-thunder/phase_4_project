class Weapon < ApplicationRecord
    has_many :user_weapons 
    has_many :users, through: :user_weapons
    has_many :map_weapon_squares
    # belongs_to :map_weapon_square
    # validates :fire_rate, numericality: true
    # validates :damage, numericality: true 
    # validates :area_of_effect, numericality: true
    # validates :pierce, numericality: true
    # validates :reload, numericality: true
    # validates :bullet_width, numericality: true
    # validates :critical_rate, numericality: true
    # validates :bullet_speed, numericality: true
end
