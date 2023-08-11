import {
  CodeHandler,
  CodePayload, ControlTakenHandler,
  ControlTakenPayload,
  Data,
  Handler,
  Handlers,
  initialHandlers,
  MessageHandler,
  Type,
  Types,
} from "./types"
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

        if (this.handlers[type]) {
          this.handlers[type].forEach(handler => handler(payload))
        }
      }

      this.initialized = true;
    }
  }

  public sendCode(payload: CodePayload) {
    this.send({ type: Types.Code, payload })
  }

  public sendControlTaken(payload: ControlTakenPayload) {
    this.send({ type: Types.ControlTaken, payload })
  }

  public subscribeMessage(handler: MessageHandler) {
    // @ts-ignore
    return this.subscribe(Types.Message, handler)
  }

  public subscribeEditor(handler: CodeHandler) {
    // @ts-ignore
    return this.subscribe(Types.Code, handler)
  }

  public subscribeControlTaken(handler: ControlTakenHandler){
    // @ts-ignore
    return this.subscribe(Types.ControlTaken, handler)
  }

  private send(data: Data) {
    this.client.send(JSON.stringify(data))
  }

  private subscribe(eventName: Type, handler: Handler) {
    if (!this.handlers[eventName]) {
      this.handlers[eventName] = new Set([handler])
    } else {
      this.handlers[eventName].add(handler)
    }

    return () => {
      this.handlers[eventName].delete(handler)
    }
  }
}

export const socket = new Socket()
