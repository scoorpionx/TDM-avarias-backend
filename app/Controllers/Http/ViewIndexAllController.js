'use strict'

const ViewIndexAll = use('App/Models/ViewIndexAll')
const IndexAllTransformer = use('App/Transformers/IndexAllTransformer')

class ViewIndexAllController {
  async index ({ request, transform }) {
    const { page, status } = request.all()

    if(!page) {
      if(!status) {
        const allData = await ViewIndexAll
          .query()
          .orderBy('oc_id', 'asc')
          .fetch()

        return transform
          .collection(allData, IndexAllTransformer)
      }

      const allData = await ViewIndexAll
          .query()
          .whereIn('oc_status', status)
          .orderBy('oc_id', 'asc')
          .fetch()

        return transform
          .collection(allData, IndexAllTransformer)
    }

    if(!status) {
      const allData = await ViewIndexAll
        .query()
        .orderBy('oc_id', 'asc')
        .paginate(page)

      return transform
        .collection(allData, IndexAllTransformer)
    }

    const allData = await ViewIndexAll
      .query()
      .orderBy('oc_id', 'asc')
      .whereIn('oc_status', status)
      .paginate(page)

    return transform
      .paginate(allData, IndexAllTransformer)
  }

  async show ({ request, transform, response }) {
    const { page, status, cte_num } = request.all()

    if(!cte_num) {
      return response.status(404)
    }

    if(!page) {
      if(!status) {
        const allData = await ViewIndexAll
          .query()
          .where('oc_cte_num', cte_num)
          .orderBy('oc_id', 'asc')
          .fetch()

        return transform
          .collection(allData, IndexAllTransformer)
      }

      const allData = await ViewIndexAll
          .query()
          .where('oc_cte_num', cte_num)
          .whereIn('oc_status', status)
          .orderBy('oc_id', 'asc')
          .fetch()

        return transform
          .collection(allData, IndexAllTransformer)
    }

    if(!status) {
      const allData = await ViewIndexAll
        .query()
        .where('oc_cte_num', cte_num)
        .orderBy('oc_id', 'asc')
        .paginate(page)

      return transform
        .collection(allData, IndexAllTransformer)
    }

    const allData = await ViewIndexAll
      .query()
      .orderBy('oc_id', 'asc')
      .where('oc_cte_num', cte_num)
      .whereIn('oc_status', status)
      .paginate(page)

    return transform
      .paginate(allData, IndexAllTransformer)
  }
}

module.exports = ViewIndexAllController
