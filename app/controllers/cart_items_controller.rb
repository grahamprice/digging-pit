class CartItemsController < ApplicationController
    skip_before_action :authorized, only: :user_cart_items



def create
    cart_items = CartItem.create!(product_id: params[:product_id], user_id: session[:user_id], quantity: params[:quantity])
    render json:  cart_items, status: :created
end 

def user_cart_items
    cart_items = User.find_by(id: session[:user_id]).cart_items
    render json: cart_items, status: :ok
end

# def user_cart_items
#     user_id = params[:user_id]
#     cart_items = CartItem.where( "user_id = ?", user_id)
#     render json: cart_items, status: :ok
# end
private 

# def cart_item_params
#     params.permit(:product_id, :user_id, :quantity)
# end


    
end
