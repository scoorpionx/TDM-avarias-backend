'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

const TranslatePacking = {
    CX: 1,
    UN: 2,
    FD: 3,
    PCT: 4
}

class Product extends Model {
    static boot () {
        super.boot()
        
        this.addHook('beforeCreate', async (productInstance) => {
            productInstance.packing = TranslatePacking[productInstance.packing]

            if(!productInstance.packing) {
                throw new Error('Tipo de embalagem informado não encontrado.')
            }
        })
        
        this.addHook('beforeUpdate', async (productInstance) => {
            if(productInstance.packing) {
                productInstance.packing = TranslatePacking[productInstance.packing]
                
                if(!productInstance.packing) {
                    throw new Error('Tipo de embalagem informado não encontrado.')
                }
            }
        })
    }

    
    created_by () {
        return this.belongsTo('App/Models/User', 'created_by_fk', 'id')
    }

    updated_by () {
        return this.belongsTo('App/Models/User', 'updated_by_fk', 'id')
    }
}

module.exports = Product
