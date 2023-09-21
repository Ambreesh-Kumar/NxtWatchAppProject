import styled from 'styled-components'
import {BiLike, BiDislike} from 'react-icons/bi'
import {CgPlayListAdd} from 'react-icons/cg'

export const VideoItemDetailCardBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 110%;
  padding: 20px 0px;
  @media screen and (min-width: 1024px) {
    padding: 20px 100px;
  }
`
export const VideoItemDetailCardTitle = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  margin: 10px 10px;
  margin-top: 20px;
  color: ${props => props.color};
`
export const ViewsLikeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 10px;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
export const ViewsAndPublishedDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const ViewsParagraph = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  margin-right: 20px;
  color: #64748b;
`
export const LikeDislikeButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-left: -6px;
  //   width: 100%;
`
export const LikeDislikeButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-right: 20px;
`
export const LikeIcon = styled(BiLike)`
  font-size: 22px;
  color: ${props => props.color};
  margin-right: 8px;
`
export const DislikeIcon = styled(BiDislike)`
  font-size: 22px;
  color: ${props => props.color};
  margin-right: 8px;
`
export const SaveIcon = styled(CgPlayListAdd)`
  font-size: 22px;
  color: ${props => props.color};
  margin-right: 8px;
`
export const LikeDislikeParagraph = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  color: ${props => props.color};
`
export const HorizontalLine = styled.hr`
  background-color: red;
`
export const ProfileImageAndDescriptionMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
`
export const ProfileImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`
export const ProfileImage = styled.img`
  height: 55px;
  margin-right: 12px;
`
export const ChannelNameContainer = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const ChannelNameParagraph = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 17px;
  color: ${props => props.color};
  margin-bottom: 5px;
`
export const ChannelSubscriberCount = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  color: #64748b;
  margin-top: 0px;
`
export const ChannelDescription = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.color};
`
