
import './App.css';
import './fonts.css';
import Header from'./Header.js';
import PostBox from './PostBox.js';

const Home = () => {
  return (
    <div class="container">
      <PostBox></PostBox>      
      <Header></Header>
    </div>
  );
}



export default Home;
