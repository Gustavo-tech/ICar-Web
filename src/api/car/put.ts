import axios from 'axios'
import { apiUrl } from '../../constants/urls'

export const updateNumberOfViews = (id: string, token: string) =>
  axios.put(`${apiUrl}/cars/views/${id}`, undefined, {
    headers: {
      "Authorization": "Bearer " + token
    }
  })
