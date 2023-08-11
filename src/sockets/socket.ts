import { CodeHandler, CodePayload, Data, Handler, Handlers, initialHandlers, MessageHandler, Type, Types } from "./types"
import { YandexUser } from "../types/types"
import { urls } from "../constants/urls"

class Socket {
  private client: WebSocket
  private initialized: boolean = false

  private readonly handlers: Handlers = initialHandlers

  constructor() {}

  public init(user: YandexUser) {
    if (!this.initialized) {
      this.client = new WebSocket(`${urls.websocket}?training_session_id=${urls.training_session_id}&user_id=${user.id}`)

      this.client.onopen = function () {
        this.send(JSON.stringify({ type: Types.User, payload: { user } }))
      }

      this.client.onmessage = (evt: MessageEvent<string>) => {
        const { type, payload }: Data = JSON.parse(evt.data)
        console.log(JSON.parse(evt.data))

        if (this.handlers[type]) {
          this.handlers[type](payload)
        }
      }
      this.initialized = true;
    }
  }

  public sendCode(payload: CodePayload) {
    this.send({ type: Types.Code, payload })
  }

  public subscribeMessage(handler: MessageHandler) {
    // @ts-ignore
    this.subscribe(Types.Message, handler)
  }

  public subscribeEditor(handler: CodeHandler) {
    // @ts-ignore
    this.subscribe(Types.Code, handler)
  }

  private send(data: Data) {
    this.client.send(JSON.stringify(data))
  }

  private subscribe(eventName: Type, handler: Handler) {
    this.handlers[eventName] = handler
  }
}

export const socket = new Socket()
