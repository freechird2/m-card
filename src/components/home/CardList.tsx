import { Card } from '@/models/card'
import { getCards } from '@/remotes/card'
import ListRow from '@components/shared/ListRow'
import Badge from '@shared/Badge'
import { useInfiniteQuery } from '@tanstack/react-query'
import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore'
import { flatten } from 'lodash'
import { useCallback } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useNavigate } from 'react-router-dom'

const CardList = () => {
  const navigate = useNavigate()

  const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery<{
    items: Card[]
    lastVisible: QueryDocumentSnapshot<DocumentData> | null
  }>({
    queryKey: ['cards'],
    queryFn: ({ pageParam }) => {
      return getCards(
        pageParam
          ? (pageParam as QueryDocumentSnapshot<DocumentData>)
          : undefined,
      )
    },
    getNextPageParam: (lastPage) => {
      return lastPage.lastVisible
    },
    initialPageParam: null,
  })

  const loadMore = useCallback(() => {
    if (isFetching || !hasNextPage) return

    fetchNextPage()
  }, [fetchNextPage, isFetching, hasNextPage])

  if (!data) return null

  const cards = flatten(data?.pages.map(({ items }) => items))

  return (
    <div>
      <InfiniteScroll
        dataLength={cards.length}
        next={loadMore}
        hasMore={hasNextPage}
        loader={<></>}
        scrollThreshold="100px"
      >
        <ul>
          {cards.map((card, index) => (
            <ListRow
              key={card.id}
              contents={
                <ListRow.Texts title={`${index + 1}위`} subTitle={card.name} />
              }
              right={card.payback ? <Badge label={card.payback} /> : null}
              withArrow={true}
              onClick={() => {
                navigate(`/card/${card.id}`)
              }}
            />
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  )
}

export default CardList
