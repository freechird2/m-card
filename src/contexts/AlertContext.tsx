import {
  ComponentProps,
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import Alert from '@shared/Alert'

type AlertProps = ComponentProps<typeof Alert>
type AlertOptions = Omit<AlertProps, 'open'>

interface AlertContextValue {
  open: (options: AlertOptions) => void
}

const Context = createContext<AlertContextValue | undefined>(undefined)

const defaultValues: AlertProps = {
  open: false,
  title: null,
  description: null,
  onButtonClick: () => {},
}

export const AlertContextProvider = ({ children }: { children: ReactNode }) => {
  const [alertState, setAlertState] = useState<AlertProps>(defaultValues)

  const $portal_root = document.getElementById('root-portal')

  const close = useCallback(() => {
    setAlertState(defaultValues)
  }, [])

  const open = useCallback(
    ({ onButtonClick, ...options }: AlertOptions) => {
      setAlertState({
        ...options,
        open: true,
        onButtonClick() {
          close()
          onButtonClick()
        },
      })
    },
    [close],
  )

  const value = useMemo(() => ({ open }), [open])

  return (
    <Context.Provider value={value}>
      {children}
      {$portal_root
        ? createPortal(<Alert {...alertState} />, $portal_root)
        : null}
    </Context.Provider>
  )
}

export const useAlertContext = () => {
  const values = useContext(Context)

  if (!values) {
    throw new Error('AlertContextProvider not found')
  }

  return values
}
