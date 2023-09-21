import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetail from './components/VideoItemDetail'
import SavedVideo from './components/SavedVideos'
import NxtProtected from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import NxtWatchContext from './context'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDark: false,
    savedVideosList: [],
    isLike: false,
    isDislike: false,
    isAlreadySaved: false,
    activeRoute: 'home',
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  toggleLike = () => {
    this.setState(prevState => ({
      isLike: !prevState.isLike,
      isDislike: false,
    }))
  }

  toggleDislike = () => {
    this.setState(prevState => ({
      isLike: false,
      isDislike: !prevState.isDislike,
    }))
  }

  toggleActiveRoute = currentRoute => {
    this.setState({activeRoute: currentRoute})
  }

  onAddAndSaveVideoItem = videoItem => {
    const {savedVideosList} = this.state
    const alreadySavedVideo = savedVideosList.find(
      item => item.id === videoItem.id,
    )
    if (alreadySavedVideo === undefined) {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, videoItem],
        isAlreadySaved: true,
      }))
    } else {
      const filteredList = savedVideosList.filter(
        item => item.id !== videoItem.id,
      )
      this.setState(prevState => ({
        savedVideosList: filteredList,
        isAlreadySaved: false,
      }))
    }
  }

  render() {
    const {
      isDark,
      savedVideosList,
      isLike,
      isDislike,
      isAlreadySaved,
      activeRoute,
    } = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDark,
          toggleTheme: this.toggleTheme,
          savedVideosList,
          isLike,
          isDislike,
          toggleLike: this.toggleLike,
          toggleDislike: this.toggleDislike,
          onAddAndSaveVideoItem: this.onAddAndSaveVideoItem,
          isAlreadySaved,
          activeRoute,
          toggleActiveRoute: this.toggleActiveRoute,
        }}
      >
        <div>
          <Switch>
            <Route exact path="/login" component={Login} />
            <NxtProtected exact path="/" component={Home} />
            <NxtProtected exact path="/trending" component={Trending} />
            <NxtProtected exact path="/gaming" component={Gaming} />
            <NxtProtected
              exact
              path="/videos/:id"
              component={VideoItemDetail}
            />
            <NxtProtected exact path="/saved-videos" component={SavedVideo} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
