class AddPassConfirmToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :pass_confirmation, :string
  end
end
