require 'sinatra/base'

class WhatCraic < Sinatra::Base
  get '/' do
    'Hello WhatCraic!'
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
