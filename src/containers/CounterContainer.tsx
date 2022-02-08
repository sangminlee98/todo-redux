import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { RootState } from '../modules';
import { decrease, increase } from '../modules/counter';

type Props = {
  number: number,
  increase: () => void,
  decrease: () => void,
}
const CounterContainer = ({number, increase, decrease}: Props) => {
  return <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
};

export default connect(
  (state: RootState) => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease,
  }
)(CounterContainer);