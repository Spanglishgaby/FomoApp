class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :url
      t.string :post_content
      t.string :post_tag
      t.integer :post_like
      t.boolean :post_save
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
