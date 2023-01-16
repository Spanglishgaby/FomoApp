class Board < ApplicationRecord
    has_many :posts, dependent: :destroy
    has_many :userboards, dependent: :destroy
    has_many :users, through: :userboards
end
