import styled from "styled-components";
import './fonts.css'


const LeftContainer = styled.div`
  display: flex;
  width: 25%;
  height: 100vh;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: start;
  justify-content: flex-end;
  background-color: rgb(138, 146, 255);

  animation-name: ANIMATION_NAME;
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  
  @keyframes ANIMATION_NAME{
      0% {
        width: 100%;
      }
      50% {
        width: 100%;
      }
      100% {
        width: 25%;
      }
  }

  left: 0;
  top: 0;
  position: fixed;
`;
const BigTitle = styled.p`
  text-align: left;
  color: white;
  font-family: Pretendard-Bold  ;
  font-size: 3.5vw;
  margin: 0px 10% 0px;
`;
const SnsButtons = styled.div`
  display: flex;
  width: 80%;
  height: 100px;
  margin-left: 10%;
  flex-direction: row;
  justify-content: space-between;
`;

const Header = () => {
    const youtubeClick = () => { window.location.href = 'https://www.youtube.com/@user-cw7sz7pi2q/featured'; };
    const gitClick = () => { window.location.href = 'https://github.com/pius338'; };
    const playClick = () => { window.location.href = 'https://play.google.com/store/apps/details?id=com.gb_cal_pak.guk_bab_calculator&hl=ko-KR'; };
    const instaClick = () => { window.location.href = 'https://www.instagram.com/mi_ns_ik/'; };
    return (
        <LeftContainer>
            <BigTitle>김민식의</BigTitle>
            <BigTitle>블로그</BigTitle>
            <hr></hr>
            <SnsButtons>
            <button onClick={youtubeClick} style={{ border: 'none', background: 'transparent' }}><img src="/img/youtube.svg" alt="my image"/></button>
            <button onClick={gitClick} style={{ border: 'none', background: 'transparent' }}><img src="/img/github.svg" alt="my image"/></button>
            <button onClick={playClick} style={{ border: 'none', background: 'transparent' }}><img src="/img/google-play.svg" alt="my image"/></button>
            <button onClick={instaClick} style={{ border: 'none', background: 'transparent' }}><img src="/img/insta.svg" alt="my image"/></button>
            </SnsButtons>
        </LeftContainer>
    );
}

export default Header;