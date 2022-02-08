import './App.css';
import Counter from './components/Counter';

const App = () => {
  return (
    <div>
      <Counter number={0} onIncrease={(() => null)} onDecrease={(() => null)}/>
    </div>
  );
}

export default App;
