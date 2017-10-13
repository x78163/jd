Rails.application.routes.draw do
  get '/' => 'static_pages#home'

  get '/home' => 'static_pages#home'

  get '/military' => 'static_pages#military'

  get '/web' => 'static_pages#web'

  get '/aug' => 'static_pages#aug'

  get '/drone' => 'static_pages#drone'

  get '/patent' => 'static_pages#patent'

  get 'paper' => 'static_pages#paper'

  get 'experience' => 'static_pages#experience'

  get 'travel' => 'static_pages#travel'

  get 'ubiqum1' => 'static_pages#ubiqum1'

  get 'ubiqum2' => 'static_pages#ubiqum2'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
