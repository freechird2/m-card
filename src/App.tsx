import Text from '@components/shared/Text'
import Button from '@components/shared/Button'

function App() {
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
    </div>
  )
}

export default App
