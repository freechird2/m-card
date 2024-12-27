import Button from '@components/shared/Button'
import Flex from '@components/shared/Flex'
import { TextField } from '@components/shared/TextField'

const Form = () => {
  return (
    <Flex direction="column" gap={16}>
      <TextField label="이메일" />
      <TextField label="비밀번호" />
      <Button>로그인</Button>
    </Flex>
  )
}

export default Form
