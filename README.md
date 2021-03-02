# Reference
  https://www.djamware.com/post/5b00bb9180aca726dee1fd6d/mean-stack-angular-6-crud-web-application
  https://www.djamware.com/post/5a878b3c80aca7059c142979/securing-mean-stack-angular-5-web-application-using-passport
  https://github.com/didinj/mean-stack-angular6-crud-example

  https://www.codaffection.com/mean-stack-tutorial/mean-stack-login-and-logout-with-angular-6/
  https://www.c-sharpcorner.com/article/crud-operation-in-angular-6/

  https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/
  https://material.angular.io/components/categories
  https://alligator.io/angular/material-design-angular-reference/
  https://brianflove.com/2017/05/03/responsive-angular/
  https://stackblitz.com/edit/angular-material-file-upload

  http://localhost:4200/#/book-details/5bcc1189c81928fa96ea176a

  ** File upload coding remain

# Installation Procedure
  sudo npm uninstall -g @angular/cli
  sudo npm install -g @angular/cli@6.0.0

  ng new mean-angular6
  cd mean-angular6/npm install      
  cd mean-angular6/ng serve or cd mean-angular6/ng serve --port 1500

  npm install rxjs@6.0.0 --save
  npm i --save express body-parser morgan body-parser serve-favicon http-errors
  npm i --save mongoose bluebird bcrypt-nodejs jsonwebtoken morgan passport passport-jwt
  npm i --save express mongoose body-parser bcryptjs cors
  npm i --save jsonwebtoken passport passport-local lodash

  npm install @angular/cdk@6.0.0
  npm install @angular/material@6.0.0
  npm install @angular/animation@6.0.0

  Note:- Install all required npm packages by running npm install from the command line in the project root folder
  
# Testing Cred
  Uname: sourabh@mail.com
  Password: sourabh@123

# Local Server Setup Using Nodemon(port:1500)

  npm install --save-dev nodemon
  npm install --save-dev npm-run-all

  mkdir bin
  touch server.conf.json
  touch bin/www

  package.json
   "scripts": {
     "client": "ng serve --proxy-config server.conf.json",
     "server": "set NODE_ENV=development&&nodemon ./bin/www",
     "start": "npm-run-all -p client server"
   }

  server.conf.json
  {
    "/api": {
      "target": "http://localhost:1500",
      "secure": false
    }
  }

# Live Server Nginx Setup (port:5800)
  location /angularbookkeeping {
	     proxy_pass http://127.0.0.1:5800/angularbookkeeping;
	     proxy_http_version 1.1;
	     proxy_set_header Upgrade $http_upgrade;
	     proxy_set_header Connection 'upgrade';
	     proxy_set_header Host $host;
	     proxy_cache_bypass $http_upgrade;
  }

  location /angularbookkeeping/assets/images {
       root /var/www/public_html/angularbookkeeping/dist/assets/images;
  }

  package.json
   "scripts": {
      "client": "ng serve --proxy-config server.conf.json",
      "server": "set NODE_ENV=production&&node ./bin/www",
      "start": "npm-run-all -p client server",
   }

  server.conf.json
  {
   "/api": {
     "target": "http://localhost:5800",
     "secure": false
   }
  }


  forever start minUptime 1000 --spinSleepTime 1000 ./bin/www

  forever stopall   /*-------------If Required----------------*/

# Angular component creation (Directory:- src:-app)

  ng generate component componentname
  ng generate service servicename
  ng generate module modulename

  ng generate directive|pipe|service|class|guard|interface|enum|module

  Note:- If material.module.ts is present then

  ng generate component componentName --module=app.module

# Angular typescript debugging

  In Chrome Open DeveloperTool:-sources:-webpack:-.:- all typescript files are available.
  Debug in old javascript style.

# Angular Project Structure
