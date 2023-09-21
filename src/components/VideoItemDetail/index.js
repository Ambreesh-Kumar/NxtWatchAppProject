import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import HomeMenuSidebar from '../SideBar'
import VideoItemDetailCard from '../VideoItemDetailCard'
import NxtWatchContext from '../../context'
import {
  VideoItemDetailBgContainer,
  VideoItemDetailMainContainer,
  VideoItemDetailSidebarDisplayContainer,
  VideoItemDetailContainer,
  ViewContainer,
  LoaderContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewDescription,
  FailureViewButton,
} from './videoItemDetailStyle'

const apiResponseStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    apiStatus: apiResponseStatus.initial,
    videoItemDetail: {},
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apiResponseStatus.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
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
      //   console.log(fetchedData)
      const videoItem = fetchedData.video_details
      const data = {
        id: videoItem.id,
        channel: {
          name: videoItem.channel.name,
          profileImageUrl: videoItem.channel.profile_image_url,
          subscriberCount: videoItem.channel.subscriber_count,
        },
        description: videoItem.description,
        publishedAt: videoItem.published_at,
        thumbnailUrl: videoItem.thumbnail_url,
        title: videoItem.title,
        videoUrl: videoItem.video_url,
        viewCount: videoItem.view_count,
      }
      //   console.log(data)
      this.setState({
        videoItemDetail: data,
        apiStatus: apiResponseStatus.success,
      })
    } else {
      this.setState({apiStatus: apiResponseStatus.failure})
    }
  }

  onRetryFailureView = () => {
    this.getVideoItemDetails()
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

  renderVideoItemDetailView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        const {videoItemDetail} = this.state
        return (
          <VideoItemDetailContainer
            bgColor={isDark ? '#0f0f0f' : '#f9f9f9'}
            data-testid="videoItemDetails"
          >
            <VideoItemDetailCard
              videoItemDetail={videoItemDetail}
              key={videoItemDetail.id}
            />
          </VideoItemDetailContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderVideoItemDetail = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiResponseStatus.inProgress:
        return this.renderLoaderView()
      case apiResponseStatus.success:
        return this.renderVideoItemDetailView()
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
            <VideoItemDetailBgContainer>
              <Header />
              <VideoItemDetailMainContainer
                bgColor={isDark ? '#313131' : '#ffffff'}
              >
                <VideoItemDetailSidebarDisplayContainer>
                  <HomeMenuSidebar />
                </VideoItemDetailSidebarDisplayContainer>
                <ViewContainer>{this.renderVideoItemDetail()}</ViewContainer>
              </VideoItemDetailMainContainer>
            </VideoItemDetailBgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Gaming
