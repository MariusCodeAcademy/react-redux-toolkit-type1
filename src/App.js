import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';

// App.js. Jei esam prisilogine tai rodom UserProfile ir Counter
// App.js. Jei nesam prisilogine tai rodom tik Auth

function App() {
  return (
    <>
      <Header />
      <Auth />
      <Counter />
    </>
    // <div></div>
  );
}

export default App;
