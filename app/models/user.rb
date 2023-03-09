class User < ApplicationRecord
  has_secure_password
  has_many :user_weapons, dependent: :destroy
  has_many :weapons, through: :user_weapons
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  # validates :gem, numericality: {integer: true}
end
