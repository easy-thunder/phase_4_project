Rails.application.routes.draw do
  resources :map_weapon_squares, only:[:index, :create]
  resources :user_weapons, only:[:index, :create, :show]
  resources :weapons, only:[:create, :index, :destroy, :update]
  resources :users, only:[ :update, :index,:destroy]
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  post "/login", to: "sessions#create"
  get '/hello', to: 'application#hello_world'


  
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
  get '/hello', to: 'application#hello_world'
end
