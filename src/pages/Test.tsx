import Flex from '@components/shared/Flex'
import AdBannerListAddButton from '@components/test/AdBannerListAddButton'
import CardListAddButton from '@components/test/CardListAddButton'
import React from 'react'

const Test = () => {
  return (
    <Flex direction="column" gap="10px">
      <CardListAddButton />
      <AdBannerListAddButton />
    </Flex>
  )
}

export default Test
