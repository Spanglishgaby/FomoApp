class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment_content
  #has_one :post
  has_one :user
end
