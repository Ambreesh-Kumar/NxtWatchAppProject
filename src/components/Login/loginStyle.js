import styled from 'styled-components'

export const LoginPageBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-bottom: 200px;
  padding-top: 100px;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 2560px) {
    padding-bottom: 600px;
    padding-top: 300px;
    width: 100%;
  }
`
export const LoginCard = styled(LoginPageBgContainer)`
  flex-direction: column;
  justify-content: flex-start;
  padding: 30px 20px;
  box-shadow: ${props => props.boxShadow};
  margin-top: 50px;
  width: 90%;
  background-color: ${props => props.cardBgColor};
  @media screen and (min-width: 768px) {
    width: 50%;
  }
  @media screen and (min-width: 1024px) {
    width: 40%;
  }
  @media screen and (min-width: 1440px) {
    width: 30%;
  }
`
export const WebsiteLogo = styled.img`
  height: 30px;
  margin-bottom: 20px;
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
`
export const UsernameFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 15px;
  width: 90%;
`
export const UsernameInput = styled.input`
  width: 100%;
  padding: 10px;
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;
  background-color: transparent;
  outline: none;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 13px;
  color: #64748b;
`
export const UsernameLabel = styled.label`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  color: ${props => props.color};
  margin-bottom: 5px;
`
export const CheckboxFieldContainer = styled(UsernameFieldContainer)`
  flex-direction: row;
  align-items: center;
  margin-top: -10px;
`
export const LoginCheckbox = styled.input`
  height: 18px;
  width: 18px;
  cursor: pointer;
  border-radius: 10px;
  outline: none;
`
export const ShowPasswordText = styled.label`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.color};
  margin-left: 5px;
`
export const LoginButton = styled.button`
  padding: 10px 20px;
  width: 90%;
  background-color: #3b82f6;
  border-width: 0px;
  border-radius: 5px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;
`
export const ErrorMessage = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  color: #ff0b37;
  text-align: left;
  width: 90%;
  font-size: 14px;
  margin-left: 5px;
`
