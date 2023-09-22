import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import NxtWatchContext from '../../context'
import {
  MenuContainer,
  StyledLink,
  MenuIconButtonContainer,
  MenuIconButton,
  MenuTextButton,
} from './popupDesign'

const Menu = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark, activeRoute, toggleActiveRoute} = value
      const onToggleHomeRoute = () => {
        toggleActiveRoute('home')
      }

      const onToggleTrendingRoute = () => {
        toggleActiveRoute('trending')
      }

      const onToggleGamingRoute = () => {
        toggleActiveRoute('gaming')
      }

      const onToggleSavedVideosRoute = () => {
        toggleActiveRoute('saved-videos')
      }

      return (
        <MenuContainer>
          <StyledLink to="/">
            <MenuIconButtonContainer
              key="homeButton"
              bgColor={activeRoute === 'home' ? '#cccccc' : 'transparent'}
            >
              <MenuIconButton
                color={activeRoute === 'home' ? '#ff0b37' : '#94a3b8'}
                onClick={onToggleHomeRoute}
                type="button"
              >
                <AiFillHome />
              </MenuIconButton>
              <MenuTextButton
                color={isDark ? '#ffffff' : '#181818'}
                onClick={onToggleHomeRoute}
                type="button"
              >
                Home
              </MenuTextButton>
            </MenuIconButtonContainer>
          </StyledLink>
          <StyledLink to="/trending">
            <MenuIconButtonContainer
              key="trendingButton"
              bgColor={activeRoute === 'trending' ? '#cccccc' : 'transparent'}
            >
              <MenuIconButton
                color={activeRoute === 'trending' ? '#ff0b37' : '#94a3b8'}
                onClick={onToggleTrendingRoute}
                type="button"
              >
                <HiFire />
              </MenuIconButton>
              <MenuTextButton
                color={isDark ? '#ffffff' : '#181818'}
                onClick={onToggleTrendingRoute}
                type="button"
              >
                Trending
              </MenuTextButton>
            </MenuIconButtonContainer>
          </StyledLink>
          <StyledLink to="/gaming">
            <MenuIconButtonContainer
              key="gamingButton"
              bgColor={activeRoute === 'gaming' ? '#cccccc' : 'transparent'}
            >
              <MenuIconButton
                color={activeRoute === 'gaming' ? '#ff0b37' : '#94a3b8'}
                onClick={onToggleGamingRoute}
                type="button"
              >
                <SiYoutubegaming />
              </MenuIconButton>
              <MenuTextButton
                color={isDark ? '#ffffff' : '#181818'}
                onClick={onToggleGamingRoute}
                type="button"
              >
                Gaming
              </MenuTextButton>
            </MenuIconButtonContainer>
          </StyledLink>
          <StyledLink to="/saved-videos">
            <MenuIconButtonContainer
              key="savedVideosButton"
              bgColor={
                activeRoute === 'saved-videos' ? '#cccccc' : 'transparent'
              }
            >
              <MenuIconButton
                color={activeRoute === 'saved-videos' ? '#ff0b37' : '#94a3b8'}
                onClick={onToggleSavedVideosRoute}
                type="button"
              >
                <CgPlayListAdd />
              </MenuIconButton>
              <MenuTextButton
                color={isDark ? '#ffffff' : '#181818'}
                onClick={onToggleSavedVideosRoute}
                type="button"
              >
                Saved videos
              </MenuTextButton>
            </MenuIconButtonContainer>
          </StyledLink>
        </MenuContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Menu
