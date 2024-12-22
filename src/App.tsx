import Button from '@shared/Button'
import Text from '@shared/Text'
import './App.css'

function App() {
  return (
    <div>
      <Text typography="t1" display="block">
        t1
      </Text>
      <Text typography="t2" color="red">
        t2
      </Text>
      <Text typography="t3">t3</Text>
      <Text typography="t4">t4</Text>
      <Text typography="t5">t5</Text>
      <Text typography="t6">t6</Text>
      <Text typography="t7">t7</Text>

      <div style={{ height: 10, width: '100%', backgroundColor: '#efefef' }} />

      <Button>click</Button>
      <Button color="success">click</Button>
      <Button color="error">click</Button>
      <Button color="primary" weak>
        click
      </Button>
      <Button color="success" weak>
        click
      </Button>
      <Button color="error" weak>
        click
      </Button>
      <Button full>click</Button>
      <Button full disabled>
        click
      </Button>
    </div>
  )
}

export default App
