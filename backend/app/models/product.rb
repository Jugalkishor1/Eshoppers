class Product < ApplicationRecord
  belongs_to :category

  validates :name, presence: true

  has_many_attached :images
end
