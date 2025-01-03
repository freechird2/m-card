import Top from '@components/shared/Top'
import AdBanners from '@components/home/AdBanners'
import CardList from '@components/home/CardList'

const Home = () => {
  return (
    <div>
      <Top
        title="혜택 좋은 카드"
        subTitle="회원님을 위해 혜택좋은 카드를 모아봤어요."
      />
      <AdBanners />
      <CardList />
    </div>
  )
}

export default Home
