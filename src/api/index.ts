import axios, { AxiosInstance } from "axios"

import { checkAuthorizationToken } from "../helpers/checkAuthorizationToken"
import { configInterceptor } from "../helpers/configInterceptor"
import { errorInterceptor } from "../helpers/errorInterceptor"
import { createFile } from "../utils/createFile"
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
  async post(url: string, body: string, params?: Record<string, unknown>) {
    return await this.client.post(url, body, { params })
  }

  async getSaveContests(contestId: string) {
    // каждый раз дергать для нового контеста (он сохраняется в бд)
    return await this.get(`contests/${contestId}`)
  }

  async getProblems(contestId: string) {
    return (await this.get(`contests/${contestId}/problems`)).problems
  }

  async getProblemStatement(contestId: string, alias: string) {
    return await this.get(`contests/${contestId}/problems/${alias}/statement`)
  }
  async getMe() {
    return await this.get("user/me")
  }

  async postSubmissions(trainingSessionId: string, code: string, compiler: string, problem: string) {
    const url = `/training-sessions/${trainingSessionId}/submissions`
    const formData = createFile(code)
    formData.append("compiler", compiler)
    formData.append("problem", problem)
    return await this.client.post(url, formData)
  }

  async getSubmissions(trainingSessionId: string, submissionId: number) {
    return await this.get(`/training-sessions/${trainingSessionId}/submissions/${submissionId}`)
  }

  async getSubmissionsFull(trainingSessionId: string, submissionId: number) {
    return await this.get(`/training-sessions/${trainingSessionId}/submissions/${submissionId}/full`)
  }
}

export const api = new Api(urls.openApiUrl)
