import { auth } from '@remotes/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const [initialize, setInitialize] = useState(false)

  onAuthStateChanged(auth, (user) => {
    console.log('user', user)

    setInitialize(true)
  })

  if (!initialize) {
    return <>로딩 중...</>
  }

  return <>{children}</>
}

export default AuthGuard
