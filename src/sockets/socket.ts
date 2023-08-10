import {
  CodeHandler,
  CodePayload,
  Data,
  Handler,
  Handlers,
  initialHandlers,
  MessageHandler,
  MessagePayload,
  SubscribeParams,
  Type,
  Types,
} from "./types"

class Socket {
  private readonly client: WebSocket
  private readonly handlers: Handlers

  constructor() {
    this.client = new WebSocket("ws://51.250.65.5:8080/ws/lobby?team_id=8&user_id=1")
    this.handlers = initialHandlers

    this.client.onmessage = (evt: MessageEvent<string>) => {
      const { type, payload }: Data = JSON.parse(evt.data)

      if (payload && payload.problemAlias) {
        this.handlers[type][payload.problemAlias](payload)
      }
    }
  }

  public sendMessage(payload: MessagePayload) {
    this.send({ type: Types.Message, payload })
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
