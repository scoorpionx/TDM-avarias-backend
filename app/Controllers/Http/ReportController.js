'use strict'

const Report = use('App/Models/Report')

class ReportController {
  async index () {
    const reportData = await Report.query().fetch()

    return reportData
  }
}

module.exports = ReportController
