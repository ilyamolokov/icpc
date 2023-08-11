interface Statement {
  type: string
  locale: string
  path: string
}
export interface Limit {
  compilerName: string
  idlenessLimit: number
  memoryLimit: number
  outputLimit: number
  timeLimit: number
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

export interface YandexUser {
  client_id: string
  default_avatar_id: string
  default_email: string
  display_name: string
  emails: string[]
  first_name: string
  id: string
  is_avatar_empty: boolean
  last_name: string
  login: string
  psuid: string
  real_name: string
  sex: string
}

export interface Message {
  content: string
  userLogin: string
}
