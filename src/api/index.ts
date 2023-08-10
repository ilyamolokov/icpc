import axios, { AxiosInstance } from "axios"

import { checkAuthorizationToken } from "../helpers/checkAuthorizationToken"
import { configInterceptor } from "../helpers/configInterceptor"
import { errorInterceptor } from "../helpers/errorInterceptor"
import { urls } from "./urls"
import { Problem } from "../types/types"

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

  async getProblems(contestId: string) {
    return (await this.get(`contests/${contestId}/problems`)).problems
  }

  async getProblemStatement(contestId: string, alias: string) {
    return await this.get(`contests/${contestId}/problems/${alias}/statement`)
  }
  async getMe() {
    return await this.get('user/me')
  }
}

export const api = new Api(urls.openApiUrl)
