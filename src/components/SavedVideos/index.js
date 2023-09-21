import {Component} from 'react'
import Header from '../Header'
import HomeMenuSidebar from '../SideBar'
import SavedVideosCard from '../SavedVideosCard'
import NxtWatchContext from '../../context'
import {
  TrendingBgContainer,
  TrendingMainContainer,
  TrendingIconContainer,
  TrendingIcon,
  TrendingRouteMainHeading,
  TrendingItemsIconAndHeadingContainer,
  TrendingSidebarDisplayContainer,
  TrendingVideosBgContainer,
  TrendingVideoUnorderedList,
  ViewContainer,
  NoSavedVideoContainer,
  NoSavedVideoImage,
  NoSavedVideoHeading,
  NoSavedVideoDescription,
} from './savedVideosStyle'

class SavedVideo extends Component {
  renderVideoListView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {savedVideosList} = value
        return (
          <TrendingVideoUnorderedList>
            {savedVideosList.map(item => (
              <SavedVideosCard videoItem={item} key={item.id} />
            ))}
          </TrendingVideoUnorderedList>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark, savedVideosList} = value
          const savedVideosListLength = savedVideosList.length
          return (
            <TrendingBgContainer>
              <Header />
              <TrendingMainContainer bgColor={isDark ? '#313131' : '#ffffff'}>
                <TrendingSidebarDisplayContainer>
                  <HomeMenuSidebar />
                </TrendingSidebarDisplayContainer>
                <TrendingVideosBgContainer
                  data-testid="savedVideos"
                  bgColor={isDark ? ' #0f0f0f ' : '#f9f9f9'}
                >
                  {savedVideosListLength > 0 ? (
                    <>
                      <TrendingItemsIconAndHeadingContainer
                        bgColor={isDark ? '#212121' : '#f1f1f1'}
                        data-testid="banner"
                      >
                        <TrendingIconContainer>
                          <TrendingIcon />
                        </TrendingIconContainer>
                        <TrendingRouteMainHeading
                          color={isDark ? '#ffffff' : '#181818'}
                        >
                          Saved Videos
                        </TrendingRouteMainHeading>
                      </TrendingItemsIconAndHeadingContainer>
                      <ViewContainer>
                        {this.renderVideoListView()}
                      </ViewContainer>
                    </>
                  ) : (
                    <NoSavedVideoContainer>
                      <NoSavedVideoImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                        alt="no saved videos"
                      />
                      <NoSavedVideoHeading
                        color={isDark ? '#ffffff' : '#181818'}
                      >
                        No saved videos found
                      </NoSavedVideoHeading>
                      <NoSavedVideoDescription
                        color={isDark ? '#ffffff' : '#64748b'}
                      >
                        You can save your videos while watching them
                      </NoSavedVideoDescription>
                    </NoSavedVideoContainer>
                  )}
                </TrendingVideosBgContainer>
              </TrendingMainContainer>
            </TrendingBgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default SavedVideo
