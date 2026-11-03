# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

if Rails.env.development?
  AdminUser.find_or_create_by!(email: ENV.fetch('ADMIN_USER', 'admin@example.com')) do |admin|
    password = ENV.fetch('ADMIN_PASSWORD', 'password123')

    admin.password = password
    admin.password_confirmation = password
  end

  puts "Development AdminUser created or already exists."
end

Category.find_or_create_by!(name: "Test")