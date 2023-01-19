class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password, :age, :location, :profile_photo, :pass_confirmation, :bio
  # has_many :boards
  # has_many :posts
  # def fullname
  #   "#{self.object.name} #{self.object.last_name}"
  # end
end
