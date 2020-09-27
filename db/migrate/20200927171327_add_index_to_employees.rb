class AddIndexToEmployees < ActiveRecord::Migration[6.0]
  def change
    add_index :employees, :rfc, unique: true
  end
end
