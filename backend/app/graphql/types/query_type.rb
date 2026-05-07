# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :categories, [ Types::CategoryType ], null: false
    field :products, [ Types::ProductType ], null: false
    field :product, Types::ProductType, null: false do
      argument :id, ID, required: true
    end

    def categories
      Category.all
    end

    def products
      Product.all
    end

    def product(id:)
      Product.find(id)
    end
  end
end
