import { css } from '@emotion/react'
import Flex from '@shared/Flex'
import FixedBottomButton from '@shared/FixedBottomButton'
import { TextField } from '@shared/TextField'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { FormValues } from '@models/signup'
import validator from 'validator'

const Form = ({ onSubmit }: { onSubmit: (formValues: FormValues) => void }) => {
  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    password: '',
    rePassword: '',
    name: '',
  })
  const [dirty, setDirty] = useState<Partial<FormValues>>({})

  const handleFormValues = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setFormValues((prev) => ({ ...prev, [name]: value }))
    },
    [],
  )

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target
    setDirty((prev) => ({ ...prev, [name]: 'true' }))
  }, [])

  const errors = useMemo(() => validate(formValues), [formValues])

  const 제출가능한상태인가 = Object.keys(errors).length === 0

  return (
    <Flex direction="column" css={formContainerStyles} gap={16}>
      <TextField
        label="이메일"
        placeholder="이메일을 입력해주세요"
        name="email"
        value={formValues.email}
        onChange={handleFormValues}
        onBlur={handleBlur}
        hasError={Boolean(dirty.email) && Boolean(errors.email)}
        helpMessage={Boolean(dirty.email) && errors.email}
      />
      <TextField
        label="패스워드"
        type="password"
        name="password"
        value={formValues.password}
        onChange={handleFormValues}
        onBlur={handleBlur}
        hasError={Boolean(dirty.password) && Boolean(errors.password)}
        helpMessage={Boolean(dirty.password) && errors.password}
      />
      <TextField
        label="패스워드 확인"
        type="password"
        name="rePassword"
        value={formValues.rePassword}
        onChange={handleFormValues}
        onBlur={handleBlur}
        hasError={Boolean(dirty.rePassword) && Boolean(errors.rePassword)}
        helpMessage={Boolean(dirty.rePassword) && errors.rePassword}
      />
      <TextField
        label="이름"
        placeholder="이름을 입력해주세요"
        name="name"
        value={formValues.name}
        onChange={handleFormValues}
        onBlur={handleBlur}
        hasError={Boolean(dirty.name) && Boolean(errors.name)}
        helpMessage={Boolean(dirty.name) && errors.name}
      />

      <FixedBottomButton
        label="회원가입"
        onClick={() => onSubmit(formValues)}
        disabled={!제출가능한상태인가}
      />
    </Flex>
  )
}

const formContainerStyles = css`
  padding: 24px;
`

const validate = (formValues: FormValues) => {
  const errors: Partial<FormValues> = {}

  if (!validator.isEmail(formValues.email)) {
    errors.email = '이메일 형식이 올바르지 않습니다.'
  }

  if (!validator.isLength(formValues.password, { min: 8 })) {
    errors.password = '비밀번호는 8자 이상이어야 합니다.'
  }

  if (!validator.isLength(formValues.rePassword, { min: 8 })) {
    errors.rePassword = '비밀번호는 8자 이상이어야 합니다.'
  }

  if (!validator.equals(formValues.password, formValues.rePassword)) {
    errors.password = '비밀번호가 일치하지 않습니다.'
    errors.rePassword = '비밀번호가 일치하지 않습니다.'
  }

  if (!validator.isLength(formValues.name, { min: 2 })) {
    errors.name = '이름은 2자 이상이어야 합니다.'
  }

  return errors
}

export default Form
