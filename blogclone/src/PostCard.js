import styled from "styled-components";
import './fonts.css'

const Card = styled.div`
  transition: all 0.3s ease;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  transform: scale(1);
  display: flex;
  width: 380px;
  height: 500px;
  margin: 20px 0px 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: rgb(255, 255, 255);
  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
  }
`;
const PostTitle = styled.div`
  width: 330px;
  text-align: left;
  color: rgb(138, 146, 255);
  font-family: Pretendard-Bold;
  font-size: 30px;
  margin: 10px 25px 0px;
`;
const DateText = styled.div`
  width: 330px;
  text-align: left;
  color: rgb(65, 65, 65);;
  font-family: Pretendard-light;
  font-size: 20px;
  margin: 5px 25px 0px;
`;
const HashText = styled.div`
  width: 330px;
  text-align: left;
  color: rgb(80, 80, 80);;
  font-family: Pretendard-light;
  font-size: 20px;
  margin: 5px 25px 0px;
`;

const PostCard = () => {
    return (
      <Card>
        <img 
          src="/img/newton.png" 
          alt="my image"
          style={{ width: '380px', height: '380px' }}
        />
        <PostTitle>포스팅 제목</PostTitle>
        <DateText>Feb 2, 2023</DateText>
        <HashText>#와우</HashText>
      </Card>
    );
}

export default PostCard;