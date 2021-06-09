function App() {  
  return (
    // 2). Create a complex JSX element
    <div>
      {/* 1). Create a simple JSX element */}
      <h1>Food</h1>
      <p>We eat three meals a day</p>
      {/* 3). Add comments in JSX with {} */}
      <ul>
        <li>Breakfast</li>
        <li>Lunch</li>
        <li>Dinner</li>
      </ul>
    </div>
  );
}
    

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
}*/

export default App;