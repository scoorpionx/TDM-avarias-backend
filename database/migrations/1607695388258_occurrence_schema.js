'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OccurrenceSchema extends Schema {
  up () {
    this.create('occurrences', (table) => {
      table.increments()
      table.integer('client_id_fk').references('id').inTable('clients').notNullable()
      table.integer('nfo_id_fk').references('id').inTable('nfs')
      table.integer('nfd_id_fk').references('id').inTable('nfs')
      table.integer('locale_id_fk').references('id').inTable('locales')
      table.string('occurrence_num_vr', 50)
      table.enu('status', ['PENDENTE', 'DEVOLUÇÃO', 'EM ESPERA', 'VENDA', 'FINALIZADO'], {
        useNative: true
      }).notNullable()
      table.enu('type', ['AVARIA', 'FALTA', 'VALIDADE PRÓXIMA', 'DESACORDO COMERCIAL', 'INVERSÃO / SOBRA', 'DESACORDO COM O PEDIDO', 'SEM PEDIDO'])
      table.integer('cte_filial').notNullable()
      table.integer('cte_num').notNullable()
      table.string('name_mot', 150).notNullable()
      table.integer('dt_carga').notNullable()
      table.boolean('released_on_vr')
      table.boolean('debit_mot')
      table.float('value_sold')
      table.float('value_debit_mot')
      table.float('loss')
      table.datetime('nfd_in')
      table.datetime('nfd_out')
      table.string('obs', 254)
      table.integer('created_by_fk').references('id').inTable('users').notNullable()
      table.integer('updated_by_fk').references('id').inTable('users').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('occurrences')
  }
}

module.exports = OccurrenceSchema
