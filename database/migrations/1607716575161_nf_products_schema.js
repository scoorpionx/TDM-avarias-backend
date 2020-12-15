'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NfProductsSchema extends Schema {
  up () {
    this.create('nf_products', (table) => {
      table.increments()
      table.integer('nf_id_fk').references('id').inTable('nfs').notNullable()
      table.integer('product_id_fk').references('id').inTable('products').notNullable()
      table.integer('created_by_fk').references('id').inTable('users').notNullable()
      table.integer('updated_by_fk').references('id').inTable('users').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('nf_products')
  }
}

module.exports = NfProductsSchema
