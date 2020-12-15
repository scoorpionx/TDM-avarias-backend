'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Locale = use('App/Models/Locale')

/**
 * Resourceful controller for interacting with locales
 */
class LocaleController {
  /**
   * Show a list of all locales.
   * GET locales
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const locales = await Locale
      .query()
      .with('created_by')
      .with('updated_by')
      .fetch()

    return locales
  }

  /**
   * Create/save a new locale.
   * POST locales
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const data = request.only([
      'name',
      'address',
      'district',
      'city',
      'uf'
    ])

    const locale = await Locale.create({
      ...data,
      created_by_fk: auth.user.id,
      updated_by_fk: auth.user.id
    })
    
    return locale
  }

  /**
   * Display a single locale.
   * GET locales/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const locale = await Locale
      .query()
      .with('created_by')
      .with('updated_by')
      .where('id', params.id)
      .fetch()

    return locale
  }
  
  /**
   * Update locale details.
   * PUT or PATCH locales/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, auth }) {
    const data = request.only([
      'name',
      'address',
      'district',
      'city',
      'uf'
    ])

    const locale = await Locale.findOrFail(params.id)

    locale.merge({
      ...data,
      updated_by_fk: auth.user.id
    })
    
    await locale.save()
  }

  /**
   * Delete a locale with id.
   * DELETE locales/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const locale = await Locale.findOrFail(params.id)

    await locale.delete()
  }
}

module.exports = LocaleController
