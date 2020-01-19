
== Test ==
 npm run test
 
== Run ==
 alias ic="ionic cordova "

 ic platform rm browser
 ic platform add browser
 ic build browser
 ic run browser --livereload --port 8102
 
 ic platform rm android
 ic platform add android
 # ic plugin remove cordova-plugin-googleplus
 # ic plugin add cordova-plugin-googleplus \
 #  --variable REVERSED_CLIENT_ID=com.googleusercontent.apps.287149765762-ifnium31igm6gfp5cvgpgmvk2ron1p97 \
 #  --variable WEB_APPLICATION_CLIENT_ID=287149765762-ifnium31igm6gfp5cvgpgmvk2ron1p97.apps.googleusercontent.com
 ic build android --debug
 ic build android --debug --env=staging
 ic build android --debug --prod
 ic run android --debug
 # ic run android -l -c -s --debug
 adb logcat
 chrome://inspect/#devices
 
== Build iOS ==
From: https://github.com/jeduan/cordova-plugin-facebook4/tree/master/docs/ios

 ic platform rm ios
 ic platform add ios # @^5.0.0
 ic plugin remove cordova-plugin-facebook4 --save
 ic plugin add cordova-plugin-facebook4 --variable APP_ID="3016949928380365" --variable APP_NAME="tgm.piousbox.com"
 # open xcode and sign the project for your team
 ic build ios -- --buildFlag="-UseModernBuildSystem=0"
 ./node_modules/.bin/ng run app:ionic-cordova-build:staging --platform=ios

 ic run ios -l --address=0.0.0.0
 ./node_modules/.bin/ng run app:ionic-cordova-serve:staging --host=0.0.0.0 --port=8101 --platform=ios

 ## ionic cordova prepare ios
 ./node_modules/.bin/ng run app:ionic-cordova-build:staging --platform=ios
 ./node_modules/.bin/cordova prepare ios

== Deploy browser ==
From: https://www.techrepublic.com/article/how-to-enable-ssl-on-nginx/

 sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt
 
 ic plugin remove cordova-plugin-facebook4 --save
 ic plugin add cordova-plugin-facebook4 --variable APP_ID="3016949928380365" --variable APP_NAME="tgm.piousbox.com"

 ic plugin remove cordova-plugin-googleplus --save

 ic platform rm browser 
 ic platform add browser
 ic build browser --prod




