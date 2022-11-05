class User < ApplicationRecord
    has_secure_password
    has_many :products
    has_many :categories, through: :products
    has_many :cart_items
    has_many :products, through: :cart_items
    
    validates :username, presence: true
end
