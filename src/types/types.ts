interface Statement {
    type:string
    locale:string
    path:string

}
export interface Task {
    alias: string
    compiler:string[]
    description:string
    id:string
    limits:Array<any>
    name:string
    problemType:string
    statements:Statement[]
    testCount:any
}
export type Tasks = Task[]