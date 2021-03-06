'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AtracaoSchema extends Schema {
  up () {
    this.create('atracoes', (table) => {
      table.increments('id');
      table.string('nome', 255).notNullable();
      table.date('dia_inicio').notNullable();
      table.date('dia_fim').notNullable();
      table.boolean('ativo').notNullable();
      table.timestamps();
    })
  }

  down () {
    this.drop('atracoes')
  }
}

module.exports = AtracaoSchema
