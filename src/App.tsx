import Text from '@shared/Text'
import Button from '@shared/Button'
import Input from '@shared/Input'
import { TextField } from '@shared/TextField'
import Alert from '@shared/Alert'
import { useAlertContext } from '@contexts/AlertContext'

function App() {
  const { open } = useAlertContext()

  return (
    <div>
      <Text typography="t1" display="block" color="red">
        t1
      </Text>
      <Text typography="t2" color="blue">
        t2
      </Text>
      <Text typography="t3" color="green">
        t3
      </Text>
      <Text typography="t4" color="red">
        t4
      </Text>
      <Text typography="t5" color="blue">
        t5
      </Text>
      <Text typography="t6" color="green">
        t6
      </Text>
      <Text typography="t7" color="red">
        t7
      </Text>

      <div style={{ height: 10, width: '100%', background: '#efefef' }}></div>

      <Button>클릭해주세요</Button>
      <Button weak>클릭해주세요</Button>
      <Button color="success">클릭해주세요</Button>
      <Button color="success" weak>
        클릭해주세요
      </Button>
      <Button color="error">클릭해주세요</Button>
      <Button color="error" weak>
        클릭해주세요
      </Button>
      <Button size="medium">클릭해주세요</Button>
      <Button size="large">클릭해주세요</Button>
      <Button full>클릭해주세요</Button>
      <Button full disabled>
        클릭해주세요
      </Button>

      <div style={{ height: 10, width: '100%', background: '#efefef' }}></div>

      <Input placeholder="로그인" />
      <Input placeholder="로그인" aria-invalid="true" />

      <div style={{ height: 10, width: '100%', background: '#efefef' }}></div>

      <TextField label="아이디" />
      <TextField label="아이디" hasError />
      <TextField label="아이디" helpMessage="아이디를 입력해주세요" />

      <div style={{ height: 10, width: '100%', background: '#efefef' }}></div>

      {/* <Alert
        open={true}
        title="알림이 났습니다"
        description="알림이 났습니다"
        onButtonClick={() => {}}
        buttonLabel="확인"
      /> */}

      <Button
        onClick={() => {
          open({
            title: '카드신청완료',
            description: '내역페이지에서 확인해주세요.',
            onButtonClick: () => {},
          })
        }}
      >
        Alert 오픈
      </Button>
    </div>
  )
}

export default App
