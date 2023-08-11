export enum Types {
  Message = "PROBLEM_COMMENT_RECEIVED",
  Code = "CODE_EDITOR_UPDATE",
  User = "USER",
  ControlTaken = "CONTROL_TAKEN",
  VerdictRetrieved = "SUBMISSION_VERDICT_RETRIEVED",
}

export type Type = `${Types}`

export interface Payload {
  problemAlias?: string
}

export interface MessagePayload extends Payload {
  content: string
  id: string
  userFirstName: string
  userId: string
  userLastName: string
  userLogin: string
}

export interface CodePayload extends Payload {
  code: string
  userId: string
}

export interface ControlTakenPayload extends Payload {
  userId: string
}

export interface VerdictRetrievedPayload extends Payload {
  compileLog: string
  compiler: string
  diff: string
  problemAlias: string
  problemId: string
  score: number
  source: string
  submissionTime: string
  timeFromStart: number
  verdict: string
  id: number
}

export interface Data {
  type: Type
  payload?: Payload
}

export type Handler<P extends Payload = Payload> = (payload: P) => void

export type MessageHandler = (payload: MessagePayload) => void
export type CodeHandler = (payload: CodePayload) => void
export type ControlTakenHandler = (payload: ControlTakenPayload) => void
export type VerdictRetrievedHandler = (payload: VerdictRetrievedPayload) => void

export type Handlers = {
  [key in Type]?: Set<Handler>
}

export const initialHandlers = {}
