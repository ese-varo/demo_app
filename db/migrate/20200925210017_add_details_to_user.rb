class AddDetailsToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :first_name, :string, null: false, default: ''
    add_column :users, :maiden_name, :string, null: false, default: ''
    add_column :users, :last_name, :string, null: false, default: ''
    add_column :users, :company, :string, null: false, default: ''
    add_column :users, :rfc, :string, null: false, default: '', limit: 13

    add_index :users, :rfc, unique: true
    # add_index :users, :company, unique: true
  end
end
