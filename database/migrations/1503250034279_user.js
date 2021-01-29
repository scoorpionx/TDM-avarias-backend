'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('role', 10).notNullable()
      table.timestamps()
    })
    this.raw("ALTER TABLE users ADD CONSTRAINT CK_users_role CHECK (role IN('admin', 'user'))")
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
