import { css } from '@emotion/react'
import { colors } from './colorPalette'

export const buttonColorMap = {
  primary: css`
    color: ${colors.white};
    background-color: ${colors.blue};
  `,
  success: css`
    color: ${colors.white};
    background-color: ${colors.green};
  `,
  error: css`
    color: ${colors.white};
    background-color: ${colors.red};
  `,
}

export const buttonWeakMap = {
  primary: css`
    color: ${colors.blue};
    background-color: ${colors.white};
    border: 1px solid ${colors.blue};
  `,
  success: css`
    color: ${colors.green};
    background-color: ${colors.white};
    border: 1px solid ${colors.green};
  `,
  error: css`
    color: ${colors.red};
    background-color: ${colors.white};
    border: 1px solid ${colors.red};
  `,
}

export const buttonSizeMap = {
  small: css`
    font-size: 13px;
    padding: 8px 9px;
  `,
  medium: css`
    font-size: 15px;
    padding: 10px 15px;
  `,
  large: css`
    font-size: 18px;
    padding: 12px 10px;
  `,
}

export type ButtonColor = keyof typeof buttonColorMap
export type ButtonSize = keyof typeof buttonSizeMap
