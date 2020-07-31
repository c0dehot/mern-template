import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ userList, setUserList ] = useState( [] )

  async function getUsers(){
    const apiResult = await fetch( '/api/endpoint/' ).then( r=>r.json() )
    // { status: true, list: [ '....' ] }

    if( apiResult.status ){
      // update this component with our new user data
      setUserList( apiResult.list )
    }
  }

  // run this at mounting of the component
  useEffect( function(){
    getUsers()
  }, [] )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          We did it! We are the REACTors!:
          <ul>
            {userList.map( user=><li>{user}</li> )}
          </ul>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
