# AdmitCard

Description:
This is OTP Verification App where you have to Enter your phone number with country code and then click on "Sign in with OTP" and then eneter the OTP that has sendt to your phone numbe and click on Verify. If you Enter Correct OTP it redirects you to Home page.

Functionalities:

LoginScreen: 
* You can only enter numbers in phone number input upto ten ten digits. Ten digit phone number considered as the valid phone number.
* You have Select your country code for sending otp to your phone number.
* If you eneter valid phone number then you can able to click on "Sign in with OTP" button.

OTP Verification Screen:
* You have to enter the OTP that has sent to your mobile number.
* If you Click on "change mobile number" then it redirects you to login screen where you can change your mobile number.
* If you haven't recived the OTP then click on "resend OTP" button.
* If the OTP you have entered is not correct then it shows respective SnackBar.
* If you enetered Correct OTP then it redirects you to the Home Page.

App Images: 
All screen images with video has been given in the App Inages folder.

Inatallation:

Open your open folder in vscode or respected code editor and redirect to your project folder in terminal.
run git init and "git clone https://github.com/Sai3454/AdmitCard-frontend.git".

Frontend :
1. cd into the project(admitcardfrontend) and install dependencies by running "npm install"
2. run "npm run start"
   
Backend :
1. cd into the project(admitcardfrontend) and install dependencies by running "npm install"
2. run "node index.js"
