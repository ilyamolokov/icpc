import axios, { AxiosInstance } from "axios"

import { checkAuthorizationToken } from "../helpers/checkAuthorizationToken"
import { configInterceptor } from "../helpers/configInterceptor"
import { errorInterceptor } from "../helpers/errorInterceptor"
import { urls } from "./urls"

class Api {
  private readonly client: AxiosInstance

  constructor(baseURL: string) {
    checkAuthorizationToken()
    this.client = axios.create({ baseURL })
    this.client.interceptors.request.use(configInterceptor, errorInterceptor)
  }

  async get(url: string, params?: Record<string, unknown>) {
    return (await this.client(url, { params })).data
  }

  async getTasks(contestId: string) {
    return (await this.get(`contests/${contestId}/problems`)).problems
  }

  async getTaskStatement(contestId: string, alias: string) {
    return await this.get(`contests/${contestId}/problems/${alias}/statement`)
  }
}

export const api = new Api(urls.openApiUrl)
