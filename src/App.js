import './App.css';
import Hello from './components/Hello.js';
import HelloClass from './components/HelloClass';
import UserDetails from './components/UserDetails';

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
    </div>
  );
}

export default App;
