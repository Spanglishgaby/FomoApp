class Post < ApplicationRecord
  belongs_to :board
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_one_attached :image
  def image_url
    Rails.application.routes.url_helpers.url_for(image) if image.attached?
  end
end
