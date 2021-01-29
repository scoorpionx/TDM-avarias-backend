'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OccurrenceSchema extends Schema {
  up () {
    this.create('occurrences', (table) => {
      table.increments()
      table.integer('client_id_fk')
        .references('id')
        .inTable('clients')
        .notNullable()
      table.integer('nfo_id_fk')
        .references('id')
        .inTable('nfs')
      table.integer('nfd_id_fk')
        .references('id')
        .inTable('nfs')
      table.integer('locale_id_fk')
        .references('id')
        .inTable('locales')
      table.string('occurrence_num_vr', 50)
      table.string('status', 10).notNullable()
      table.string('type', 20)
      table.integer('cte_filial').notNullable()
      table.integer('cte_num').notNullable()
      table.string('name_mot', 150).notNullable()
      table.string('dt_carga', 80).notNullable()
      table.string('released_on_vr', 2)
      table.boolean('debit_mot')
      table.float('value_sold')
      table.float('value_debit_mot')
      table.float('loss')
      table.datetime('nfd_in')
      table.datetime('nfd_out')
      table.string('obs', 254)
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
    this.raw("ALTER TABLE occurrences ADD CONSTRAINT CK_occurrences_status CHECK (status IN('PENDENTE', 'DEVOLUÇÃO', 'EM ESPERA', 'VENDA', 'FINALIZADO'))")
    this.raw("ALTER TABLE occurrences ADD CONSTRAINT CK_occurrences_type CHECK (type IN('AVARIA', 'AVARIA / FALTA', 'AVARIA / INVERSÃO', 'CODIGO DE BARRA ILEGIVEL', 'DESACORDO COMERCIAL', 'DEVOLUÇÃO TOTAL', 'DIVERGÊNCIA DE ITEM', 'DIVERGÊNCIA DE PREÇO', 'DUPLICIDADE', 'FALTA', 'FALTA / INVERSÃO', 'ICMS', 'INVERSÃO', 'N/A', 'NÃO ACORDOU PRORROGAÇÃO', 'PALETE', 'PEDIDO CANCELADO', 'PROBLEMA TECNICO', 'PROD SEM CADASTRO', 'QUALIDADE', 'RECUSA', 'REMESSA TROCADA', 'SEM AGENDAMENTO', 'SEM PEDIDO', 'SOBRA', 'TRIBUTAÇÃO', 'VALIDADE PRÓXIMA', 'VENCIDO'))")
  }

  down () {
    this.drop('occurrences')
  }
}

module.exports = OccurrenceSchema
