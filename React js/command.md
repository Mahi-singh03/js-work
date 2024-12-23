CREATE THE NEW REACT APP AND START THE SERVER :
-


STEP 1 ) To crete the new react app:
   
     npx create-react-app my-app 

* { "my-app" can be replace with name of React app you want to create }
* { use " . " at hte place of "my-app" to create the app inside the current folder}
* { the name of the app canot contain capital letters }

STEP 2 ) To start the server :
 
  Open the integrarted terminal in the app folder and run the command :
    
    npm start


TROUBLESHOOTINIG
-





the troubleshootinng for ll the potential problm occurs in order to install the new React App :
    
     npm install web-vitals
     npm config get registry
     npm config set registry http://registry.npmjs.org
     npm cache clean --force 
     npm install -g npm@latest

RE-INSTALL DEPENDENCIES FOLDER :
-


when you commit the code to git, it ignores the dependencies folder.
when you clone the project the project is cloned without the dependencies folder. 
you can restrore the all the deppendencies by the command :

    npm install
this command install all the deppendencies.
   
     npm start
thos command runs the server  





UPLOAD THE PROJECT TO GIT :
-

STEP [1] : s