class BoardSerializer < ActiveModel::Serializer
  attributes :id, :title, :color, :favorite
end
