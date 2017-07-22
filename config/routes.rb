Rails.application.routes.draw do
  root to: 'books#index'

  resources :books do
    resources :chapters
  end

end
