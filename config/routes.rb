Rails.application.routes.draw do
  devise_for :users
  resources :users do
    resources :branches
  end

  resources :branches do
    resources :employees
  end

  root to: 'home#index'
end
