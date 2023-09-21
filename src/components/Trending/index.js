import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import HomeMenuSidebar from '../SideBar'
import TrendingCard from '../TrendingCard'
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
  LoaderContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewDescription,
  FailureViewButton,
} from './trendingStyle'

const apiResponseStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    apiStatus: apiResponseStatus.initial,
    TrendingVideoList: [],
  }

  componentDidMount() {
    this.getTrendingPageVideos()
  }

  getTrendingPageVideos = async () => {
    this.setState({apiStatus: apiResponseStatus.inProgress})
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const data = fetchedData.videos.map(item => ({
        channel: {
          name: item.channel.name,
          profileImageUrl: item.channel.profile_image_url,
        },
        id: item.id,
        publishedAt: item.published_at,
        thumbnailUrl: item.thumbnail_url,
        title: item.title,
        viewCount: item.view_count,
      }))
      //   console.log(data)
      this.setState({
        TrendingVideoList: data,
        apiStatus: apiResponseStatus.success,
      })
    } else {
      this.setState({apiStatus: apiResponseStatus.failure})
    }
  }

  onRetryFailureView = () => {
    this.getTrendingPageVideos()
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
            <FailureViewButton onClick={this.onRetryFailureView}>
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
        const {TrendingVideoList} = this.state
        return (
          <TrendingVideoUnorderedList>
            {TrendingVideoList.map(item => (
              <TrendingCard videoItem={item} key={item.id} />
            ))}
          </TrendingVideoUnorderedList>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderTrendingVideoView = () => {
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
          const {TrendingVideoList} = this.state
          return (
            <TrendingBgContainer>
              <Header />
              <TrendingMainContainer bgColor={isDark ? '#313131' : '#ffffff'}>
                <TrendingSidebarDisplayContainer>
                  <HomeMenuSidebar />
                </TrendingSidebarDisplayContainer>
                <TrendingVideosBgContainer
                  data-testid="trending"
                  bgColor={isDark ? ' #0f0f0f' : '#f9f9f9'}
                >
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
                      Trending
                    </TrendingRouteMainHeading>
                  </TrendingItemsIconAndHeadingContainer>
                  <ViewContainer>
                    {this.renderTrendingVideoView()}
                  </ViewContainer>
                </TrendingVideosBgContainer>
              </TrendingMainContainer>
            </TrendingBgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Trending
