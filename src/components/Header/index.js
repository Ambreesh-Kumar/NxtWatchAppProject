import {Component} from 'react'
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {IoMdMoon} from 'react-icons/io'
import {WiDaySunny} from 'react-icons/wi'
import {CgMenu} from 'react-icons/cg'
import {FiLogOut} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'
import MenuPopup from '../PopupRoute/menu'
import LogoutPopup from '../PopupRoute/logout'
import NxtWatchContext from '../../context'
import {
  HeaderContainer,
  HeaderMobileViewContainer,
  HeaderDesktopViewContainer,
  HeaderWebsiteLogo,
  HeaderIconsContainer,
  IconButton,
  ThemeButton,
  ProfileImg,
  HeaderLogoutButton,
  PopupMainContainer,
  PopupContainer,
  CloseButton,
} from './headerStyle'

class Header extends Component {
  state = {showDeskTopView: true}

  renderMobileView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {toggleTheme, isDark} = value

        const changeTheme = () => {
          toggleTheme()
        }

        return (
          <HeaderMobileViewContainer>
            <Link to="/">
              <HeaderWebsiteLogo
                src={
                  isDark
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
            </Link>
            <HeaderIconsContainer>
              <ThemeButton
                onClick={changeTheme}
                color={isDark ? '#ffffff' : '#181818'}
                data-testid="theme"
                type="button"
              >
                {isDark ? <WiDaySunny /> : <IoMdMoon />}
              </ThemeButton>
              <PopupMainContainer>
                <Popup
                  modal
                  nested
                  trigger={
                    <IconButton
                      color={isDark ? '#ffffff' : '#181818'}
                      type="button"
                    >
                      <CgMenu />
                    </IconButton>
                  }
                  className="popup-content"
                >
                  {close => (
                    <PopupContainer bgColor={isDark ? '#181818' : '#f9f9f9'}>
                      <CloseButton
                        onClick={close}
                        color={isDark ? '#f9f9f9' : '#181818'}
                        type="button"
                      >
                        <AiOutlineClose />
                      </CloseButton>
                      <MenuPopup />
                    </PopupContainer>
                  )}
                </Popup>
              </PopupMainContainer>
              <div>
                <Popup
                  modal
                  nested
                  trigger={
                    <IconButton
                      color={isDark ? '#ffffff' : '#181818'}
                      type="button"
                    >
                      <FiLogOut />
                    </IconButton>
                  }
                >
                  {close => <LogoutPopup closePopup={close} />}
                </Popup>
              </div>
            </HeaderIconsContainer>
          </HeaderMobileViewContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderDesktopView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {toggleTheme, isDark} = value
        const changeTheme = () => {
          toggleTheme()
        }
        return (
          <HeaderDesktopViewContainer>
            <Link to="/">
              <HeaderWebsiteLogo
                src={
                  isDark
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
            </Link>
            <HeaderIconsContainer>
              <ThemeButton
                onClick={changeTheme}
                color={isDark ? '#ffffff' : '#181818'}
                type="button"
              >
                {isDark ? <WiDaySunny /> : <IoMdMoon />}
              </ThemeButton>
              <IconButton type="button">
                <ProfileImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </IconButton>
              <div>
                <Popup
                  nested
                  modal
                  trigger={
                    <HeaderLogoutButton type="button">
                      Logout
                    </HeaderLogoutButton>
                  }
                >
                  {close => <LogoutPopup closePopup={close} />}
                </Popup>
              </div>
            </HeaderIconsContainer>
          </HeaderDesktopViewContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    const {showDeskTopView} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <HeaderContainer bgColor={isDark ? '#313131' : '#ffffff'}>
              {this.renderMobileView()}
              {this.renderDesktopView()}
            </HeaderContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Header
