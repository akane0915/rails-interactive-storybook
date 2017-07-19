class CreateChapters < ActiveRecord::Migration[5.1]
  def change
    create_table :chapters do |t|
      t.integer :number
      t.string :title
      t.string :text

      t.timestamps
    end
  end
end
