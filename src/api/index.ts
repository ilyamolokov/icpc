import axios from "axios"

import { configInterceptor } from "../helpers/configInterceptor"
import { errorInterceptor } from "../helpers/errorInterceptor"

class Api {
  constructor() {
    axios.interceptors.request.use(configInterceptor, errorInterceptor)
  }

  async get(url: string) {
    return await axios(url)
  }
}

export const api = new Api()
