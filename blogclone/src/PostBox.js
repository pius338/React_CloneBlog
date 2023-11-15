import styled from "styled-components";
import PostCard from "./PostCard";
import './fonts.css'

const RightContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: space-evenly;
  padding: 0px 0px 0px 25%;
  background-color: rgb(255, 255, 255);
  @media screen and (max-width: 1400px){
  padding: 0px 5px 0px 5px;   
  }
`;

const PostContainer = styled.div`
  display: flex;
  width: 1200px;
  height: 80%;
  margin-top: 10%;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  background-color: rgb(255, 255, 255);
`;

const PostBox = () => {
    const posts = [
      ["과제 너무 재밌어요 멘토님", "Nov 14, 2023", "#호우~ #짱", "/img/codingcecom.png", "/postview/0006"],
      ["유용민 실종설", "Feb 28, 2023", "#헐 #어떡해", "/img/missing.png", "/postview/0005"], 
      ["우주고양이", "Jul 27, 2020", "#와 #대박", "/img/pel.jpeg", "/postview/0004"],
      ["유용민 첫 코딩", "Feb 15, 2001", "#첫 #컴파일", "/img/codingyongmin.png", "/postview/0003"], 
      ["우주로 간 염소를 아세요?", "Oct 23, 2000", "#헉 #귀여워", "/img/spacegoat.png", "/postview/0002"],
      ["유용민 탄생", "Oct 22, 2000", "#오 #축하해", "/img/baby.png", "/postview/0001"]
    ]
    const postList = posts.map((v) => (<PostCard title={v[0]} date={v[1]} tag={v[2]} imgpath={v[3]} link={v[4]}/>))
    return (
      <RightContainer>
        <PostContainer>
            { postList }
        </PostContainer>
      </RightContainer>
    );
}

export default PostBox;