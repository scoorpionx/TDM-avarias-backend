'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NfSchema extends Schema {
  up () {
    this.create('nfs', (table) => {
      table.increments()
      table.boolean('active').notNullable()
      table.integer('number').notNullable()
      table.integer('type').notNullable()
      table.string('key', 44).notNullable().unique()
      table.datetime('emission')
      table.float('value')
      table.integer('created_by_fk').references('id').inTable('users').notNullable()
      table.integer('updated_by_fk').references('id').inTable('users').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('nfs')
  }
}

module.exports = NfSchema
