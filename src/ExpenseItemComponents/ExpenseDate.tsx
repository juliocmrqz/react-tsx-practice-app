interface ExpenseDateProps {
  date: Date;
}

const ExpenseDate = (props: ExpenseDateProps) => {
  const DAY = props.date.toLocaleString('en-US', { day: '2-digit' });
  const MONTH = props.date.toLocaleString('en-US', { month: '2-digit' });
  const YEAR = props.date.toLocaleString('en-US', { year: 'numeric' });
  return (
    <div>
      <div>{DAY}</div>
      <div>{MONTH}</div>
      <div>{YEAR}</div>
    </div>
  );
};

export default ExpenseDate;
