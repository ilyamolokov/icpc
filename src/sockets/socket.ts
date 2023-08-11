import { CodeHandler, CodePayload, Data, Handler, Handlers, initialHandlers, MessageHandler, SubscribeParams, Type, Types } from "./types"
import { YandexUser } from "../types/types"
import { urls } from "../constants/urls"

class Socket {
  private client: WebSocket
  private readonly handlers: Handlers = initialHandlers

  constructor() { }

  public init(user: YandexUser) {
    console.log(user)
    this.client = new WebSocket(`${urls.websocket}?training_session_id=${urls.training_session_id}&user_id=${user.client_id}`)

    this.client.onopen = function () {
      this.send(JSON.stringify({ type: Types.User, payload: { user } }))
    }

    this.client.onmessage = (evt: MessageEvent<string>) => {
      const { type, payload }: Data = JSON.parse(evt.data)
      console.log(JSON.parse(evt.data))

      if (payload && payload.problemAlias) {
        this.handlers[type][payload.problemAlias](payload)
      }
    }
  }

  public sendCode(payload: CodePayload) {
    this.send({ type: Types.Code, payload })
  }

  public subscribeMessage(problemAlias: string, handler: MessageHandler) {
    // @ts-ignore
    this.subscribe({ eventName: Types.Message, problemAlias, handler })
  }

  public subscribeEditor(problemAlias: string, handler: CodeHandler) {
    // @ts-ignore
    this.subscribe({ eventName: Types.Code, problemAlias, handler })
  }

  private send(data: Data) {
    this.client.send(JSON.stringify(data))
  }

  private subscribe({ eventName, problemAlias, handler }: SubscribeParams) {
    if (problemAlias) {
      this.subscribeProblemEvent(eventName, problemAlias, handler)
    }
  }

  private subscribeProblemEvent(eventName: Type, problemAlias: string, handler: Handler) {
    this.handlers[eventName][problemAlias] = handler
  }
}

export const socket = new Socket()
