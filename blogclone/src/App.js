
import './App.css';
import './fonts.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostView from './PostView';
import Home from './Home';

const App = () => {
  return (
    <BrowserRouter>
			<Routes>
				<Route path="/" element={ <Home/> } />
				<Route path="/postview/:postID" element={ <PostView/> } />
			</Routes>
		</BrowserRouter>
  );
}



export default App;
