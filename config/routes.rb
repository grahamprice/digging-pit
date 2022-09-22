Rails.application.routes.draw do
  get 'sessions/create'
  get 'sessions/destroy'
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  resources :users
  
  # get '/hello', to: 'application#hello_world'

  get '/me', to: "users#show"

  get '/signup', to: 'users#create'
  
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

  # #authentication routes
  # post '/signup', to: "users#create"

end
 