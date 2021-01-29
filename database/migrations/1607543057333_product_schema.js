'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.boolean('active').notNullable()
      table.string('name', 140)
      table.string('packing', 2).notNullable()
      table.integer('created_by_fk')
        .references('id')
        .inTable('users')
        .notNullable()
      table.integer('updated_by_fk')
        .references('id')
        .inTable('users')
        .notNullable()
      table.timestamps()
    })
    this.raw("ALTER TABLE products ADD CONSTRAINT CK_products_packing CHECK (packing IN('CX', 'UN', 'FD', 'PCT'))")
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
