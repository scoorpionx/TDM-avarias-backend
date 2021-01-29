'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Report extends Model {
  static boot () {
    super.boot()
  }

  static get table () {
    return 'classic_report_view'
  }
}

module.exports = Report
