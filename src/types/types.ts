interface Statement {
    type: string
    locale: string
    path: string

}
export interface Task {
    alias: string
    compiler: string[]
    description: string
    id: string
    limits: Array<any>
    name: string
    problemType: string
    statements: Statement[]
    testCount: any
}
export type Tasks = Task[]

export enum EventName {
    Message = 'message',
}

export type EventNameType = `${EventName}`

export interface EventPayload {
    taskAlias?: string
    message?: string
}

export interface Data {
    type: EventNameType
    payload: EventPayload
}

export type Handler<P = any> = (param: P) => void

export type MessageHandler = Handler<string>

export interface Handlers {
    [EventName.Message]: Record<string, MessageHandler>
}

export interface subscribeParams {
    eventName: EventNameType
    handler: MessageHandler
    taskAlias?: string
}