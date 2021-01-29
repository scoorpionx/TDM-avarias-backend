'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LocalesSchema extends Schema {
  up () {
    this.create('locales', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.string('address', 80)
      table.string('district', 80)
      table.string('city', 30)
      table.string('uf', 2)
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
  }

  down () {
    this.drop('locales')
  }
}

module.exports = LocalesSchema
