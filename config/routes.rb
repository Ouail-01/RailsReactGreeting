Rails.application.routes.draw do
  # get 'root/index'
  root 'root#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api do
    get 'random_greeting', to: 'api#random_greeting'
  end
  
end
