class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :password_digest
      t.string :username
      t.string :email
      t.integer :game_gems, default:0

      t.timestamps
    end
  end
end
