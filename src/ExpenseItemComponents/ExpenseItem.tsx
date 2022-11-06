import ExpenseDate from './ExpenseDate';
interface ExpenseItemProps {
  title: string;
  amount: number;
  date: Date;
}

const ExpenseItem = (props: ExpenseItemProps) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.amount}</p>
      <ExpenseDate date={props.date} />
    </div>
  );
};

export default ExpenseItem;
