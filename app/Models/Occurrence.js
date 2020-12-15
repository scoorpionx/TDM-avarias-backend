'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Occurrence extends Model {
    static boot () {
        super.boot()
    }

    nfo () {
        return this.belongsTo('App/Models/Nf', 'nfo_id_fk', 'id')
    }

    nfd () {
        return this.belongsTo('App/Models/Nf', 'nfd_id_fk', 'id')
    }

    locale () {
        return this.belongsTo('App/Models/Locale', 'locale_id_fk', 'id')
    }

    client () {
        return this.belongsTo('App/Models/Client', 'client_id_fk', 'id')
    }

    created_by () {
        return this.belongsTo('App/Models/User', 'created_by_fk', 'id')
    }

    updated_by () {
        return this.belongsTo('App/Models/User', 'updated_by_fk', 'id')
    }
}

module.exports = Occurrence
