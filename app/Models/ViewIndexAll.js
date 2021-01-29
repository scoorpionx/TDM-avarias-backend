'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ViewIndexAll extends Model {
  static boot () {
    super.boot()
  }

  static get table () {
    return 'index_all_data_view'
  }
}

module.exports = ViewIndexAll
