class PostSerializer < ActiveModel::Serializer
  attributes :id, :url, :post_content, :post_tag, :post_like, :post_save
  has_one :user

  # belongs_to :users

  # def user_data
  #   User.find_by(id: object.user_id)
  # end
end
