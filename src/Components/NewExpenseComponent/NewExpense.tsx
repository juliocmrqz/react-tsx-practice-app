import './NewExpense.scss';
import NewExpenseForm from './NewExpenseForm';
/*=============================================================*/

const NewExpense = () => {
  const saveNewExpenseInformation = (enteredExpenseInformation: object) => {
    let idRandom = Math.random();
    const expenseInformation = {
      ...enteredExpenseInformation,
      id: idRandom.toString(),
    };
    console.warn(expenseInformation);
  };
  return (
    <div className="new-expense">
      <NewExpenseForm onformSubmitHandler={saveNewExpenseInformation} />
    </div>
  );
};

export default NewExpense;
