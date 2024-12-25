import { css } from '@emotion/react'
import Flex from './Flex'
import Text from './Text'

interface ListRowProps {
  left?: React.ReactNode
  contents: React.ReactNode
  right?: React.ReactNode
  withArrow?: boolean
  onClick?: () => void
  as?: 'li' | 'div'
}

const ListRow = ({
  left,
  contents,
  right,
  withArrow,
  onClick,
  as = 'li',
}: ListRowProps) => {
  return (
    <Flex as={as} align="center" css={listRowContainerStyles} onClick={onClick}>
      {left && <Flex css={listRowLeftStyles}>{left}</Flex>}
      <Flex css={listRowCenterStyles}>{contents}</Flex>
      {right && <Flex css={listRowRightStyles}>{right}</Flex>}
      {withArrow && <IconArrowRight />}
    </Flex>
  )
}

const listRowContainerStyles = css`
  padding: 8px 24px;
`

const listRowLeftStyles = css`
  margin-right: 14px;
`

const listRowCenterStyles = css`
  flex: 1;
`

const listRowRightStyles = css`
  margin-left: 14px;
`

const ListRowTexts = ({
  title,
  subTitle,
}: {
  title: string
  subTitle: string
}) => {
  return (
    <Flex direction="column">
      <Text bold={true}>{title}</Text>
      <Text typography="t7">{subTitle}</Text>
    </Flex>
  )
}

const IconArrowRight = () => {
  return (
    <svg
      version="1.1"
      viewBox="0 0 512 512"
      width={20}
      height={20}
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="160,128.4 192.3,96 352,256 352,256 352,256 192.3,416 160,383.6 287.3,256 " />
    </svg>
  )
}

ListRow.Texts = ListRowTexts

export default ListRow
