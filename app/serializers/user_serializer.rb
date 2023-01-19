class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password, :age, :location, :profile_photo, :pass_confirmation, :bio
  # has_many :boards
  # has_many :posts
end
