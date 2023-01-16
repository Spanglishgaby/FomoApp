class AddPostToBoard < ActiveRecord::Migration[7.0]
  def change
    add_reference :boards, :post, null: false, foreign_key: true
  end
end
