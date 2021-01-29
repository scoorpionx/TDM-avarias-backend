'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
    static boot () {
        super.boot()
    }


    created_by () {
        return this.belongsTo('App/Models/User', 'created_by_fk', 'id')
    }

    updated_by () {
        return this.belongsTo('App/Models/User', 'updated_by_fk', 'id')
    }
}

module.exports = Product
