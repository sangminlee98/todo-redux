type Type = 'todos/CHANGE_INPUT' | 'todos/INSERT' | 'todos/TOGGLE' | 'todos/REMOVE';
export type Todo = {
  id: number,
  text: string,
  done: boolean
}
type TodosState = {
  input: any,
  todos: Todo[]
}
type Action = {type: Type, input?: any, todo?: Todo, id?: number};
const CHANGE_INPUT: Type = 'todos/CHANGE_INPUT'; 
const INSERT: Type = 'todos/INSERT';
const TOGGLE: Type = 'todos/TOGGLE';
const REMOVE: Type = 'todos/REMOVE';

export const changeInput = (input: any) => ({
  type: CHANGE_INPUT,
  input
});
let id = 3;
export const insert = (text: string) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false
  }
});

export const toggle = (id: number) => ({
  type: TOGGLE,
  id
})
export const remove = (id: number) => ({
  type: REMOVE,
  id
});

const initialState: TodosState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: true
    },
    {
      id: 2,
      text: '리액트와 리덕스 사용하기',
      done: false
    },
  ]
};

const todos = (state = initialState, action: Action) => {
  switch(action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input
      }
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo!)
      }
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? {...todo, done: !todo.done} : todo)
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      }
    default:
      return state;
  }
}
export default todos;