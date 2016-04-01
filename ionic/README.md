#Barcamp Bangalore App

Barcamp Bangalore app build with Ionic. Generates Android & iOS builds. 

#How to build for Android

1. Install [Node](https://nodejs.org/en/download/) (Ionic mentions currently only v4 works)
2. Install Ionic
    npm install -g cordova ionic
3. Install [Android SDK](http://ionicframework.com/docs/guide/installation.html)
4. Install app dependencies
    bower install ngCordova
    cordova plugin add https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin.git
5. Read the [publishing guide](http://ionicframework.com/docs/guide/installation.html)
6. For future builds, just run build.bat