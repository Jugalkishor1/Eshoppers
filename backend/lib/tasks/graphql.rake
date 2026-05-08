namespace :graphql do
  desc "Dump GraphQL schema for frontend"

  task dump_schema: :environment do
    File.write("../schema.graphql", BackendSchema.to_definition)

    puts "Updated schema.graphql"
  end
end
