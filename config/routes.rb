Rails.application.routes.draw do

  resources :products
  resources :categories
  
  resources :categories do
    resources :products
  end

  get 'sessions/create'
  get 'sessions/destroy'
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  resources :users
  
  # get '/hello', to: 'application#hello_world'

  get '/me', to: "users#show"
  #Men's section
  get '/mens', to: "products#show"
  get '/mens', to: "products#index"

  #Women's Section
  get '/womens', to: "products#show"
  get '/womens', to: "products#index"
  get '/womenscard', to: "products#show"
  get '/womenscard', to: "products#index"

  #To Mens Card
  get '/menscard', to: "products#show"

  get '/mens', to: "categories#mens"

  get '/signup', to: 'users#create'
  
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

  # #authorization route
  get "/auth", to: "users#show"
end
 