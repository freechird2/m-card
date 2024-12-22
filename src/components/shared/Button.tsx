import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  ButtonColor,
  buttonColorMap,
  ButtonSize,
  buttonSizeMap,
  buttonWeakMap,
} from '@styles/button'

interface ButtonProps {
  color?: ButtonColor
  size?: ButtonSize
  weak?: boolean
  full?: boolean
  disabled?: boolean
}

const Button = styled.button<ButtonProps>(
  () => ({
    cursor: 'pointer',
    fontWeight: 'bold',
    borderRadius: '6px',
  }),
  ({ color = 'primary', weak }) =>
    weak ? buttonWeakMap[color] : buttonColorMap[color],
  ({ size = 'small' }) => buttonSizeMap[size],
  ({ full }) =>
    full &&
    css`
      display: block;
      width: 100%;
      border-radius: 0;
    `,
  ({ disabled }) => disabled && { opacity: 0.5, cursor: 'default' },
)

export default Button
