require 'sinatra' 
require 'mandrill' 

get '/home'  do
	erb :home
end

get '/contacts' do
	erb :contacts
end

post '/contacts' do
	m = Mandrill::API.new(ENV['MANDRILL_APIKEY']) # Make sure this is set up properly in your bash profile. Refer to class notes. 
	message = {  
	 :subject=> "Hello from the Mandrill API",  
	 :from_name=> "Your name",  
	 :text=>"Hi message, how are you?",  
	 :to=>[  
	   {  
	     :email=> "recipient@theirdomain.com",  # Change this
	     :name=> "Recipient1"  
	   }  
	 ],  
	 :html=>"<html><h1>Hi <strong>message</strong>, how are you?</h1></html>",  
	 :from_email=>"sender@yourdomain.com"  # Change this too
	}  
	sending = m.messages.send message  
	puts sending
	redirect '/thanks'
end 

get '/thanks' do
  erb :thanks
end

get '/lvc_about' do
	erb :lvc_about
end

get '/gallery' do
	erb :gallery
end