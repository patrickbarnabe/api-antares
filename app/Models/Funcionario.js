'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Funcionario extends Model {

  pessoa() {
    return this.hasOne('App/Models/Pessoa')
  }

  usuario() {
    return this.hasOne('App/Models/User')
  }

  permissao() {
    return this.hasOne('App/Models/Permissao')
  }
}

module.exports = Funcionario