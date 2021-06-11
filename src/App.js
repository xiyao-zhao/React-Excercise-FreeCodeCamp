import React from 'react';
import PropTypes from 'prop-types';

// 7).Stateless functional component
 function Apple() {  
   return (
//     2). Create a complex JSX element
    <div>
 {/* 1). Create a simple JSX element */}
 <h1>Food</h1>
      <p>We eat three meals a day</p>
      {/* 3). Add comments in JSX with {} */}
      {/* 5). Add a class with className */}
      {/* 6). Self-closing JSX Tags */}
      <br />
      <ul className="myList">
        <li>Breakfast</li>
        <li>Lunch</li>
        <li>Dinner</li>
      </ul>
      <hr />
    </div>
  );
}


// 8). Create a React component
class MyComponent extends React.Component {
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


// 12). Render a class component to the DOM
//ReactDOM.render(<TypesOfFood />, document.getElementById('root'));


// 13). Pass props to a stateless functional component
const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: {props.date}</p>
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()}/>
      </div>
    );
  }
};


// 14). Pass an array as Props
const List = (props) => {
  return <p>{props.tasks.join(", ")}</p>
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["walk dog", "cook", "clean"]}/>
        <h2>Tomorrow</h2>
        <List tasks={["drive", "shop", "read"]}/>
      </div>
    );
  }
};


// 15). Use default Props
const Items = (props) => {
  return (
    <div>
      <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
    </div>
  )
};

// 17). Use PropTypes to define props
Items.propTypes = { quantity: PropTypes.number.isRequired };

Items.defaultProps = { Quantity: 0 };

// 16). Override default props
class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items quantity={100}/>
  }
};


// 18). Access props using this.props
class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
            <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
        </div>
    );
  }
};

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
          <h2>Reset Password</h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
          <ReturnTempPassword tempPassword="12345678"/>
        </div>
    );
  }
};


// 19). Review using props with stateless functional components
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper />
      </div>
    );
  }
};

class Camper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    )
  }
}
Camper.defaultProps = { name: 'CamperBot' }
Camper.propTypes = { name: PropTypes.string.isRequired }


// 20). Create a statefull component
/*class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  // 21). Render state in user interface
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
*/


// 22). Render state in the UI another way
/*class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    const name = this.state.name;
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
};
*/


// 23). Set state with this.setState
class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    // 24). Bind 'this' to a class method
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      name: "React Rocks!"
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};


// 24). Use state to toggle an element
/*class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility() {
    this.setState(state => ({
      visibility: !state.visibility
    }))
  }
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
*/


// 25). Write a simple counter
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment(){
    this.setState(state => ({
      count: state.count + 1
    }))
  };

  decrement(){
    this.setState(state => ({
      count: state.count - 1
    }))
  };

  reset() {
    this.setState({
      count: 0
    })
  }

  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};


// 26). Create a controlled input
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      input: event.target.value
    }) 
  }

  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.handleChange} />
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};



export default ControlledInput;