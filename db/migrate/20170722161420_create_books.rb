class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.string :landscape_type
      t.string :family_type
      t.string :food
      t.string :girl_name
      t.string :house_type
      t.string :food_description_one
      t.string :food_description_two
      t.string :seat_type
      t.string :bed_type

      t.timestamps
    end

    add_column :chapters, :book_id, :integer
  end
end
