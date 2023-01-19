Rails.application.routes.draw do
  resources :userboards
  resources :boards
  resources :comments
  resources :posts
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # routes to login page
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  post '/signup', to: "users#create"
  get "/me", to: "users#show"
  delete 'dashboard/boards/:id', to: 'boards#destroy'
  get "boardposts/:id", to: "boards#show_posts"
  get "boardusers/:id", to: "boards#show_users"
  get "postcomments/:id", to: "posts#show_comments"
  delete 'dashboard/board/posts/:id', to: 'posts#destroy'
  delete 'dashboard/users/:id', to: 'users#destroy'

end
