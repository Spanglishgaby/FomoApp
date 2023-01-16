class AddBoardToPost < ActiveRecord::Migration[7.0]
  def change
    add_reference :posts, :board, null: false, foreign_key: true
  end
end
