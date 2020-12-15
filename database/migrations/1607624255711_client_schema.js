'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientSchema extends Schema {
  up () {
    this.create('clients', (table) => {
      table.increments()
      table.boolean('active').notNullable()
      table.string('corporate_name', 200).notNullable()
      table.string('fantasy_name', 200).notNullable()
      table.string('cnpj', 14).notNullable()
      table.string('address', 80)
      table.string('district', 80)
      table.string('city', 30)
      table.string('uf', 2)
      table.integer('created_by_fk').references('id').inTable('users').notNullable()
      table.integer('updated_by_fk').references('id').inTable('users').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('clients')
  }
}

module.exports = ClientSchema
