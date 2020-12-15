'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

const TranslateType = {
    DEVOLUCAO: 1,
    ORIGEM: 2,
}

class Nf extends Model {
    static boot () {
        super.boot()
        this.addHook('beforeCreate', async (nfInstance) => {
            nfInstance.type = TranslateType[nfInstance.type]

            if(!nfInstance.type) {
                throw new Error('Tipo de nota fiscal informado não encontrado.')
            }
        })
        
        this.addHook('beforeUpdate', async (nfInstance) => {
            if(typeof nfInstance.$attributes.type == 'string') {
                nfInstance.$attributes.type = TranslateType[nfInstance.$attributes.type]

                if(!nfInstance.$attributes.type) {
                    throw new Error('Tipo de nota fiscal informado não encontrado.')
                }
            }
        })
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
