'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Occurrence = use('App/Models/Occurrence')

/**
 * Resourceful controller for interacting with occurrences
 */
class OccurrenceController {
  /**
   * Show a list of all occurrences.
   * GET occurrences
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const occurrences = await Occurrence
    .query()
    .with('nfo')
    .with('nfd')
    .with('locale')
    .with('client')
    .with('created_by')
    .with('updated_by')
    .fetch()

    return occurrences
  }

  /**
   * Create/save a new occurrence.
   * POST occurrences
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth }) {
    const data = request.only([
      'user_id_fk',
      'client_id_fk',
      'nfo_id_fk',
      'nfd_id_fk',
      'locale_id_fk',
      'occurrence_num_vr',
      'status',
      'type',
      'cte_filial',
      'cte_num',
      'name_mot',
      'dt_carga',
      'released_on_vr',
      'debit_mot',
      'value_sold',
      'value_debit_mot',
      'loss',
      'nfd_in',
      'nfd_out',
      'obs'
    ])

    const occurrence = await Occurrence.create({
      ...data,
      created_by_fk: auth.user.id,
      updated_by_fk: auth.user.id
    })

    return occurrence
  }

  /**
   * Display a single occurrence.
   * GET occurrences/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const occurrence = await Occurrence
      .query()
      .with('nfo')
      .with('nfd')
      .with('locale')
      .with('client')
      .with('created_by')
      .with('updated_by')
      .where('id', params.id)
      .fetch()

    return occurrence
  }

  /**
   * Update occurrence details.
   * PUT or PATCH occurrences/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, auth }) {
    const data = request.only([
      'user_id_fk',
      'client_id_fk',
      'nfo_id_fk',
      'nfd_id_fk',
      'locale_id_fk',
      'occurrence_num_vr',
      'status',
      'type',
      'cte_filial',
      'cte_num',
      'name_mot',
      'dt_carga',
      'released_on_vr',
      'debit_mot',
      'value_sold',
      'value_debit_mot',
      'loss',
      'nfd_in',
      'nfd_out',
      'obs'
    ])

    const occurrence = await Occurrence.findOrFail(params.id)

    occurrence.merge({
      ...data,
      updated_by_fk: auth.user.id
    })

    await occurrence.save()
  }

  /**
   * Delete a occurrence with id.
   * DELETE occurrences/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const occurrence = await Occurrence.findOrFail(params.id)

    await occurrence.delete()
  }
}

module.exports = OccurrenceController


