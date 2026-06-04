module Mutations
  class Signup < BaseMutation
    argument :full_name, String, required: true
    argument :email, String, required: true
    argument :password, String, required: true

    field :user, Types::UserType, null: true
    field :errors, [String], null: false

    def resolve(full_name:, email:, password:)
      user = User.new(full_name: full_name, email: email, password: password)
      if user.save
        { user: user, errors: [] }
      else
        { user: nil, errors: user.errors.full_messages }
      end
    end
  end
end
