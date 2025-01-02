import { useAlertContext } from '@/contexts/AlertContext'
import { FormValues } from '@/models/signin'
import { auth } from '@/remotes/firebase'
import Form from '@components/signin/Form'
import { FirebaseError } from 'firebase/app'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const SigninPage = () => {
  const { open } = useAlertContext()
  const navigate = useNavigate()

  const handleSubmit = useCallback(async (formValues: FormValues) => {
    const { email, password } = formValues

    try {
      await signInWithEmailAndPassword(auth, email, password)

      navigate('/')
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (
          error.code === 'auth/wrong-password' ||
          error.code === 'auth/invalid-credential'
        ) {
          open({
            title: '계정의 정보를 다시 확인해주세요.',
            onButtonClick: () => {},
          })

          return
        }
      }

      open({
        title: '알 수 없는 오류가 발생했습니다.',
        onButtonClick: () => {},
      })
    }
  }, [])

  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  )
}

export default SigninPage
