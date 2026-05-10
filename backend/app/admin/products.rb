# app/admin/products.rb

ActiveAdmin.register Product do
  permit_params :name,
                :description,
                :price,
                :active,
                :category_id,
                images: []

  index do
    selectable_column
    id_column

    column :name
    column :category
    column :price
    column :active
    column :created_at

    actions
  end

  filter :name
  filter :category
  filter :price
  filter :active
  filter :created_at

  form do |f|
    f.inputs do
      f.input :category
      f.input :name
      f.input :description
      f.input :price
      f.input :images,
              as: :file,
              input_html: { multiple: true }
      f.input :active
    end

    f.actions
  end

  show do
    attributes_table do
      row :id
      row :category
      row :name
      row :description
      row :price

      row :images do |product|
        if product.images.attached?
          ul do
            product.images.each do |img|
              li do
                image_tag url_for(
                  img.variant(resize_to_limit: [100, 100])
                )
              end
            end
          end
        end
      end

      row :active
      row :created_at
      row :updated_at
    end
  end
end
