import {
  FocusEventHandler,
  forwardRef,
  InputHTMLAttributes,
  useState,
} from 'react'
import Text from '@shared/Text'
import Input from '@shared/Input'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  hasError?: boolean
  helpMessage?: React.ReactNode
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { label, hasError = false, helpMessage = '', onFocus, onBlur, ...props },
    ref,
  ) => {
    const [focused, setFocused] = useState(false)

    const labelColor = hasError ? 'red' : focused ? 'blue' : undefined

    const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
      setFocused(true)

      onFocus?.(e)
    }

    const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
      setFocused(false)

      onBlur?.(e)
    }

    return (
      <div>
        {label ? (
          <Text
            typography="t7"
            color={labelColor}
            display="inline-block"
            style={{ marginBottom: 6 }}
          >
            {label}
          </Text>
        ) : null}
        <Input
          ref={ref}
          aria-invalid={hasError}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {helpMessage ? (
          <Text
            typography="t7"
            color={labelColor}
            display="inline-block"
            style={{ marginTop: 6 }}
          >
            {helpMessage}
          </Text>
        ) : null}
      </div>
    )
  },
)

TextField.displayName = 'TextField'
