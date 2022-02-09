import React from 'react';
import {changeInput, insert, remove, Todo, toggle} from '../modules/todos';
import Todos from '../components/Todos';
import { connect } from 'react-redux';
import { RootState } from '../modules';
type Props = {
  input: any,
  todos: Todo[],
  changeInput: (input: any) => void,
  insert: (text: string) => void,
  toggle: (id: number) => void,
  remove: (id: number) => void,
}
const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove
}: Props) => {
  return (
  <Todos 
    input={input}
    todos={todos}
    onChangeInput={changeInput}
    onInsert={insert}
    onToggle={toggle}
    onRemove={remove}
    />
  );
};

export default connect(
  ({todos}: RootState) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    changeInput,
    insert,
    toggle,
    remove,
  },
)(TodosContainer)