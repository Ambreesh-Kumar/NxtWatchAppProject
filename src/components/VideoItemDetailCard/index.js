import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import NxtWatchContext from '../../context'
import {
  VideoItemDetailCardBgContainer,
  VideoItemDetailCardTitle,
  ViewsLikeMainContainer,
  ViewsAndPublishedDateContainer,
  ViewsParagraph,
  LikeDislikeButtonContainer,
  LikeDislikeButton,
  LikeIcon,
  DislikeIcon,
  SaveIcon,
  LikeDislikeParagraph,
  HorizontalLine,
  ProfileImageAndDescriptionMainContainer,
  ProfileImageContainer,
  ProfileImage,
  ChannelNameContainer,
  ChannelNameParagraph,
  ChannelSubscriberCount,
  ChannelDescription,
} from './videoItemDetailCardStyle'

const VideoItemDetailCard = props => {
  const {videoItemDetail} = props
  const {
    id,
    channel,
    description,
    publishedAt,
    thumbnailUrl,
    title,
    videoUrl,
    viewCount,
  } = videoItemDetail
  const dateDistanceToNow = formatDistanceToNow(new Date(publishedAt))
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {
          isDark,
          isLike,
          isDislike,
          toggleLike,
          toggleDislike,
          onAddAndSaveVideoItem,
          isAlreadySaved,
          savedVideosList,
        } = value

        const savedVideo = savedVideosList.find(
          item => item.id === videoItemDetail.id,
        )

        const onChangeLikeStatus = () => {
          toggleLike()
        }

        const onChangeDisLikeStatus = () => {
          toggleDislike()
        }

        const onSaveVideo = () => {
          onAddAndSaveVideoItem(videoItemDetail)
        }

        return (
          <VideoItemDetailCardBgContainer>
            <ReactPlayer url={videoUrl} controls height="38vw" width="100%" />
            <VideoItemDetailCardTitle color={isDark ? '#f9f9f9' : '#181818'}>
              {title}
            </VideoItemDetailCardTitle>
            <ViewsLikeMainContainer>
              <ViewsAndPublishedDateContainer>
                <ViewsParagraph>{viewCount} views</ViewsParagraph>
                <ViewsParagraph>{dateDistanceToNow}</ViewsParagraph>
              </ViewsAndPublishedDateContainer>
              <LikeDislikeButtonContainer>
                <LikeDislikeButton onClick={onChangeLikeStatus}>
                  <LikeIcon color={isLike ? '#2563eb' : '#64748b'} />
                  <LikeDislikeParagraph color={isLike ? '#2563eb' : '#64748b'}>
                    Like
                  </LikeDislikeParagraph>
                </LikeDislikeButton>
                <LikeDislikeButton onClick={onChangeDisLikeStatus}>
                  <DislikeIcon color={isDislike ? '#2563eb' : '#64748b'} />
                  <LikeDislikeParagraph
                    color={isDislike ? '#2563eb' : '#64748b'}
                  >
                    Dislike
                  </LikeDislikeParagraph>
                </LikeDislikeButton>
                <LikeDislikeButton onClick={onSaveVideo}>
                  <SaveIcon
                    color={savedVideo !== undefined ? '#2563eb' : '#64748b'}
                  />
                  <LikeDislikeParagraph
                    color={savedVideo !== undefined ? '#2563eb' : '#64748b'}
                  >
                    {savedVideo !== undefined ? 'Saved' : 'Save'}
                  </LikeDislikeParagraph>
                </LikeDislikeButton>
              </LikeDislikeButtonContainer>
            </ViewsLikeMainContainer>
            <HorizontalLine />
            <ProfileImageAndDescriptionMainContainer>
              <ProfileImageContainer>
                <ProfileImage
                  src={channel.profileImageUrl}
                  alt="channel logo"
                />
                <ChannelNameContainer>
                  <ChannelNameParagraph color={isDark ? '#f9f9f9' : '#181818'}>
                    {channel.name}
                  </ChannelNameParagraph>
                  <ChannelSubscriberCount>
                    {channel.subscriberCount} subscribers
                  </ChannelSubscriberCount>
                </ChannelNameContainer>
              </ProfileImageContainer>
              <ChannelDescription color={isDark ? '#f9f9f9' : '#616e7c'}>
                {description}
              </ChannelDescription>
            </ProfileImageAndDescriptionMainContainer>
          </VideoItemDetailCardBgContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoItemDetailCard
