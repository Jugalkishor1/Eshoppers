class CreateProducts < ActiveRecord::Migration[8.1]
  def change
    create_table :products, id: :uuid do |t|
      t.string :name
      t.text :description
      t.decimal :price
      t.boolean :active, default: true
      t.references :category, type: :uuid, null: false, foreign_key: true

      t.timestamps
    end
  end
end
