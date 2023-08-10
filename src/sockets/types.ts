export enum Types {
  Message = "message",
  Code = "code",
}

export type Type = `${Types}`

export interface Payload {
  problemAlias?: string
}

export interface MessagePayload extends Payload {
  message: string
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
}

export interface SubscribeParams {
  eventName: Type
  problemAlias?: string
  handler: Handler
}
