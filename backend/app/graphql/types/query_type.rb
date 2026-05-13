# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :categories, [ Types::CategoryType ], null: false
    field :products, [ Types::ProductType ], null: false do
      argument :category_id, ID, required: false
    end
    field :product, Types::ProductType, null: false do
      argument :id, ID, required: true
    end

    def categories
      Category.all
    end

    def products(category_id:)
      if category_id.present?  
        category = Category.find(category_id)
        category.products
      else
        Product.all
      end
    end

    def product(id:)
      Product.find(id)
    end
  end
end
