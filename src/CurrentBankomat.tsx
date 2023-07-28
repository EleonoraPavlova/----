import React from 'react';
import { MoneyType } from "./App";
import styled from "styled-components";

type CurrentBankomatProps = {
	money: MoneyType;
}
export const CurrentBankomat = (props: CurrentBankomatProps) => {

	return (
		<Banknote color={props.money.banknotes === "Dollars" ? "green" : "pink"}>
			<span> {props.money.banknotes} </span>
			<strong> {props.money.value} </strong>
		</Banknote>

	);
};

const Banknote = styled.div`
 justify-content: center;
	flex-wrap: wrap;
  align-content: center;
  display: flex;
	gap: 15px;
	margin: 10px;
	height: 80px;
  border-radius: 3px;
  border: none;
  color: gray;
	width: 150px;
  background-color: ${props => {
		if (props.color === "green") {
			return "#b2f6c6"
		} else {
			return "#ddadaf"
		}
	}};
`
