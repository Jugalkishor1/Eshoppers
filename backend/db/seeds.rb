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
  AdminUser.find_or_create_by!(email: ENV['ADMIN_USER']) do |admin|
    admin.password = ENV['ADMIN_PASSWORD']
    admin.password_confirmation = ENV['ADMIN_PASSWORD']
  end
  puts "Development AdminUser created: admin@example.com"
end