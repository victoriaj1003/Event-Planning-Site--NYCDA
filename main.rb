require 'sinatra' 
require 'Mandrill'

get '/home'  do
	erb :home
end

get '/contacts' do
	erb :contacts
end

post '/contacts' do
	require 'mandrill'  
	m = Mandrill::API.new
	message = {  
	 :subject=> "Hello from the Mandrill API",  
	 :from_name=> "Your name",  
	 :text=>"Hi message, how are you?",  
	 :to=>[  
	   {  
	     :email=> "recipient@theirdomain.com",  
	     :name=> "Recipient1"  
	   }  
	 ],  
	 :html=>"<html><h1>Hi <strong>message</strong>, how are you?</h1></html>",  
	 :from_email=>"sender@yourdomain.com"  
	}  
	sending = m.messages.send message  
	puts sending
	redirect '/thanks'
end 

get '/thanks' do
  erb :thanks
end