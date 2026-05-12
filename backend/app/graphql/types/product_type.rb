# frozen_string_literal: true

module Types
  class ProductType < Types::BaseObject
    include Rails.application.routes.url_helpers

    field :id, ID, null: false
    field :name, String, null: false
    field :description, String, null: true
    field :price, Float, null: false
    field :active, Boolean, null: false
    field :images, [String], null: true
    field :category, Types::CategoryType, null: false


    def images
      object.images.map do |image|
        rails_blob_url(image, host: context[:request].base_url)
      end
    end
  end
end
