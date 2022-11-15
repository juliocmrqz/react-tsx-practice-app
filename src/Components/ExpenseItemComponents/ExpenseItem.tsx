import ExpenseDate from './ExpenseDate';
import '../../css/Expenses/ExpenseItemStyles/ExpenseItem.min.css';
import { useState } from 'react';

interface ExpenseItemProps {
  key: string;
  title: string;
  amount: number;
  date: Date;
}

const ExpenseItem = (props: ExpenseItemProps) => {
  const [title, setTitle] = useState(props.title);

  const updateTitleHandler = () => {
    setTitle('title updated!');
  };

  return (
    <div className="expense">
      <h2>{title}</h2>
      <p>{props.amount}</p>
      <ExpenseDate date={props.date} />
      <button onClick={updateTitleHandler}>Update title</button>
    </div>
  );
};

export default ExpenseItem;
