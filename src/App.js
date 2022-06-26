// import logo from './logo.svg';
import './App.css';
import { ListDisplay } from './components/ListDisplay';
import { NavBar } from './components/NavBar';
import { useEffect, useState} from "react";
import useFetch from "./utils/useFetch";
import { retrieveUser } from './utils/functions';
import styled from 'styled-components';


const randomPage = Math.floor(Math.random()*10)+1;

function App() {

  // const [ listItems, setListItems ] = useState([]);
  const { data, isPending, error } = useFetch(`https://picsum.photos/v2/list?limit=12&page=${randomPage}`);    

  const [user, setUser] = useState({});

  useEffect(()=>{
    retrieveUser(setUser)
  },[])


  return (
    <MainDiv className="App">
      <header className="App-header">
      </header>
      
      <NavBar user={user} setUser={setUser} />

      { isPending && <p id="pending-text">The images are being downloaded ...</p> }
      { error && <p id="error-text">There was an error downloading the images</p> }
      { (!data || data.length === 0) && !isPending && !error
      && <p id="empty-text">There's no data to display</p> }

      <ListDisplay type="flow" data={data} />

    </MainDiv>
  );
}

export default App;


const MainDiv = styled.div`

  > p { margin: 20px auto; width:100%; text-align: center; }
  #error-text { color: red; }

`