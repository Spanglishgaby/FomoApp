class CommentSerializer < ActiveModel::Serializer
  attributes :id, :description, :author
  has_one :user
  # has_one :post
  def author
    self.object.user.name
  end
end
