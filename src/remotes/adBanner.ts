import { collection, getDocs } from 'firebase/firestore'
import { store } from '@remotes/firebase'
import { COLLECTIONS } from '@constants'
import { ADBanner } from '@models/banner'

export const getAdBanners = async () => {
  const adBannerSnapshot = await getDocs(
    collection(store, COLLECTIONS.ADBANNER),
  )

  return adBannerSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as ADBanner),
  }))
}
