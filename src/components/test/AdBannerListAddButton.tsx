import Button from '../shared/Button'

import { adBanners } from '@/mock/data'
import { store } from '@remotes/firebase'
import { doc, collection, writeBatch } from 'firebase/firestore'
import { COLLECTIONS } from '@constants'

const AdBannerListAddButton = () => {
  const handleButtonClick = async () => {
    const batch = writeBatch(store)

    adBanners.forEach((banner) => {
      const bannerDocRef = doc(collection(store, COLLECTIONS.ADBANNER))

      batch.set(bannerDocRef, banner)
    })

    await batch.commit()

    alert('배너 리스트 추가 완료')
  }

  return <Button onClick={handleButtonClick}>배너 리스트 추가하기</Button>
}

export default AdBannerListAddButton
