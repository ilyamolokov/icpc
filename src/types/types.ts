interface Statement {
    type: string
    locale: string
    path: string

}
export interface Limit {
    compilerName:string
    idlenessLimit:number
    memoryLimit:number
    outputLimit:number
    timeLimit:number
}
export interface Problem {
    alias: string
    compiler: string[]
    description: string
    id: string
    limits: Limit[]
    name: string
    problemType: string
    statements: Statement[]
    testCount: number | null
}
export type Problems = Problem[]