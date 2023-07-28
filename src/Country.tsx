import React from 'react';
import { City } from "./city/City";
import { BanknotsType, MoneyType } from "./App";
import { styled } from "styled-components";

type CountryProps = {
  data: MoneyType[];
  setFilterValue: (value: BanknotsType) => void;
}

export const Country = (props: CountryProps) => {
  const setAll = () => {
    props.setFilterValue('All');
  }

  const setDollars = () => {
    props.setFilterValue('Dollars')
  }

  const setEuros = () => {
    props.setFilterValue('Euro')
  }

  return (
    <div>
      <City data={props.data} />
      <WrapButton>
        <AllButton onClick={setAll}>All</AllButton>
        <DollarsButton onClick={setDollars}>Dollars</DollarsButton>
        <EurosButton onClick={setEuros}>Euros</EurosButton>
      </WrapButton>
    </div>
  );
};



const WrapButton = styled.div`
   margin: 25px 0;
`

const Button = styled.button`
 background-color: inherit;
  cursor: pointer;
  margin-right: 10px;
  width: 100px;
  padding: 15px;
  border-radius: 3px;
  color: gray;
  :hover {
  color: blue;
}
`
const AllButton = styled(Button)`
  border: 1px solid #c5c5c5;
  &:hover{
  box-shadow: 0px 5px 10px 2px rgba(197, 197, 197, 0.2) inset;
}`


const DollarsButton = styled(Button)`
border: 1px solid #b2f6c6;
 &:hover{
 box-shadow: 0px 5px 10px 2px rgba(178, 246, 198, 0.2) inset;
`

const EurosButton = styled(Button)`
border: 1px solid #ddadaf;
 &:hover{
 box-shadow: 0px 5px 10px 2px rgba(221, 173, 175, 0.2) inset;
`