class CreateBoards < ActiveRecord::Migration[7.0]
  def change
    create_table :boards do |t|
      t.string :title
      t.string :color
      t.string :favorite

      t.timestamps
    end
  end
end
