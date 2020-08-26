'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Permissao extends Model {

  funcionario() {
    return this.belongsTo('App/Models/Funcionario')
  }
}

module.exports = Permissao