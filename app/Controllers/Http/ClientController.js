'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Client = use('App/Models/Client')

/**
 * Resourceful controller for interacting with clients
 */
class ClientController {
  /**
   * Show a list of all clients.
   * GET clients
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const clients = await Client
      .query()
      .with('created_by')
      .with('updated_by')
      .fetch()

    return clients
  }

  /**
   * Create/save a new client.
   * POST clients
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const data = request.only([
      'corporate_name',
      'fantasy_name',
      'cnpj',
      'address',
      'district',
      'city',
      'uf',
      'active'
    ])

    const client = await Client.create({
      ...data,
      created_by_fk: auth.user.id,
      updated_by_fk: auth.user.id
    })
    
    return client

  }

  /**
   * Display a single client.
   * GET clients/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async show ({ params }) {
    const client = await Client
      .query()
      .with('created_by')
      .with('updated_by')
      .where('id', params.id)
      .fetch()

    return client
  }

  /**
   * Update client details.
   * PUT or PATCH clients/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, auth }) {
    const data = request.only([
      'corporate_name',
      'fantasy_name',
      'cnpj',
      'address',
      'district',
      'city',
      'uf',
      'active'
    ])
    
    const client = await Client.findOrFail(params.id)
    
    client.merge({
      ...data,
      updated_by_fk: auth.user.id
    })

    await client.save()
  }

  /**
   * Delete a client with id.
   * DELETE clients/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const client = await Client.findOrFail(params.id)

    await client.delete()
  }
}

module.exports = ClientController
