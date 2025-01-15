class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.string :client
      t.date :construction_start
      t.date :construction_completion
      t.text :content
      t.integer :people_count
      t.string :assign_member

      t.timestamps
    end
  end
end
