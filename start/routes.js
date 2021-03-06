'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/register', 'AuthController.register')
Route.post('/authenticate', 'AuthController.authenticate')
Route.get('/report/classic-report', 'ReportController.index').middleware('auth')
Route.post('/view-index-all', 'ViewIndexAllController.index').middleware('auth')
Route.put('/view-index-all', 'ViewIndexAllController.show').middleware('auth')

Route.group(() => {
  Route.resource('client', 'ClientController').apiOnly()
  Route.resource('locale', 'LocaleController').apiOnly()
  Route.resource('nf', 'NfController').apiOnly()
  Route.resource('occurrence', 'OccurrenceController').apiOnly()
  Route.resource('product', 'ProductController').apiOnly()
}).middleware('auth')
