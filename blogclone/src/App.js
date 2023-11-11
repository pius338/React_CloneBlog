
import './App.css';
import styled from "styled-components";
import './fonts.css';
import Header from'./Header.js';
import PostBox from './PostBox.js';

const App = () => {
  return (
    <div class="container">
      <Header></Header>
      <PostBox></PostBox>
    </div>
  );
}



export default App;
