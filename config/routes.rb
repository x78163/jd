Rails.application.routes.draw do
  get '/' => 'static_pages#home'

  get '/home' => 'static_pages#home'

  get '/military' => 'static_pages#military'

  get '/web' => 'static_pages#web'

  get '/aug' => 'static_pages#aug'

  get '/drone' => 'static_pages#drone'

  get '/patent' => 'static_pages#patent'

  get 'paper' => 'static_pages#paper'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
