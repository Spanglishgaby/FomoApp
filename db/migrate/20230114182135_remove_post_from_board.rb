class RemovePostFromBoard < ActiveRecord::Migration[7.0]
  def change
    remove_reference :boards, :post, null: false, foreign_key: true
  end
end
