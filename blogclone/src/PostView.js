import styled from "styled-components";
import Header from "./Header";
import { useParams } from "react-router-dom";
import './fonts.css'

const PostTitle = styled.div`
  text-align: left;
  color: rgb(138, 146, 255);
  font-family: Pretendard-Bold;
  font-size: 80px;
  margin: 10px 25px 0px;
`;
const PostContent = styled.div`
  text-align: left;
  color: rgb(25, 25, 25);
  font-family: Pretendard-light;
  font-size: 30px;
  margin: 10px 25px 0px;
`;

const PostView = () => {
  const params = useParams();
  return (
    <div>
      <PostTitle>{ params.postID }번째 포스트</PostTitle>
      <PostContent> { params.postID } 포스팅을 읽고 있습니다. </PostContent>
    </div>
  );
}

export default PostView;