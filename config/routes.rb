Rails.application.routes.draw do
  devise_for :users
  resources :users do
    resources :branches
  end
  root to: 'home#index'
end
