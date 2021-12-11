import axios from 'axios'
import { apiUrl } from '../../constants/urls'

export const updateNumberOfViews = (id: string, token: string) =>
  axios.put(`${apiUrl}/views/${id}`, undefined, {
    headers: {
      "Authorization": "Bearer " + token
    }
  })
