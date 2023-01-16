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

ActiveRecord::Schema[7.0].define(version: 2023_01_14_182237) do
  create_table "boards", force: :cascade do |t|
    t.string "title"
    t.string "color"
    t.string "favorite"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "posts", force: :cascade do |t|
    t.string "url"
    t.string "post_content"
    t.string "post_tag"
    t.integer "post_like"
    t.boolean "post_save"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "board_id", null: false
    t.index ["board_id"], name: "index_posts_on_board_id"
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "userboards", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "board_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["board_id"], name: "index_userboards_on_board_id"
    t.index ["user_id"], name: "index_userboards_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.integer "age"
    t.string "location"
    t.string "profile_photo"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "pass_confirmation"
    t.string "bio"
  end

  add_foreign_key "posts", "boards"
  add_foreign_key "posts", "users"
  add_foreign_key "userboards", "boards"
  add_foreign_key "userboards", "users"
end
