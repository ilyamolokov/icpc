import { InternalAxiosRequestConfig } from "axios"

import { urls } from "../api/urls"
import { setCookie } from "./setCookie"

export const configInterceptor = (config: InternalAxiosRequestConfig) => {
  const urlParams = new URLSearchParams(window.location.hash)
  const accessToken = urlParams.get("#access_token")

  if (accessToken) {
    const expiresIn = urlParams.get("expires_in")
    setCookie("access_token", accessToken, expiresIn)
  }

  if (!document.cookie || !document.cookie.includes("access_token")) {
    window.location.replace(urls.yandexPassport)
  }
  return config
}
