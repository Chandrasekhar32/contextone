import React from 'react'
import Expenseheader from './Expenseheader';
import Balance from './Balance';
import './Expensestyles.css';
import Incomeexpenses from './Incomeexpenses';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';

const Expenstracker = () => {
  return (
    <div className='body-expense'>
      <Expenseheader />
        <div className='container'>
          <Balance />
          <Incomeexpenses />
          <TransactionList />
          <AddTransaction />
        </div>
    </div>
  )
}

export default Expenstracker