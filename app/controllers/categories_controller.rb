class CategoriesController < ApplicationController
   
   def index
    render json: categories = Category.all
   end
   
    def mens
        men_category = Category.find_by(id: params[1])
        render json: men_category, status: :ok
    end

end
