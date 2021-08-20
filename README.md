# Motivation
I created this app to help my GF to send ads to wpp groups, basically send limited ads in sequence with some interval.
<br/>
<br/>

# How it work ?
Each line in xlsx file is a ad, so just add name, image name, and text, it will send a image to wpp with a caption.
It uses your account, so will be necessary load the qr code in your acc.
<br/>
<br/>

# Configuration
*define your ads in ad.example.xlsx and rename ad.example.xlsx to ad.xlsx
* define the group name and interval(in seconds) inside .env.example and rename .env.example to .env
<br/>
<br/>

# How to make it run ?
* Clone the project
```
    git clone https://github.com/luciano-nascimento/outlet-wpp-bot.git
```
* From the new folder created run npm install
```
    npm install
```
* rename your.env.example to .env
* run it 
```
node app.js
```
* load the qr code from your wpp account
* it will load de xlsx and send the ads
<br/>
<br/>

# By the way
Follow her sotre in instagram @noviacessorios  

