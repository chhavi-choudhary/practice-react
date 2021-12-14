import './App.css';
import Hello from './components/Hello.js';
import HelloClass from './components/HelloClass';
import UserDetails from './components/UserDetails';
import Click from './components/Click';
import Click2 from './components/Click2';

const homer = {
  name: 'Homer',
  avatar: '/img/homer.jpg',
  address: {
      street: '742 Evergreen Terrace',
      city: 'Springfield'
  },
  shout: () => alert("D'oh!")
};


function App() {
  return (
    <div className="App">
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
