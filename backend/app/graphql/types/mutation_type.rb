# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :login, mutation: Mutations::Login
    field :signup, mutation: Mutations::Signup
  end
end
