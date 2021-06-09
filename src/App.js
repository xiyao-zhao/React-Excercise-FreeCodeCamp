import React from 'react';

// 7).Stateless functional component
// function Apple() {  
//   return (
//     2). Create a complex JSX element
//    <div>
// {/* 1). Create a simple JSX element */}
// <h1>Food</h1>
//      <p>We eat three meals a day</p>
//      {/* 3). Add comments in JSX with {} */}
//      {/* 5). Add a class with className */}
//      {/* 6). Self-closing JSX Tags */}
//      <br />
//      <ul className="myList">
//        <li>Breakfast</li>
//        <li>Lunch</li>
//        <li>Dinner</li>
//      </ul>
//      <hr />
//    </div>
//  );
//}

// 8). Create a React component
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    )
  }
};


export default MyComponent;