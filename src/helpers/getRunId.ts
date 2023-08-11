type ResponseData = {
  runId: number
}

export const getRunId = (response: ResponseData): number => {
  return response.runId
}
