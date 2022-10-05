Rails.application.routes.draw do
  resources :cart_items
  resources :products
  resources :categories
  resources :users
  
  resources :categories do
    resources :products
  end

  #Cart items with users

 delete '/delete_cart', to: 'cart_items#destroy'
  post '/add_to_cart', to: 'cart_items#create'
  get '/show_cart', to: 'cart_items#user_cart_items'

  # get 'sessions/create'
  # get 'sessions/destroy'
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  # get '/hello', to: 'application#hello_world'

  get '/me', to: "users#show"


  #search results

  get '/search_results', to: "products#show_search"
  # #Men's section
  # get '/mens', to: "products#show"
  # get '/mens', to: "products#index"

  #Women's Section
  # get '/womens', to: "products#show"
  # get '/womens', to: "products#index"
  # get '/womenscard', to: "products#show"
  # get '/womenscard', to: "products#index"

  #To Mens Card
  
  get '/newpost', to: "products#create"
  get '/newpost', to: "products#show"
  get '/newpost', to: "products#index"
  # get '/profile', to: "users#show"
  
  get '/mens', to: "categories#mens"

  get '/signup', to: 'users#create'
  
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

  # #authorization route
  get "/auth", to: "users#admin_show"

end
 