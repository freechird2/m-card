import { FormValues } from '@/models/signin'
import Form from '@components/signin/Form'
import { useCallback } from 'react'

const SigninPage = () => {
  const handleSubmit = useCallback((formValues: FormValues) => {
    console.log(formValues)
  }, [])

  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  )
}

export default SigninPage
