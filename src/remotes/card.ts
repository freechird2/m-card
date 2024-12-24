import {
  collection,
  getDocs,
  QuerySnapshot,
  query,
  limit,
  startAfter,
  QueryDocumentSnapshot,
  DocumentData,
} from 'firebase/firestore'
import { store } from '@remotes/firebase'
import { COLLECTIONS } from '@constants'
import { Card } from '@models/card'

export const getCards = async (
  pageParam?: QueryDocumentSnapshot<DocumentData>,
) => {
  const cardQuery = !pageParam
    ? query(collection(store, COLLECTIONS.CARD), limit(15))
    : query(
        collection(store, COLLECTIONS.CARD),
        startAfter(pageParam),
        limit(10),
      )

  const cardSnapshot = await getDocs(cardQuery)

  const lastVisible = cardSnapshot.docs[cardSnapshot.docs.length - 1]

  const items = cardSnapshot.docs.map((doc) => ({
    ...(doc.data() as Card),
    id: doc.id,
  }))

  return { items, lastVisible }
}
