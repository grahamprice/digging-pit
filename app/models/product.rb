class Product < ApplicationRecord
    belongs_to :category
    belongs_to :user
    has_many :cart_items
    has_many :users, through: :cart_items
end
