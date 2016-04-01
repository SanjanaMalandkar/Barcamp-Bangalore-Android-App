@echo off

echo Starting APK build
del BCB.apk
cmd /c cordova build --release android
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore platforms\android\build\outputs\apk\android-release-unsigned.apk alias_name
%android_home%\build-tools\23.0.3\zipalign.exe -v 4 platforms\android\build\outputs\apk\android-release-unsigned.apk BCB.apk

echo build complete!