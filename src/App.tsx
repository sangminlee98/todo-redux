import './App.css';
import Counter from './components/Counter';
import Todos from './components/Todos';

const App = () => {
  return (
    <div>
      <Counter number={0} onIncrease={(() => null)} onDecrease={(() => null)}/>
      <hr />
      <Todos input={null} todos={{}} onChangeInput={(() => null)} onInsert={(() => null)} onToggle={(() => null)} onRemove={(() => null)} />
    </div>
  );
}

export default App;
