class User < ApplicationRecord
    has_secure_password

    has_many :posts
    has_many :userboards
    has_many :boards, through: :userboards

    validates :name, presence: true
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true, confirmation: true, length: { minimum: 10 }



end