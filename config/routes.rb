Rails.application.routes.draw do

    resources :user_players
    resources :players
    resources :users

    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    
    post "/signup", to: "users#create"
    get "/me", to: "users#show"

end
