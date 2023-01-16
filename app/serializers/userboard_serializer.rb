class UserboardSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :board_id
  # has_one :user
  # has_one :board
end
