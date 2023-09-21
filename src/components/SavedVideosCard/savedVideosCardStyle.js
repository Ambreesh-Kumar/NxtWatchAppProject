import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoItemListCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 50px;
  padding: 10px;
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 60vw;
    flex-direction: row;
    justify-content: center;
  }
`
export const VideoThumbnailImage = styled.img`
  width: 90%;
  margin-bottom: 10px;
  @media screen and (min-width: 576px) {
    width: 30vw;
    margin-right: 15px;
  }
`
export const TimeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: -15px;
  width: 100%;
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
