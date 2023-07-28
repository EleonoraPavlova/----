import React from 'react';
import { CurrentBankomat } from "../CurrentBankomat";
import { MoneyType } from "../App";
import style from "./City.module.scss"

type CityPropsType = {
  data: MoneyType[];
}

export const City = (props: CityPropsType) => {
  const mappedMoney = props.data?.map((el: MoneyType, index) => {
    return (
      <CurrentBankomat
        key={index}
        money={el}
      />
    )
  })
  return (
    <div className={style.city}>{mappedMoney}</div>
  );
}