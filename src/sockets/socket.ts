export enum EventName {
  Message = 'message',
  Editor = 'editor',
}

type EventNameType = `${EventName}`

interface TaskPayload {
  taskAlias: string
}

interface MessageEventPayload extends TaskPayload {
  message: string
}

interface EditorEventPayload extends TaskPayload {
  code: string
}

type EventPayload = MessageEventPayload | EditorEventPayload

interface Data {
  type: EventNameType
  payload?: EventPayload
}

export type MessageHandler = (payload: MessageEventPayload) => void
export type EditorHandler = (payload: EditorEventPayload) => void

type Handler = MessageHandler | EditorHandler

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
  taskAlias?: string
}

class Socket {
  private readonly client: WebSocket
  private readonly handlers: Handlers

  constructor() {
    this.client = new WebSocket('ws://51.250.65.5:8000/ws/lobby?team_id=12&user_id=1')
    this.handlers = initialHandlers

    this.client.onmessage = (evt: MessageEvent<string>) => {
      const { type, payload }: Data = JSON.parse(evt.data)

      if (payload && payload.taskAlias) {
        this.handlers[type][payload.taskAlias](payload)
      }
    }
  }

  public sendMessage(message: string, taskAlias: string) {
    this.send(EventName.Message, { message, taskAlias })
  }

  public subscribeMessage(taskAlias: string, handler: MessageHandler) {
    this.subscribe({ eventName: EventName.Message, taskAlias, handler})
  }

  private send(type: EventNameType, payload: EventPayload) {
    this.client.send(JSON.stringify({ type, payload }))
  }

  private subscribe({ eventName, taskAlias, handler }: subscribeParams) {
    if (taskAlias) {
      this.subscribeTaskEvent(eventName, taskAlias, handler)
    }
  }

  private subscribeTaskEvent(eventName: EventNameType, taskAlias: string, handler: Handler) {
    this.handlers[eventName][taskAlias] = handler
  }
}

export const socket = new Socket()
