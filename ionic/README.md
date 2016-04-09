#Barcamp Bangalore App

Barcamp Bangalore app build with Ionic. Generates Android & iOS builds.

#How to build for Android

1. Install [Node](https://nodejs.org/en/download/) (Ionic mentions currently only v4 works)
2. Install Ionic
    npm install -g cordova ionic
3. Install [Android SDK](http://ionicframework.com/docs/guide/installation.html)
4. Install app dependencies
    bower install ngCordova
    plugins :

    cordova plugin add cordova-plugin-file-transfer
    cordova plugin add https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin.git
    cordova plugin add cordova-plugin-whitelist

    For push notifications, follow the ionic docs.

    ionic add ionic-platform-web-client
    cordova plugin add phonegap-plugin-push

5. This app uses sass for styling, run ionic setup sass
6. Read the [publishing guide](http://ionicframework.com/docs/guide/installation.html)
7. For future builds, just run build.bat
