import { useState } from 'react';
import '../../css/NewExpense/NewExpenseFormStyles/NewExpenseForm.min.css';
/*==============================================================*/

interface NewExpenseFormProps {
  onformSubmitHandler: (enteredExpenseInformation: object) => void; // it receives a variable (object) and it returns void because is not returning a value.
}

const NewExpenseForm = (props: NewExpenseFormProps) => {
  // console.log('NewExpenseForm Rendered!');

  const [expenseTitle, setExpenseTitle] = useState('');
  const inputTitleHandler = (event: any) => {
    setExpenseTitle(event.target.value);
  };

  const [expenseAmount, setExpenseAmount] = useState('');
  const inputAmountHandler = (event: any) => {
    setExpenseAmount(event.target.value);
  };

  const [expenseDate, setExpenseDate] = useState('');
  const inputDateHandler = (event: any) => {
    setExpenseDate(event.target.value);
  };

  // const [expenseOnSubmit, setExpenseOnSubmit] = useState({});
  const formSubmitHandler = (event: any) => {
    event.preventDefault();

    const newExpenseInformation: object = {
      title: expenseTitle,
      amount: expenseAmount,
      date: new Date(expenseDate),
    };

    props.onformSubmitHandler(newExpenseInformation);
    setExpenseTitle('');
    setExpenseAmount('');
    setExpenseDate('');
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="newExpenseFormTitle">Title</label>
          <input
            type="text"
            name="newExpenseFormTitle"
            id="newExpenseFormTitle"
            placeholder="Expense Title"
            onChange={inputTitleHandler}
            value={expenseTitle}
            autoComplete={'off'}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="newExpenseFormAmount">Amount</label>
          <input
            type="number"
            min={0.01}
            step={0.01}
            name="newExpenseFormAmount"
            id="newExpenseFormAmount"
            placeholder="Expense Amount"
            onChange={inputAmountHandler}
            value={expenseAmount}
            autoComplete={'off'}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="newExpenseFormDate">Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2025-12-31"
            name="newExpenseFormDate"
            id="newExpenseFormDate"
            onChange={inputDateHandler}
            value={expenseDate}
            autoComplete={'off'}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
