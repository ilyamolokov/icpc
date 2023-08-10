export enum EventName {
  Message = 'message',
  Editor = 'editor',
}

type EventNameType = `${EventName}`

interface ProblemPayload {
  problemAlias: string
}

interface MessageEventPayload extends ProblemPayload {
  message: string
}

interface EditorEventPayload extends ProblemPayload {
  code: string
}

type EventPayload = MessageEventPayload | EditorEventPayload

interface Data {
  type: EventNameType
  payload?: EventPayload
}

type Handler<Payload = EventPayload> = (payload: Payload) => void

export type MessageHandler = Handler<MessageEventPayload>
export type EditorHandler = Handler<EditorEventPayload>

interface Handlers {
  [EventName.Message]: Record<string, MessageHandler>
  [EventName.Editor]: Record<string, EditorHandler>
}

const initialHandlers: Handlers = {
  [EventName.Message]: {},
  [EventName.Editor]: {},
}

interface subscribeParams {
  eventName: EventNameType
  handler: Handler
  problemAlias?: string
}

class Socket {
  private readonly client: WebSocket
  private readonly handlers: Handlers

  constructor() {
    this.client = new WebSocket('ws://51.250.65.5:8080/ws/lobby?team_id=12&user_id=1')
    this.handlers = initialHandlers

    this.client.onmessage = (evt: MessageEvent<string>) => {
      const { type, payload }: Data = JSON.parse(evt.data)

      if (payload && payload.problemAlias) {
        // @ts-ignore
        this.handlers[type][payload.problemAlias](payload)
      }
    }
  }

  public sendMessage(message: string, problemAlias: string) {
    this.send(EventName.Message, { message, problemAlias })
  }

  public sendCode(code: string, problemAlias: string) {
    this.send(EventName.Editor, { code, problemAlias })
  }

  public subscribeMessage(problemAlias: string, handler: MessageHandler) {
    // @ts-ignore
    this.subscribe({ eventName: EventName.Message, problemAlias, handler })
  }

  public subscribeEditor(problemAlias: string, handler: EditorHandler) {
    // @ts-ignore
    this.subscribe({ eventName: EventName.Editor, problemAlias, handler })
  }

  private send(type: EventNameType, payload: EventPayload) {
    this.client.send(JSON.stringify({ type, payload }))
  }

  private subscribe({ eventName, problemAlias, handler }: subscribeParams) {
    if (problemAlias) {
      this.subscribeProblemEvent(eventName, problemAlias, handler)
    }
  }

  private subscribeProblemEvent(eventName: EventNameType, problemAlias: string, handler: Handler) {
    this.handlers[eventName][problemAlias] = handler
  }
}

export const socket = new Socket()
