import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoItemListCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 50px;
  padding-top: 15px;
  margin-right: 30px;
  padding: 20px;
  @media screen and (min-width: 576px) {
  }
`
export const VideoThumbnailImage = styled.img`
  width: 100%;
  margin-bottom: 10px;
  @media screen and (min-width: 576px) {
    width: 15vw;
  }
`
export const VideoTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  //   padding: 20px;
  //   width: 100%;
`
export const VideoThumbnailTitle = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 13px;
  color: ${props => props.color};
  margin-bottom: 5px;
`
export const ViewsParagraph = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 12px;
  color: #64748b;
  margin-top: 0px;
`
export const VideoCardLink = styled(Link)`
  text-decoration: none;
`
