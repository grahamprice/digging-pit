class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password, :password_digest, :first_name, :last_name
end
