export enum EventName {
  Message = 'message',
}

type EventNameType = `${EventName}`

interface EventPayload {
  taskAlias?: string
  message?: string
}

interface Data {
  type: EventNameType
  payload: EventPayload
}

type Handler<P = any> = (param: P) => void

export type MessageHandler = Handler<string>

interface Handlers {
  [EventName.Message]: Record<string, MessageHandler>
}

const initialHandlers: Handlers = {
  [EventName.Message]: {}
}

const taskEvents = new Set<EventNameType>([EventName.Message])

interface subscribeParams {
  eventName: EventNameType
  handler: MessageHandler
  taskAlias?: string
}

class Socket {
  private readonly client: WebSocket
  private readonly handlers: Handlers

  constructor() {
    this.client = new WebSocket('ws://51.250.65.5:8000/ws/lobby?team_id=12&user_id=2')
    this.handlers = initialHandlers

    this.client.onmessage = (evt: MessageEvent<string>) => {
      const { type, payload }: Data = JSON.parse(evt.data)

      if (Socket.isTaskEvent(type)) {
        this.handlers[type][payload.taskAlias](payload.message)
      }
    }
  }

  public sendMessage(message: string, taskAlias: string) {
    this.send(EventName.Message, { message, taskAlias: taskAlias })
  }

  public subscribeMessage(taskAlias: string, handler: MessageHandler) {
    this.subscribe({ eventName: EventName.Message, taskAlias: taskAlias, handler})
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

  private static isTaskEvent(type: EventNameType) {
    return taskEvents.has(type)
  }
}

export const socket = new Socket()
