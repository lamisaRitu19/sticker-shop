import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Shop></Shop>
      <footer>
        <h4>1. How react works?</h4>
        <p>
          React keeps a virtual DOM which is the simpler and cleaner copy of the real DOM. If there is any change, it is found quickly by efficient algorithm and changes are done in specific positions. To change, a copy is created of the virtual DOM and is compared with the previous one, and then the changes found are added in the new one.
        </p>
        <h4>2. Difference between props and state?</h4>
        <ul>
          <li>The state is asynchronous and props are read-only.</li>
          <li>The state can be changed by user activity and props can only be sent.</li>
          <li>State remains only in the place where it is declared whereas state value is sent from component to component and parent to child through props.</li>
          <li>The component which has its own state changed is called stateful component. The component which has props changed its value is called presentational component.</li>
        </ul>
        <h4>3. How 'useState()' works?</h4>
        <p>
          It is a hook. It recognizes any change of state, identifies where the changes need to be done in the UI and changes it. Two things are get from this - the variable that declares the state and another dispatcher which is a setter function, does the action by changing it.
        </p>
      </footer>
    </div>
  );
}

export default App;
