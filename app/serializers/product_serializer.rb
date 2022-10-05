class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :category_id, :image, :poster_url
end
