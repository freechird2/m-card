import { COLLECTIONS } from '@constants'
import { Card } from '@models/card'
import { store } from '@remotes/firebase'
import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  limit,
  query,
  QueryDocumentSnapshot,
  startAfter,
} from 'firebase/firestore'

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

export const getCard = async (id: string) => {
  const snapshot = await getDoc(doc(store, COLLECTIONS.CARD, id))

  return {
    ...(snapshot.data() as Card),
    id,
  }
}
