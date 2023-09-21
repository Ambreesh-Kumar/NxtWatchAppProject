import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import NxtWatchContext from '../../context'
import {
  LoginPageBgContainer,
  LoginCard,
  WebsiteLogo,
  LoginForm,
  UsernameFieldContainer,
  UsernameLabel,
  UsernameInput,
  CheckboxFieldContainer,
  LoginCheckbox,
  ShowPasswordText,
  LoginButton,
  ErrorMessage,
} from './loginStyle'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showErrorMessage: false,
    errorMsg: '',
    showPassword: false,
  }

  onLoginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onLoginFailure = errorMsg => {
    this.setState({showErrorMessage: true, errorMsg})
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userData = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onToggleShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  renderUsernameField = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        const {username} = this.state
        return (
          <UsernameFieldContainer>
            <UsernameLabel
              htmlFor="username"
              color={isDark ? '#ffffff' : '#606060'}
            >
              USERNAME
            </UsernameLabel>
            <UsernameInput
              type="text"
              id="username"
              placeholder="Username"
              onChange={this.onChangeUsername}
              value={username}
            />
          </UsernameFieldContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderPasswordField = () => {
    const {showPassword} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          const {password} = this.state
          return (
            <UsernameFieldContainer>
              <UsernameLabel
                htmlFor="password"
                color={isDark ? '#ffffff' : '#606060'}
              >
                PASSWORD
              </UsernameLabel>
              <UsernameInput
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                onChange={this.onChangePassword}
                value={password}
              />
            </UsernameFieldContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderCheckboxField = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <CheckboxFieldContainer>
            <LoginCheckbox
              type="checkbox"
              id="checkbox"
              onChange={this.onToggleShowPassword}
            />
            <ShowPasswordText
              htmlFor="checkbox"
              color={isDark ? '#ffffff' : '#1e293b'}
            >
              Show Password
            </ShowPasswordText>
          </CheckboxFieldContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    const {showErrorMessage, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <LoginPageBgContainer bgColor={isDark ? '#231f20' : '#ffffff'}>
              <LoginCard
                cardBgColor={isDark ? '#0f0f0f' : '#ffffff'}
                boxShadow={isDark ? 'none' : '0px 15px 26px lightgray'}
              >
                <WebsiteLogo
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <LoginForm onSubmit={this.onSubmitLoginForm}>
                  {this.renderUsernameField()}
                  {this.renderPasswordField()}
                  {this.renderCheckboxField()}
                  <LoginButton type="submit">Login</LoginButton>
                  {showErrorMessage && <ErrorMessage>{errorMsg}</ErrorMessage>}
                </LoginForm>
              </LoginCard>
            </LoginPageBgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
