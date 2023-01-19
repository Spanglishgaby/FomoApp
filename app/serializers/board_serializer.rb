class BoardSerializer < ActiveModel::Serializer
  attributes :id, :title, :color, :favorite
  # has_many :posts
end
