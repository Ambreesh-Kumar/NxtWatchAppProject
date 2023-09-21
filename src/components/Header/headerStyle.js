import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background-color: ${props => props.bgColor};
  padding: 10px 30px;
  width: 110%;
  @media screen and (min-width: 576px) {
    width: 100%;
  }
`
export const HeaderMobileViewContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const HeaderDesktopViewContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 767.5px) {
    display: none;
  }
`

export const HeaderWebsiteLogo = styled.img`
  height: 25px;
`
export const HeaderIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  font-size: 25px;
  cursor: pointer;
  margin-right: 5px;
  margin-left: 15px;
  color: ${props => props.color};
`
export const IconButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  font-size: 25px;
  cursor: pointer;
  margin-right: 5px;
  margin-left: 15px;
  color: ${props => props.color};
`
export const ProfileImg = styled.img`
  height: 25px;
`
export const HeaderLogoutButton = styled.button`
  padding: 5px 15px;
  border-style: solid;
  border-color: #3b82f6;
  border-radius: 5px;
  color: #3b82f6;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  margin-left: 15px;
  background-color: transparent;
  cursor: pointer;
`
export const PopupMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.bgColor};
  height: 110vh;
  width: 110vw;
  padding: 30px 30px;
`
export const CloseButton = styled.button`
  font-size: 30px;
  margin-left: auto;
  background-color: transparent;
  border-width: 0px;
  color: ${props => props.color};
`
