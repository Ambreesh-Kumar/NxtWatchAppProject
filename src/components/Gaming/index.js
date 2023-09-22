import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import HomeMenuSidebar from '../SideBar'
import GamingCard from '../GamingCard'
import NxtWatchContext from '../../context'
import {
  GamingBgContainer,
  GamingMainContainer,
  GamingIconContainer,
  GamingIcon,
  GamingRouteMainHeading,
  GamingItemsIconAndHeadingContainer,
  GamingSidebarDisplayContainer,
  GamingVideosBgContainer,
  GamingVideoUnorderedList,
  ViewContainer,
  LoaderContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewDescription,
  FailureViewButton,
} from './gamingStyle'

const apiResponseStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    apiStatus: apiResponseStatus.initial,
    gamingVideoList: [],
  }

  componentDidMount() {
    this.getGamingPageVideos()
  }

  getGamingPageVideos = async () => {
    this.setState({apiStatus: apiResponseStatus.inProgress})
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    // console.log(response)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const data = fetchedData.videos.map(item => ({
        id: item.id,
        thumbnailUrl: item.thumbnail_url,
        title: item.title,
        viewCount: item.view_count,
      }))
      //   console.log(data)
      this.setState({
        gamingVideoList: data,
        apiStatus: apiResponseStatus.success,
      })
    } else {
      this.setState({apiStatus: apiResponseStatus.failure})
    }
  }

  onRetryFailureView = () => {
    this.getGamingPageVideos()
  }

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#94a3b8" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <FailureViewContainer>
            <FailureViewImage
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <FailureViewHeading color={isDark ? '#ffffff' : '#181818'}>
              Oops! Something Went Wrong
            </FailureViewHeading>
            <FailureViewDescription>
              We are having some trouble to complete your request. Please try
              again.
            </FailureViewDescription>
            <FailureViewButton onClick={this.onRetryFailureView} type="button">
              Retry
            </FailureViewButton>
          </FailureViewContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderVideoListView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {gamingVideoList} = this.state
        return (
          <GamingVideoUnorderedList>
            {gamingVideoList.map(item => (
              <GamingCard videoItem={item} key={item.id} />
            ))}
          </GamingVideoUnorderedList>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderGamingVideoView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiResponseStatus.inProgress:
        return this.renderLoaderView()
      case apiResponseStatus.success:
        return this.renderVideoListView()
      case apiResponseStatus.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <GamingBgContainer>
              <Header />
              <GamingMainContainer bgColor={isDark ? '#313131' : '#ffffff'}>
                <GamingSidebarDisplayContainer>
                  <HomeMenuSidebar />
                </GamingSidebarDisplayContainer>
                <GamingVideosBgContainer
                  data-testid="gaming"
                  bgColor={isDark ? '#0f0f0f' : '#f9f9f9'}
                >
                  <GamingItemsIconAndHeadingContainer
                    bgColor={isDark ? '#212121' : '#f1f1f1'}
                    data-testid="banner"
                  >
                    <GamingIconContainer>
                      <GamingIcon />
                    </GamingIconContainer>
                    <GamingRouteMainHeading
                      color={isDark ? '#ffffff' : '#181818'}
                    >
                      Gaming
                    </GamingRouteMainHeading>
                  </GamingItemsIconAndHeadingContainer>
                  <ViewContainer>{this.renderGamingVideoView()}</ViewContainer>
                </GamingVideosBgContainer>
              </GamingMainContainer>
            </GamingBgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Gaming
