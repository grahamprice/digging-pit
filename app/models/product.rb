class Product < ApplicationRecord
    belongs_to :category
    belongs_to :user
    has_many :cart_items
    has_many :users, through: :cart_items
    has_one_attached :poster

    def poster_url
        Rails.application.routes.url_helpers.url_for(poster) if poster.attached?
    end
    
end
