import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoItemListCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 50px;
  //   background-color: red;
  padding-top: 10px;
  width: 90%;
  padding-left: 20px;
  @media screen and (min-width: 768px) {
    width: 245px;
    margin-right: 10px;
  }
`
export const VideoThumbnailImage = styled.img`
  width: 100%;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    width: 90%;
  }
`
export const VideoTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  width: 100%;
`
export const TimeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: -15px;
`

export const VideoLogoImage = styled.img`
  height: 35px;
  width: 35px;
  border-width: 0px;
  border-radius: 40px;
  margin-right: 10px;
`
export const VideoThumbnailDescription = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 13px;
  color: ${props => props.color};
  line-height: 22px;
`
export const VideoThumbnailName = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 13px;
  color: #64748b;
  margin-right: 10px;
  @media screen and (min-width: 576px) {
    margin-bottom: -6px;
  }
`
export const VideoViewsMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: -20px;
  @media screen and (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: -15px;
  }
`
export const VideoViewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`
export const ViewsParagraph = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 12px;
  color: #64748b;
  margin-right: 10px;
`
export const VideoPublishedParagraph = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 12px;
  color: #64748b;
`
export const VideoCardLink = styled(Link)`
  text-decoration: none;
`
