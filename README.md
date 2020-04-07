## Getting started
 Add enviroment files to your system - in project root directory run command
```bash
$ source .env
```
To check result run
```bash
$ docker-compose -f docker-compose.dev.yml config
```
<h3><b>Tools required:</b></h3><ul><li>docker</li><li>docker-compose</li></ul>
 
## Running the app in development mode

```bash
$ docker-compose -f docker-compose.dev.yml up -d [Service name]
```
## Running the app in production mode

```bash
In progress
```

## List of services
<h3><b>Front-end:</b></h3><ul><li><i>web-view</i> - Angular App -> <a href="localhost:4200"><b>localhost:4200</b></a> (by default) </li></ul>
<h3><b>Back-end:</b></h3><ul><li><i>gateway</i> - REST Gateway -> <a href="localhost:3001"><b>localhost:3001</b></a> (by default). API documentation -> <a href="localhost:3001/docs"><b>localhost:3001/docs</b></a>  </li> <li><i>user</i> - microservice for user data handling</li><li><i>auth0parser</i> - microservice for parsing data from Auth0 client API </li><li><i>googleparser</i> - microservice for parsing data from Google API </li></ul>



