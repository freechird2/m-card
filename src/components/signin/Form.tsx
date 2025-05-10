import { FormValues } from '@/models/signin'
import { colors } from '@/styles/colorPalette'
import Button from '@components/shared/Button'
import Flex from '@components/shared/Flex'
import { TextField } from '@components/shared/TextField'
import { css } from '@emotion/react'
import { useCallback, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import validator from 'validator'
import Spacing from '../shared/Spacing'
import Text from '../shared/Text'

const Form = ({ onSubmit }: { onSubmit: (formValues: FormValues) => void }) => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })
  const [dirty, setDirty] = useState<Partial<FormValues>>({})

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues((prev) => ({ ...prev, [name]: value }))
  }, [])

  const errors = useMemo(() => validate(formValues), [formValues])

  const isSubmitable = Object.keys(errors).length === 0

  return (
    <Flex direction="column" css={formContainerStyle}>
      <TextField
        label="이메일"
        name="email"
        placeholder="이메일을 입력해주세요."
        value={formValues.email}
        onChange={handleChange}
      />
      <Spacing size={16} />
      <TextField
        label="비밀번호"
        type="password"
        name="password"
        placeholder="비밀번호를 입력해주세요."
        value={formValues.password}
        onChange={handleChange}
      />
      <Spacing size={32} />
      <Button
        size="medium"
        disabled={!isSubmitable}
        onClick={() => onSubmit(formValues)}
      >
        로그인
      </Button>
      <Spacing size={12} />
      <Link to="/signup" css={linkStyle}>
        <Text typography="t7">아직 계정이 없으신가요?</Text>
      </Link>
    </Flex>
  )
}

const validate = (formValues: FormValues) => {
  const errors: Partial<FormValues> = {}

  if (!validator.isEmail(formValues.email)) {
    errors.email = '이메일 형식이 올바르지 않습니다.'
  }

  if (!validator.isLength(formValues.password, { min: 8 })) {
    errors.password = '비밀번호는 8자 이상이어야 합니다.'
  }

  return errors
}

const formContainerStyle = css`
  padding: 24px;
`

const linkStyle = css`
  text-align: center;

  & > span:hover {
    color: ${colors.blue};
  }
`

export default Form
