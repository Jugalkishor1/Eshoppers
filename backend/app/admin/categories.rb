# app/admin/categories.rb

ActiveAdmin.register Category do
  permit_params :name, :active

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
      f.input :active
    end

    f.actions
  end

  show do
    attributes_table do
      row :id
      row :name
      row :active
      row :created_at
      row :updated_at
    end
  end
end