class RemoveWorkersTable < ActiveRecord::Migration[6.0]
  def change
    drop_table :workers
  end
end
