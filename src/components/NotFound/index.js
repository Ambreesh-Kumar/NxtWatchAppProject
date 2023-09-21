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
} from './notFoundStyle'

class SavedVideo extends Component {
  renderNotFoundView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <NoSavedVideoContainer>
            <NoSavedVideoImage
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
              }
              alt="not found"
            />
            <NoSavedVideoHeading color={isDark ? '#ffffff' : '#181818'}>
              Page Not Found
            </NoSavedVideoHeading>
            <NoSavedVideoDescription color={isDark ? '#64748b' : '#64748b'}>
              We are sorry, the page you requested could not be found.
            </NoSavedVideoDescription>
          </NoSavedVideoContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <TrendingBgContainer>
              <Header />
              <TrendingMainContainer bgColor={isDark ? '#313131' : '#ffffff'}>
                <TrendingSidebarDisplayContainer>
                  <HomeMenuSidebar />
                </TrendingSidebarDisplayContainer>
                <TrendingVideosBgContainer
                  bgColor={isDark ? '#181818' : '#f9f9f9'}
                >
                  {this.renderNotFoundView()}
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
