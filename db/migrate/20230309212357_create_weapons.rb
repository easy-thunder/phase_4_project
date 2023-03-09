class CreateWeapons < ActiveRecord::Migration[7.0]
  def change
    create_table :weapons do |t|
      t.float :fire_rate, default: 1
      t.integer :damage, default: 1
      t.float :area_of_effect, default: 1.0
      t.integer :pierce, default: 1
      t.float :weapon_reload, default: 3.0
      t.float :bullet_width, default: 1.0
      t.integer :critical_rate, default: 5
      t.integer :bullet_speed, default: 10.0
      t.string :name
      t.integer :magazine, default: 7
      t.integer :accuracy, default:1

      t.timestamps
    end
  end
end
