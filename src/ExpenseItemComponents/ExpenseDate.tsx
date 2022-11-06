import './ExpenseDate.scss'
interface ExpenseDateProps {
  date: Date;
}

const ExpenseDate = (props: ExpenseDateProps) => {
  const DAY = props.date.toLocaleString('en-US', { day: '2-digit' });
  const MONTH = props.date.toLocaleString('en-US', { month: '2-digit' });
  const YEAR = props.date.toLocaleString('en-US', { year: 'numeric' });
  return (
    <>
      <div className='dates'>{DAY}</div>
      <div className='dates'>{MONTH}</div>
      <div className='dates'>{YEAR}</div>
    </>
  );
};

export default ExpenseDate;
