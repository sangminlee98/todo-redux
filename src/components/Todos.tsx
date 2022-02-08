import React from 'react';

type TodoItemProps = {
  todo: {},
  onToggle: () => void,
  onRemove: () => void,
}
type TodoProps = {
  input: null,
  todos: {},
  onChangeInput: () => void,
  onInsert: () => void,
  onToggle: () => void,
  onRemove: () => void,
}

const TodoItem = ({todo, onToggle, onRemove}: TodoItemProps) => {
  return (
    <div>
      <input type="checkbox" />
      <span>예제 텍스트</span>
      <button>삭제</button>
    </div>
  );
};
const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove
}: TodoProps) => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input />
        <button type='submit'>등록</button>
      </form>
      <div>
        <TodoItem todo={todos} onToggle={onToggle} onRemove={onRemove}/>
        <TodoItem todo={todos} onToggle={onToggle} onRemove={onRemove}/>
        <TodoItem todo={todos} onToggle={onToggle} onRemove={onRemove}/>
        <TodoItem todo={todos} onToggle={onToggle} onRemove={onRemove}/>
        <TodoItem todo={todos} onToggle={onToggle} onRemove={onRemove}/>
      </div>
    </div>
  );
};

export default Todos;