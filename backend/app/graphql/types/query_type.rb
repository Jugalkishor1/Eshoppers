# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :products, [Types::ProductType], null: false

    def products
      Product.all
    end
  end
end
