import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Header from '../Header'
import HomeMenuSidebar from '../SideBar'
import VideoCard from '../VideoCard'
import NxtWatchContext from '../../context'
import {
  HomeBgContainer,
  HomeMainContainer,
  HomeBannerAndItemsContainer,
  HomeSidebarDisplayContainer,
  BannerBgContainer,
  BannerCloseContainer,
  BannerLogo,
  BannerCloseButton,
  BannerDescription,
  BannerButton,
  HomeVideosBgContainer,
  VideoSearchInputContainer,
  VideoSearchInputElement,
  SearchButton,
  VideoUnorderedList,
  NoSearchResultContainer,
  NoSearchResultImage,
  NoSearchResultHeading,
  NoSearchResultDescription,
  NoSearchResultButton,
  ViewContainer,
  LoaderContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewDescription,
  FailureViewButton,
} from './homeStyle'

const apiResponseStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    displayBanner: true,
    apiStatus: apiResponseStatus.initial,
    searchInput: '',
    searchQuery: '',
    videoList: [],
  }

  componentDidMount() {
    this.getHomePageVideos()
  }

  getHomePageVideos = async () => {
    this.setState({apiStatus: apiResponseStatus.inProgress})
    const {searchQuery} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchQuery}`
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
      this.setState({videoList: data, apiStatus: apiResponseStatus.success})
    } else {
      this.setState({apiStatus: apiResponseStatus.failure})
    }
  }

  onChangeBannerDisplay = () => {
    this.setState({displayBanner: false})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchButton = () => {
    const {searchInput} = this.state
    this.setState({searchQuery: searchInput}, this.getHomePageVideos)
  }

  onRetryFilter = () => {
    const {searchInput} = this.state
    this.setState({searchQuery: searchInput}, this.getHomePageVideos)
  }

  onRetryFailureView = () => {
    this.getHomePageVideos()
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
        const {isDark} = value
        const {videoList} = this.state
        const isEmptyList = videoList.length === 0
        return isEmptyList ? (
          <NoSearchResultContainer>
            <NoSearchResultImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoSearchResultHeading color={isDark ? '#ffffff' : '#181818'}>
              No Search results found
            </NoSearchResultHeading>
            <NoSearchResultDescription>
              Try different key words or remove search filter
            </NoSearchResultDescription>
            <NoSearchResultButton onClick={this.onRetryFilter} type="button">
              Retry
            </NoSearchResultButton>
          </NoSearchResultContainer>
        ) : (
          <VideoUnorderedList>
            {videoList.map(item => (
              <VideoCard videoItem={item} key={item.id} />
            ))}
          </VideoUnorderedList>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderBanner = () => (
    <BannerBgContainer data-testid="banner">
      <BannerCloseContainer>
        <BannerLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerCloseButton
          onClick={this.onChangeBannerDisplay}
          data-testid="close"
          type="button"
        >
          <AiOutlineClose />
        </BannerCloseButton>
      </BannerCloseContainer>
      <BannerDescription>
        Buy Nxt Watch Premium prepaid plans with UPI
      </BannerDescription>
      <BannerButton type="button">GET IT NOW</BannerButton>
    </BannerBgContainer>
  )

  renderVideoView = () => {
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
          const {displayBanner, searchInput, videoList} = this.state
          return (
            <HomeBgContainer>
              <Header />
              <HomeMainContainer bgColor={isDark ? '#313131' : '#ffffff'}>
                <HomeSidebarDisplayContainer>
                  <HomeMenuSidebar />
                </HomeSidebarDisplayContainer>
                <HomeBannerAndItemsContainer>
                  {displayBanner && this.renderBanner()}
                  <HomeVideosBgContainer
                    data-testid="home"
                    bgColor={isDark ? '#181818' : '#f9f9f9'}
                  >
                    <VideoSearchInputContainer>
                      <VideoSearchInputElement
                        type="search"
                        borderColor={isDark ? '#e2e8f0' : '#94a3b8'}
                        placeholder="Search"
                        value={searchInput}
                        onChange={this.onChangeSearchInput}
                      />
                      <SearchButton
                        borderColor={isDark ? '#e2e8f0' : '#94a3b8'}
                        onClick={this.onClickSearchButton}
                        data-testid="searchButton"
                        type="button"
                      >
                        <AiOutlineSearch />
                      </SearchButton>
                    </VideoSearchInputContainer>
                    <ViewContainer>{this.renderVideoView()}</ViewContainer>
                  </HomeVideosBgContainer>
                </HomeBannerAndItemsContainer>
              </HomeMainContainer>
            </HomeBgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Home
