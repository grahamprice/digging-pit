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

    def create
      product = Product.create!(product_params)
      render json: product, status: :created
    end

    def show_search
      search_product = Product.find_by(prod_id: params[:prod_id])
      render json: search_product, status: :ok
    end

    
    private

    def product_params
      params.permit(:name, :description, :price, :image, :category_id, :user_id)
    end

end
