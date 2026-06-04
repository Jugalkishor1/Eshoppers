module Mutations
  class Login < BaseMutation
    argument :email, String, required: true
    argument :password, String, required: true

    field :token, String, null: false
    field :user, Types::UserType, null: true

    def resolve(email:, password:)
      user = User.find_by(email: email)

      if user&.authenticate(password)
        token = JsonWebToken.encode(user_id: user.id)
        { token: token, user: user }
      else
        raise GraphQL::ExecutionError, 'Invalid email or password'
      end
    end
  end
end
