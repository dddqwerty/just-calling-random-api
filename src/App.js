import './App.css';
import Header from './components/header';
import Message from './components/content';

import RandomQuotes from './cards/randomQuotes';

function App() {
  return (
    <div className="mx-0 xl:mx-40 font-body">
      <Header/>
      <Message/>
      
      <RandomQuotes/>
    </div>
  );
}

export default App;
