import {formatDistanceToNow} from 'date-fns'
import NxtWatchContext from '../../context'
import {
  VideoItemListCard,
  VideoThumbnailImage,
  VideoTitleContainer,
  TimeMainContainer,
  VideoLogoImage,
  VideoThumbnailDescription,
  VideoViewsMainContainer,
  VideoThumbnailName,
  VideoViewsContainer,
  ViewsParagraph,
  VideoPublishedParagraph,
  VideoCardLink,
} from './trendingCardStyle'

const TrendingCard = props => {
  const {videoItem} = props
  const {channel, publishedAt, thumbnailUrl, title, viewCount, id} = videoItem
  const dateDistanceToNow = formatDistanceToNow(new Date(publishedAt))
  //   console.log(dateDistanceToNow)
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <VideoCardLink to={`/videos/${id}`}>
            <VideoItemListCard>
              <VideoThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoTitleContainer>
                <VideoLogoImage
                  src={channel.profileImageUrl}
                  alt="channel logo"
                />
                <TimeMainContainer>
                  <VideoThumbnailDescription
                    color={isDark ? '#ffffff' : '#181818'}
                  >
                    {title}
                  </VideoThumbnailDescription>
                  <VideoViewsMainContainer>
                    <VideoThumbnailName>{channel.name}</VideoThumbnailName>
                    <VideoViewsContainer>
                      <ViewsParagraph>{viewCount} views</ViewsParagraph>
                      <VideoPublishedParagraph>
                        {dateDistanceToNow}
                      </VideoPublishedParagraph>
                    </VideoViewsContainer>
                  </VideoViewsMainContainer>
                </TimeMainContainer>
              </VideoTitleContainer>
            </VideoItemListCard>
          </VideoCardLink>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default TrendingCard
