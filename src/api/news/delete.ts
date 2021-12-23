import axios from "axios";
import { apiUrl } from "../../constants/urls";

export function deleteNews(id: string, token: string) {
  return axios.delete(`${apiUrl}/news/delete`, {
    headers: {
      "Authorization": "Bearer " + token
    },
    data: { id }
  })
}
