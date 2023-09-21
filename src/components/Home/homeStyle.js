import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  //   padding-bottom: 20px;
`
export const HomeMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  //   height: 100vh;
  background-color: ${props => props.bgColor};
`
export const HomeSidebarDisplayContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`
export const HomeBannerAndItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
`
export const BannerBgContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: 30% 50%;
  height: 36vh;
  width: 120%;
  padding: 30px 90px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    background-size: cover;
    height: 40vh;
    width: 100%;
    padding: 30px 30px;
    padding-top: 50px;
  }
`
export const BannerDisplayContainer = styled.div`
  display: ${props => props.ShowBanner};
`
export const BannerCloseContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 117%;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
export const BannerCloseButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
  font-size: 25px;
`
export const BannerLogo = styled.img`
  height: 30px;
`
export const BannerDescription = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  color: #181818;
`
export const BannerButton = styled.button`
  padding: 10px 13px;
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;
  border-color: #181818;
  background-color: transparent;
  cursor: pointer;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  color: #181818;
`
export const HomeVideosBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${props => props.bgColor};
  width: 120%;
  @media screen and (min-width: 768px) {
    padding: 20px 20px;
    width: 100%;
    // height: 100vh;
  }
`
export const VideoSearchInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 85px;
  @media screen and (min-width: 768px) {
    margin-left: 50px;
  }
`
export const VideoSearchInputElement = styled.input`
  padding: 5px 10px;
  background-color: transparent;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  color: #94a3b8;
  border-style: solid;
  border-width: 1px;
  height: 30px;
  width: 100%;
  outline: none;
  border-color: ${props => props.borderColor};
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`
export const SearchButton = styled.button`
  padding: 5px 15px;
  border-style: solid;
  border-width: 1px;
  border-left-width: 0px;
  background-color: ${props => props.bgColor};
  border-color: ${props => props.borderColor};
  cursor: pointer;
  font-size: 18px;
  height: 30px;
  background-color: #94a3b8;
  @media screen and (min-width: 768px) {
    padding: 5px 30px;
  }
`
export const VideoUnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  width: 100%;
  padding-left: 10px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`
export const NoSearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  padding: 50px 80px;
  width: 100%;
  margin-bottom: 20px;
`
export const NoSearchResultImage = styled.img`
  height: 28vh;
  margin-top: 40px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    height: 38vh;
  }
`
export const NoSearchResultHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 25px;
  text-align: center;
  margin-bottom: 0px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const NoSearchResultDescription = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 20px;
  color: #616e7c;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const NoSearchResultButton = styled.button`
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
export const ViewContainer = styled.div`
  width: 100%;
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
  width: 100%;
  margin-bottom: 20px;
`
export const FailureViewImage = styled.img`
  height: 28vh;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    height: 38vh;
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
