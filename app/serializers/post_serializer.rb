class PostSerializer < ActiveModel::Serializer
  attributes :id, :url, :post_content, :post_tag, :post_like, :post_save, :board_id, :user_id, :image_url
  has_one :user
  has_one :board
  
end
