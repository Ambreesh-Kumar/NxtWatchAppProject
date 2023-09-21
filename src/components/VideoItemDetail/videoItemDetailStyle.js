import styled from 'styled-components'
import {SiYoutubegaming} from 'react-icons/si'

export const VideoItemDetailBgContainer = styled.div`
  //   padding-bottom: 20px;
`
export const VideoItemDetailMainContainer = styled.div`
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
export const ViewContainer = styled.div`
  width: 100%;
`
export const VideoItemDetailSidebarDisplayContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`
export const VideoItemDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  width: 100%;
  //   padding-left: 10px;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  height: 60vh;
  margin-top: 60px;
`
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //   height: 60vh;
  padding: 50px 80px;
  //   width: 100%;
  margin-bottom: 20px;
`
export const FailureViewImage = styled.img`
  height: 18vh;
  margin-top: 60px;
  @media screen and (min-width: 576px) {
    height: 25vh;
  }
`
export const FailureViewHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 25px;
  color: ${props => props.color};
  margin-bottom: 5px;
  text-align: center;
`
export const FailureViewDescription = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 20px;
  color: #616e7c;
  text-align: center;
`
export const FailureViewButton = styled.button`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  color: #ffffff;
  padding: 10px 25px;
  border-width: 0px;
  border-radius: 4px;
  background-color: #4f46e5;
  cursor: pointer;
`
