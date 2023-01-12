class User < ApplicationRecord
    has_secure_password
    has_many :comments
    has_many :posts, through: :comments

    validates :name, presence: true
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true, confirmation: true, length: { minimum: 10 }



end