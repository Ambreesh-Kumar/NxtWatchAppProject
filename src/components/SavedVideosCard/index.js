import {formatDistanceToNow} from 'date-fns'
import NxtWatchContext from '../../context'
import {
  VideoItemListCard,
  VideoThumbnailImage,
  TimeMainContainer,
  VideoThumbnailDescription,
  VideoViewsMainContainer,
  VideoThumbnailName,
  VideoViewsContainer,
  ViewsParagraph,
  VideoPublishedParagraph,
  VideoCardLink,
} from './savedVideosCardStyle'

const SavedVideosCard = props => {
  const {videoItem} = props
  const {channel, publishedAt, thumbnailUrl, title, viewCount, id} = videoItem
  const dateDistanceToNow = formatDistanceToNow(new Date(publishedAt))

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <VideoCardLink to={`/videos/${id}`}>
            <VideoItemListCard>
              <VideoThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
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
            </VideoItemListCard>
          </VideoCardLink>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default SavedVideosCard
