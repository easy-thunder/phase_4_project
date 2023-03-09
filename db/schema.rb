# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_03_09_212500) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "user_weapons", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "weapon_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_user_weapons_on_user_id"
    t.index ["weapon_id"], name: "index_user_weapons_on_weapon_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "password_digest"
    t.string "username"
    t.string "email"
    t.integer "game_gems", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "weapons", force: :cascade do |t|
    t.float "fire_rate", default: 1.0
    t.integer "damage", default: 1
    t.float "area_of_effect", default: 1.0
    t.integer "pierce", default: 1
    t.float "weapon_reload", default: 3.0
    t.float "bullet_width", default: 1.0
    t.integer "critical_rate", default: 5
    t.integer "bullet_speed", default: 10
    t.string "name"
    t.integer "magazine", default: 7
    t.integer "accuracy", default: 1
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "user_weapons", "users"
  add_foreign_key "user_weapons", "weapons"
end
