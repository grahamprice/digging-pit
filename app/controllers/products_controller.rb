class ProductsController < ApplicationController
    def index
            if params[:category_id]
              category = Category.find(params[:category_id])
              products = category.products
            else
              products = Product.all
            end
            render json: products
    end

    def show
        product = Product.find(params[:id])
        render json: product, status: :ok
    end
    

end
