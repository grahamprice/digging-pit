class User < ApplicationRecord
    has_secure_password
    has_many :products
    has_many :categories, through: :products
end
