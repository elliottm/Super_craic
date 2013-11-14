require 'sinatra/base'

class WhatCraic < Sinatra::Base

  set :views, File.join(File.dirname(__FILE__), '..', 'views')

  get '/' do
    erb :index 
  end

  get '/mark' do
  	erb :mark	
  end

  get '/hemang' do
  	erb :hemang	
  end

  get '/ham' do
    erb :ham

  get '/abdi' do
    erb :abdi
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
