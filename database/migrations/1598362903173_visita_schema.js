'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VisitaSchema extends Schema {
  up () {
    this.create('visitas', (table) => {
      table.increments('id');
      table.date('data').notNullable();
      table.integer('numero_visitantes').defaultTo(0).notNullable();
      table.string('nome_responsavel', 120).notNullable();
      table.integer('status', 1).defaultTo(1).notNullable();

      table.integer('horario_id').unsigned()
        .references('id')
        .inTable('horarios')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
  }

  down () {
    this.drop('visitas')
  }
}

module.exports = VisitaSchema