import './ExpenseDate.scss'
interface ExpenseDateProps {
  date: Date;
}

const ExpenseDate = (props: ExpenseDateProps) => {
  const DAY = props.date.toLocaleString('en-US', { day: '2-digit' });
  const MONTH = props.date.toLocaleString('en-US', { month: '2-digit' });
  const YEAR = props.date.toLocaleString('en-US', { year: 'numeric' });
  return (
    <div className='dates'>
      <h6 className='date'>{DAY}/</h6>
      <h6 className='date'>{MONTH}/</h6>
      <h6 className='date'>{YEAR}</h6>
    </div>
  );
};

export default ExpenseDate;
