'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Nf = use('App/Models/Nf')
const NfProduct = use('App/Models/NfProduct')

/**
 * Resourceful controller for interacting with nfs
 */
class NfController {
  /**
   * Show a list of all nfs.
   * GET nfs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response }) {
    const { key } = request.get()

    if(!key) {
      const nfs = await Nf
        .query()
        .with('products')
        .with('created_by')
        .with('updated_by')
        .fetch()

      return nfs
    }

    const findedNfs = await Nf.findByOrFail('key', key)

    if(!findedNfs) return response.status(404)

    return findedNfs

  }

  /**
   * Create/save a new nf.
   * POST nfs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const nfData = request.only([
      'active',
      'number',
      'type',
      'key',
      'emission',
      'value'
    ])

    const nfProductData = request.only([
      'product'
    ])

    const nf = await Nf.create({
      ...nfData,
      created_by_fk: auth.user.id,
      updated_by_fk: auth.user.id
    })

    await NfProduct.create({
      nf_id_fk: nf.id,
      product_id_fk: nfProductData.id,
      created_by_fk: auth.user.id,
      updated_by_fk: auth.user.id
    })

    return Nf
      .query()
      .with('products')
      .with('created_by')
      .with('updated_by')
      .where('id', nf.id)
      .fetch()
  }

  /**
   * Display a single nf.
   * GET nfs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const nf = await Nf
      .query()
      .with('products')
      .with('created_by')
      .with('updated_by')
      .where('id', params.id)
      .fetch()

    return nf
  }

  /**
   * Update nf details.
   * PUT or PATCH nfs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, auth }) {
    const data = request.only([
      'active',
      'number',
      'type',
      'key',
      'emission',
      'value'
    ])

    const nf = await Nf.findOrFail(params.id)

    nf.merge({
      ...data,
      updated_by_fk: auth.user.id
    })

    await nf.save()
  }

  /**
   * Delete a nf with id.
   * DELETE nfs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const nf = await Nf.findOrFail(params.id)

    await nf.delete()
  }
}

module.exports = NfController
