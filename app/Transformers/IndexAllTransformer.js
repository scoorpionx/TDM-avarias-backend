'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')

/**
 * IndexAllTransformer class
 *
 * @class IndexAllTransformer
 * @constructor
 */
class IndexAllTransformer extends BumblebeeTransformer {
  /**
   * This method is used to transform the data.
   */
  transform (model) {
    return {
      "id": model.oc_id,
      "occurrence_num_vr": model.oc_num_vr,
      "status": model.oc_status,
      "type": model.oc_type,
      "cte_filial": model.oc_cte_filial,
      "cte_num": model.oc_cte_num,
      "name_mot": model.oc_name_mot,
      "dt_carga": model.oc_dt_carga,
      "released_on_vr": model.oc_released_on_vr,
      "debit_mot": model.oc_debit_mot,
      "value_sold": model.oc_value_sold,
      "value_debit_mot": model.oc_value_debit_mot,
      "loss": model.oc_loss,
      "nfd_in": model.oc_nfd_in,
      "nfd_out": model.oc_nfd_out,
      "obs": model.oc_obs,
      "nfo": {
        "id": model.nfo_id,
        "active": model.nfo_active,
        "number": model.nfo_number,
        "type": model.nfo_type,
        "key": model.nfo_key,
        "emission": model.nfo_emission,
        "value": model.nfo_value,
      },
      "nfd": {
        "id": model.nfd_id,
        "active": model.nfd_active,
        "number": model.nfd_number,
        "type": model.nfd_type,
        "key": model.nfd_key,
        "emission": model.nfd_emission,
        "value": model.nfd_value,
        "product": {
          "id": model.nfd_product_id,
          "active": model.nfd_product_active,
          "name": model.nfd_product_name,
          "packing": model.nfd_product_packing,
        },
      },
      "locale": {
        "id": model.locale_id,
        "name": model.locale_name,
        "address": model.locale_address,
        "district": model.locale_district,
        "city": model.locale_city,
        "uf": model.locale_uf,
      },
      "client": {
        "id": model.client_id,
        "active": model.client_active,
        "corporate_name": model.client_corporate_name,
        "fantasy_name": model.client_fantasy_name,
        "cnpj": model.client_cnpj,
        "address": model.client_address,
        "district": model.client_district,
        "city": model.client_city,
        "uf": model.client_uf,
      },
      "created_by": model.created_by_username,
      "updated_by": model.updated_by_username,
      "created_at": model.oc_created_at,
      "updated_at": model.oc_updated_at,
    }
  }
}

module.exports = IndexAllTransformer
