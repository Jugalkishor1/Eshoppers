class CreateCategories < ActiveRecord::Migration[8.1]
  def change
    create_table :categories, id: :uuid do |t|
      t.string :name
      t.boolean :active, default: true

      t.timestamps
    end
  end
end
