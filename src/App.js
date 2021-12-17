import './App.css';
import Hello from './components/Hello.js';
import HelloClass from './components/HelloClass';
import UserDetails from './components/UserDetails';
import Click from './components/Click';
import Click2 from './components/Click2';
import Login from './components/Login';
import Signup from './components/Signup';
import Toggle from './components/Toggle';

const homer = {
  name: 'Homer',
  avatar: '/img/homer.jpg',
  address: {
      street: '742 Evergreen Terrace',
      city: 'Springfield'
  },
  shout: () => alert("D'oh!")
};

const isAuthenticated=false;
const hasError=true;

const randomFood = () => {
  const index = Math.floor(3 * Math.random());
  const foods = ['beer', 'burgers', 'pizza'];
  return foods[index];
}




function App() {
  return (
    <div className="App">
      <h1>I like {randomFood()}</h1>
      <h2>Login and signup</h2>
      <div>
        {isAuthenticated?<Login />:
      <Signup />}
      </div>
      <div>
          {hasError && <p>Something went wrong:((</p>}
      </div>
      <Toggle  active/>
      <Toggle />
    <p>Lets Play Component Game</p>
    <UserDetails userInfo={homer}/>
    <HelloClass age={14}/>
    <Hello myBoolean userName="Manda" favoritecolor="green"/>
    <Hello userName="Eszter" favoritecolor="blue"/>
    <Click isOnline/>
    <Click />
    <Click idle/>
    <Click2 />
    <Click2 isOnline/>
    </div>
  );
}

export default App;
