class CreateBranches < ActiveRecord::Migration[6.0]
  def change
    create_table :branches do |t|
      t.string :name, null: false, default: ''
      t.string :street
      t.string :neighborhood
      t.integer :street_number
      t.integer :apartment_number
      t.integer :zip_code
      t.string :city
      t.string :country
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
    add_index :branches, :name
  end
end
