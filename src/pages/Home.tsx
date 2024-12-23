import Top from '@components/shared/Top'
import { getCards } from '@remotes/card'
import { getAdBanners } from '@remotes/adBanner'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    getCards().then((res) => {
      console.log(res)
    })

    getAdBanners().then((res) => {
      console.log(res)
    })
  }, [])

  return (
    <Top
      title="혜택 좋은 카드"
      subTitle="회원님을 위해 혜택좋은 카드를 모아봤어요."
    />
  )
}

export default Home
