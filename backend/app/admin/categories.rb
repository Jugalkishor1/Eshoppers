# app/admin/categories.rb

ActiveAdmin.register Category do
  permit_params :name, :active, :image

  index do
    selectable_column
    id_column

    column :name
    column :active
    column :created_at

  actions
  end

  filter :name
  filter :active
  filter :created_at

  form do |f|
    f.inputs do
      f.input :name
      f.input :image,
              as: :file,
              input_html: { multiple: false }
      f.input :active
    end

    f.actions
  end

  show do
    attributes_table do
      row :id
      row :name
      row :active
      row :images do |product|
        if product.image.attached?
          image_tag url_for(product.image.variant(resize_to_limit: [100, 100]))
        end
      end
      row :created_at
      row :updated_at
    end
  end
end