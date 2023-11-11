import styled from "styled-components";
import PostCard from "./PostCard";
import './fonts.css'

const RightContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: space-evenly;
  padding: 0px 20px 0px;
  background-color: rgb(255, 255, 255);
`;

const PostContainer = styled.div`
  display: flex;
  width: 1200px;
  height: 90vh;
  margin-top: 5%;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: rgb(255, 255, 255);
`;

const PostRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 500px;
  justify-content: space-between;
`;



const PostBox = () => {
    return (
      <RightContainer>
        <PostContainer>
          <PostRow>
            <PostCard></PostCard>
            <PostCard></PostCard>
            <PostCard></PostCard>
          </PostRow>
          <PostRow>
            <PostCard></PostCard>
            <PostCard></PostCard>
            <PostCard></PostCard>
          </PostRow>
        </PostContainer>
      </RightContainer>
    );
}

export default PostBox;