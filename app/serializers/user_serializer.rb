class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password, :age, :location, :profile_photo
  has_many :posts
  has_many :comments
end
