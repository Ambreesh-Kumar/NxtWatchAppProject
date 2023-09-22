import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBarMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 40px 10px;
  padding-bottom: 50px;
  background-color: ${props => props.bgColor};
  width: 260px;
`
export const MenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
`
export const MenuIconButtonContainer = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 26px;
  background-color: ${props => props.bgColor};
  padding: 5px 20px;
`
export const MenuIconButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  font-size: 18px;
  margin-right: 10px;
  color: ${props => props.color};
  cursor: pointer;
`
export const MenuTextButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  color: ${props => props.color};
  margin-bottom: 5px;
  cursor: pointer;
  width: 100%;
`
export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 30vh;
`
export const ContactUsHeading = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  color: ${props => props.color};
  margin-bottom: 18px;
`
export const ContactUsLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
export const ContactUsLogo = styled.img`
  height: 30px;
  margin-right: 10px;
`
export const ContactUsDescription = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  color: ${props => props.color};
`
