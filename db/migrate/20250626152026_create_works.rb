class CreateWorks < ActiveRecord::Migration[7.2]
  def change
    create_table :works do |t|
      t.string :title
      t.boolean :completed

      t.timestamps
    end
  end
end
