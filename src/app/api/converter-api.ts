import { instance } from './client'
import { TPriceConverterRequest, TPriceConverterResponse } from './typesAPI/converterTypes'

export const converterAPI = {
  RUB_USD(data: TPriceConverterRequest) {
    return instance.post<TPriceConverterResponse>('', data)
  },
}
