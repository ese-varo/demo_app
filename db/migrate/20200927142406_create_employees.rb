class CreateEmployees < ActiveRecord::Migration[6.0]
  def change
    create_table :employees do |t|
      t.string :first_name, null: false, default: ''
      t.string :maiden_name, null: false, default: ''
      t.string :last_name, null: false, default: ''
      t.string :rfc, null: false, default: '', limit: 13
      t.string :position
      t.string :branch, null: false, default: ''
      t.references :branch, null: false, foreign_key: true

      t.timestamps
    end
  end
end
