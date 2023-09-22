import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import NxtWatchContext from '../../context'
import {
  LogoutContainer,
  LogoutHeading,
  CancelButton,
  ConfirmButton,
  LogoutButtonContainer,
} from './popupDesign'

const LogoutPopup = props => {
  const {closePopup} = props
  const onLogout = () => {
    const {history} = props
    const jwtToken = Cookies.remove('jwt_token')
    history.replace('/login')
  }
  const onClose = () => {
    closePopup()
  }
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <LogoutContainer bgColor={isDark ? '#313131' : '#e2e8f0'}>
            <LogoutHeading color={isDark ? '#ffffff' : '#00306e'}>
              Are you sure, you want to logout
            </LogoutHeading>
            <LogoutButtonContainer>
              <CancelButton
                onClick={onClose}
                borderColor={isDark ? '#e2e8f0' : '#94a3b8'}
                type="button"
              >
                Cancel
              </CancelButton>
              <ConfirmButton onClick={onLogout} type="button">
                Confirm
              </ConfirmButton>
            </LogoutButtonContainer>
          </LogoutContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(LogoutPopup)
