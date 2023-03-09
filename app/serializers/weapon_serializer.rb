class WeaponSerializer < ActiveModel::Serializer
  attributes :id, :fire_rate, :damage, :area_of_effect, :pierce, :weapon_reload, :bullet_width, :critical_rate, :bullet_speed, :name, :magazine, :accuracy
end
