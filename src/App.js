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
/*class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        <MyChildComponent />
      </div>
    )
  }
};


// 9). Render a component with composition
const MyChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};
*/


// 10). Use React to render nested components
/*const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      <TypesOfFruit />
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
      </div>
    );
  }
};
*/


// 11). Render class components within other component
const NonCitrus = () => {
  return (
    <div>
      <h3>Non-Citrus:</h3>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Banana</li>
      </ul>
    </div>
  );
};

const Citrus = () => {
  return (
    <div>
      <h3>Citrus:</h3>
      <ul>
        <li>Lemon</li>
        <li>Lime</li>
        <li>Orange</li>
        <li>Grapefruit</li>
      </ul>
    </div>
  );
};

const Vegetables = () => {
  return (
    <div>
      <h2>Vegetables:</h2>
      <ul>
        <li>Brussel Sprouts</li>
        <li>Broccoli</li>
        <li>Squash</li>
      </ul>
    </div>
  )
}

class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        <NonCitrus />
        <Citrus />
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
};



export default TypesOfFood;