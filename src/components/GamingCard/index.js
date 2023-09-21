import NxtWatchContext from '../../context'

import {
  VideoItemListCard,
  VideoThumbnailImage,
  VideoTitleContainer,
  VideoThumbnailTitle,
  ViewsParagraph,
  VideoCardLink,
} from './gamingCardStyle'

const GamingCard = props => {
  const {videoItem} = props
  const {thumbnailUrl, title, viewCount, id} = videoItem
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <VideoCardLink to={`/videos/${id}`}>
            <VideoItemListCard>
              <VideoThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoTitleContainer>
                <VideoThumbnailTitle color={isDark ? '#ffffff' : '#181818'}>
                  {title}
                </VideoThumbnailTitle>
                <ViewsParagraph>{viewCount} Watching Worldwide</ViewsParagraph>
              </VideoTitleContainer>
            </VideoItemListCard>
          </VideoCardLink>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default GamingCard
