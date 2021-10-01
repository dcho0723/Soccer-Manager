Rails.application.routes.draw do

    resources :user_players
    resources :players
    resources :users, only: [:show, :index]

    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    
    post "/signup", to: "users#create"
    get "/me", to: "users#show"
    get "/team", to: "users#team"

    post "/players/new", to: "players#create"
    patch "players/:playerId/update", to: "players#update"

    post "/userplayer", to: "user_players#create"
    delete "/team/:id/remove", to: "user_players#destroy"

end
