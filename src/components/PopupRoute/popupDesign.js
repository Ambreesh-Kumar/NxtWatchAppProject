import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: auto;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
`
export const MenuIconButtonContainer = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;
  background-color: ${props => props.bgColor};
  padding: 6px 40px;
`
export const MenuIconButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  font-size: 18px;
  margin-right: 10px;
  color: ${props => props.color};
`
export const MenuTextButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  color: ${props => props.color};
  margin-bottom: 5px;
`

export const LogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding: 10px 20px;
  border-radius: 8px;
  border-width: 0px;
  padding: 30px 20px;
`
export const LogoutHeading = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  color: ${props => props.color};
`
export const LogoutButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const CancelButton = styled.button`
  padding: 10px 20px;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  border-color: ${props => props.borderColor};
  background-color: transparent;
  cursor: pointer;
  margin-right: 10px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  color: #94a3b8;
`
export const ConfirmButton = styled.button`
  padding: 10px 20px;
  border-style: solid;
  border-width: 0px;
  border-radius: 5px;
  background-color: #3b82f6;
  cursor: pointer;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
`
