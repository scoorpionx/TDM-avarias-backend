# Backend application to the Damage System Control from TDM Transportes

Application to serve the endpoints for the web app of the damage system of the TDM Transportes (BR) with suitable structure.
(Aplicação para servir os endpoints para a aplicação web do sistema de avarias da TDM Transportes com estrutura adequada.)

## Setup

Clone the repo and then run `npm install` or `yarn` to install all the dependences.

### .env

Edit the .env file with the apropriate configurations for your application.

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Run

Run the following command to run the application with development mode.

```js
adonis serve --dev
```
