'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Nf extends Model {
    static boot () {
        super.boot()
    }

    products () {
        return this.manyThrough('App/Models/NfProduct', 'products', 'id', 'nf_id_fk')
    }

    created_by () {
        return this.belongsTo('App/Models/User', 'created_by_fk', 'id')
    }

    updated_by () {
        return this.belongsTo('App/Models/User', 'updated_by_fk', 'id')
    }
}

module.exports = Nf
