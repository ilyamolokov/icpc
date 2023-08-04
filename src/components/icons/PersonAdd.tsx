import * as React from "react"
import { FC } from "react"

import { IconBaseProps } from "./types"

export const PersonAdd: FC<IconBaseProps> = ({ color, width, height, disabled, ...rest }) => (
  <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.3333 18.6667V14.3333H19.9999V12.3333H24.3333V7.99999H26.3333V12.3333H30.6666V14.3333H26.3333V18.6667H24.3333ZM11.9999 15.9667C10.5333 15.9667 9.33325 15.5 8.39992 14.5667C7.46659 13.6333 6.99992 12.4333 6.99992 10.9667C6.99992 9.49999 7.46659 8.29999 8.39992 7.36666C9.33325 6.43333 10.5333 5.96666 11.9999 5.96666C13.4666 5.96666 14.6666 6.43333 15.5999 7.36666C16.5333 8.29999 16.9999 9.49999 16.9999 10.9667C16.9999 12.4333 16.5333 13.6333 15.5999 14.5667C14.6666 15.5 13.4666 15.9667 11.9999 15.9667ZM1.33325 26.6667V23.5333C1.33325 22.7555 1.5277 22.05 1.91659 21.4167C2.30547 20.7833 2.86659 20.3111 3.59992 20C5.26659 19.2667 6.74992 18.75 8.04992 18.45C9.34992 18.15 10.6666 18 11.9999 18C13.3333 18 14.6444 18.15 15.9333 18.45C17.2221 18.75 18.6999 19.2667 20.3666 20C21.0999 20.3333 21.6666 20.8111 22.0666 21.4333C22.4666 22.0555 22.6666 22.7555 22.6666 23.5333V26.6667H1.33325Z"
      fill={disabled ? "var(--color-grey-secondary)" : color}
    />
  </svg>
)