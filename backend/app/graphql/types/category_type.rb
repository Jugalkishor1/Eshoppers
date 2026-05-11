# frozen_string_literal: true

module Types
  class CategoryType < Types::BaseObject
    include Rails.application.routes.url_helpers

    field :id, ID, null: false
    field :name, String, null: false
    field :image, String, null: true

    def image
      return unless object.image.attached?

      rails_blob_url(object.image, host: context[:request].base_url)
    end
  end
end
