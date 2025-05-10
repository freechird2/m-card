import { css } from '@emotion/react'
import { colors } from '@styles/colorPalette'
import { motion } from 'framer-motion'
import { createPortal } from 'react-dom'
import Button from './Button'

interface FixedBottomButtonProps {
  label: string
  onClick: () => void
  disabled?: boolean
}

export const FixedBottomButton = ({
  label,
  onClick,
  disabled,
}: FixedBottomButtonProps) => {
  const $portalRoot = document.getElementById('root-portal')

  if (!$portalRoot) return null

  return createPortal(
    <motion.div
      css={containerStyles}
      initial={{
        opacity: 0,
        transform: 'translateY(100%)',
      }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
      animate={{
        opacity: 1,
        transform: 'translateY(0)',
      }}
    >
      <Button
        size="medium"
        onClick={onClick}
        full
        css={buttonStyles}
        disabled={disabled}
      >
        {label}
      </Button>
    </motion.div>,
    $portalRoot,
  )
}

const containerStyles = css`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px 10px 8px;
  background-color: ${colors.white};
`

const buttonStyles = css`
  border-radius: 8px;
`

export default FixedBottomButton
