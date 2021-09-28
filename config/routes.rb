Rails.application.routes.draw do

    resources :user_players
    resources :players
    resources :users, only: [:show, :index]

    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    
    post "/signup", to: "users#create"
    get "/me", to: "users#show"

    post "/players/new", to: "players#create"

    post "/userplayer", to: "user_players#create"

end
