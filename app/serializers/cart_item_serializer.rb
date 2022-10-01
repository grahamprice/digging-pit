class CartItemSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :user_id
  # belongs_to :user
  belongs_to :product
end
