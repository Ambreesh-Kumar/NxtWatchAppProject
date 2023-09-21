import styled from 'styled-components'
import {HiFire} from 'react-icons/hi'

export const TrendingBgContainer = styled.div`
  //   padding-bottom: 20px;
`
export const TrendingMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 110%;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 576px) {
    width: 100%;
  }
`
export const TrendingSidebarDisplayContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`
export const TrendingItemsIconAndHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding: 20px 30px;
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 100%;
  }
`
export const TrendingIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  border-radius: 50px;
  background-color: lightgray;
  margin-right: 20px;
`
export const TrendingIcon = styled(HiFire)`
  font-size: 30px;
  color: red;
`
export const TrendingRouteMainHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 25px;
  color: ${props => props.color};
`
export const TrendingVideosBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${props => props.bgColor};
  width: 100%;
  height: 100vh;
  @media screen and (min-width: 576px) {
    padding-left: 0px;
    width: 100%;
  }
`
export const TrendingVideoUnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  list-style-type: none;
  padding-left: 5px;
  width: 100%;
  @media screen and(min-width: 576px) {
    align-items: flex-start;
  }
`
export const ViewContainer = styled.div`
  width: 100%;
  padding: 30px 30px;
`
export const NoSavedVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`
export const NoSavedVideoImage = styled.img`
  width: 70%;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`
export const NoSavedVideoHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 25px;
  margin-bottom: 10px;
  text-align: center;
  color: ${props => props.color};
`
export const NoSavedVideoDescription = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 17px;
  margin-top: 0px;
  text-align: center;
  color: ${props => props.color};
`
