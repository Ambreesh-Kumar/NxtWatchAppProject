import React from 'react'

const NxtWatchContext = React.createContext({
  isDark: false,
  toggleTheme: () => {},
  savedVideosList: [],
  isLike: false,
  isDislike: false,
  isAlreadySaved: false,
  activeRoute: 'home',
  toggleActiveRoute: () => {},
  toggleLike: () => {},
  toggleDislike: () => {},
  onAddAndSaveVideoItem: () => {},
})

export default NxtWatchContext
