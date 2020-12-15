'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class NfProduct extends Model {
    static boot () {
        super.boot()
    }

    products () {
        return this.hasMany('App/Models/Product', 'product_id_fk', 'id')
    }
}

module.exports = NfProduct
