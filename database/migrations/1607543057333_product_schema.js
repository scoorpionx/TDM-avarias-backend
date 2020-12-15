'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.boolean('active').notNullable()
      table.string('name', 140)
      table.integer('packing').notNullable()
      table.integer('created_by_fk').references('id').inTable('users').notNullable()
      table.integer('updated_by_fk').references('id').inTable('users').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
