class PostSerializer < ActiveModel::Serializer
  attributes :id, :url, :post_content, :post_tag, :post_like, :post_save, :board_id, :user_id
  
end
