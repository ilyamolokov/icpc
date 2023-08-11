export enum Types {
  Message = "PROBLEM_COMMENT_RECEIVED",
  Code = "CODE_EDITOR_UPDATE",
  User = "USER",
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
}

export interface Data {
  type: Type
  payload?: Payload
}

export type Handler<P extends Payload = Payload> = (payload: P) => void

export type MessageHandler = (payload: MessagePayload) => void
export type CodeHandler = (payload: CodePayload) => void

export type Handlers = {
  [key in Type]: Record<string, Handler>
}

export const initialHandlers: Handlers = {
  [Types.Message]: {},
  [Types.Code]: {},
  [Types.User]: {},

}

export interface SubscribeParams {
  eventName: Type
  problemAlias?: string
  handler: Handler
}
