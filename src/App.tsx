import React, { useState } from 'react';
import './App.css';
import { Country } from "./Country";
import { styled } from "styled-components";


export type BanknotsType = 'Dollars' | 'Euro' | 'All';

export type MoneyType = {
  banknotes: BanknotsType;
  value: number;
  number: string;
}

let defaultMoney: MoneyType[] = [
  { banknotes: 'Dollars', value: 100, number: ' a1234567890' },
  { banknotes: 'Dollars', value: 50, number: ' z1234567890' },
  { banknotes: 'Euro', value: 100, number: ' w1234567890' },
  { banknotes: 'Dollars', value: 100, number: ' e1234567890' },
  { banknotes: 'Dollars', value: 50, number: ' c1234567890' },
  { banknotes: 'Euro', value: 100, number: ' r1234567890' },
  { banknotes: 'Dollars', value: 50, number: ' x1234567890' },
  { banknotes: 'Euro', value: 50, number: ' v1234567890' },
]

export const moneyFilter = (money: MoneyType[], filter: BanknotsType): MoneyType[] => {
  if (filter === 'All') {
    return defaultMoney
  }
  return money?.filter(m => m.banknotes === filter);

}
function App() {
  const [filterValue, setFilterValue] = useState<BanknotsType>('All')
  //const [money, setMoney] = useState<MoneyType[]>(defaultMoney)

  const filteredMoney = moneyFilter(defaultMoney, filterValue)

  return (
    <div className="App">
      <Title1>ATM</Title1>
      <Country
        data={filteredMoney}
        setFilterValue={setFilterValue}

      />
    </div>
  );
}
export default App;


const Title1 = styled.h1`
	margin: 15px;
  color: gray;
`
