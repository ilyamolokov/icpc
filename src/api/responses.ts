import { Message, Problem, Submission, YandexUser } from "../types/types"
import { stringify } from "querystring"

export interface GetProblemsResponse {
  problems: Problem[]
}

export type GetProblemStatementResponse = string

export interface GetCodeByAliasResponse {
  code: string
}

export type GetMessagesByAliasResponse = Message[]

export interface GetYandexUsersOnlineResponse {
  users: YandexUser[]
}

export interface GetSubmissionsByAliasResponse {
  count: number
  submissions: Submission[]
}
