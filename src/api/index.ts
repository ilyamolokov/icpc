import axios from "axios"

import { checkAuthorizationToken } from "../helpers/checkAuthorizationToken"
import { configInterceptor } from "../helpers/configInterceptor"
import { errorInterceptor } from "../helpers/errorInterceptor"

class Api {
  constructor() {
    checkAuthorizationToken()
    axios.interceptors.request.use(configInterceptor, errorInterceptor)
  }

  async get(url: string, params?: Record<string, unknown>) {
    return await axios(url, { params })
  }
}

export const api = new Api()
