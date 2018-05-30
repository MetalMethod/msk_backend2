# msk_backend2
NodeJS backend RESTful API built with Express framework, Auth0 authentication service and MongoDB

check src/config.js for global settings.

to start the API server (will launch in production mode with PM2 process mananger):
```npm start```

to check if the app is wunning as a daemon:
```pm2 list```

requires the instalation of PM2:
```npm install pm2 -g```
then 
```pm2 install pm2-intercom```

References:
- main tutorial (adding Auth0 steps are outdated):
https://scotch.io/tutorials/building-and-securing-a-modern-backend-api

- reference for mongoDb:
http://programmerblog.net/nodejs-mongodb-rest-api/

- security checks:
https://expressjs.com/en/advanced/best-practice-security.html

- integration in angular:
https://www.sitepoint.com/angular-rxjs-create-api-service-rest-backend/

- Auth0 setup:
https://auth0.com/docs/quickstart/backend/nodejs/01-authorization