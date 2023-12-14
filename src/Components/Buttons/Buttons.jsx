import { useState, useEffect } from 'react';
import './buttons.scss';
const Buttons = () => {
  const [visibleValue, setVisibleValue] = useState('');
  const [res1, setRes1] = useState('');
  const [res2, setRes2] = useState('');
  const [action, setAction] = useState('');
  const [finish, setFinish] = useState(false);

  const numberValue = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ','];
  const actionValue = ['+', 'x', '-', '/', '%'];

  const clearAll = () => {
    setVisibleValue('');
    setRes1('');
    setRes2('');
    setAction('');
  };

  const getChangeValue = (e) => {
    let res = e.target.textContent;

    // кнопки 0-9
    if (numberValue.includes(res)) {
      if (!res1 && !action) {
        setRes1((res1) => res1 + res);
        // setVisibleValue((prev) => (prev += res));
      }
      // if (res1 && res2 && finish) {
      //   setRes2((prev) => prev + res);
      //   setFinish(false);
      //   setVisibleValue(res2);
      // }
      // if (res1 && action) {
      //   setRes2((prev) => prev + res);
      //   setVisibleValue(res2);
      // }
    }

    //кнопки +, - , / , x, %
    // if (actionValue.includes(res)) {
    //   setAction(res);
    //   setVisibleValue(action);
    // }
  };

  // if (res1 && res2) {
  //   switch (action) {
  //     // case '+':
  //     //   setRes1(+res1 + +res2);
  //     //   setVisibleValue(+res1 + +res2);
  //     // case 'x':
  //     //   setRes1(+res1 * +res2);
  //     //   setVisibleValue(+res1 * +res2);
  //     case '-':
  //       setRes1(res1 - res2);
  //       setVisibleValue(res1 - res2);
  //     // case '/':
  //     //   setRes1(+res1 / +res2);
  //     //   setVisibleValue(+res1 / +res2);
  //     // case '=':
  //     //   setRes1(+res1 + +res2);
  //     //   setVisibleValue(+res1 + +res2);
  //   }
  // }

  // useEffect(() => {
  //   setVisibleValue(res1);
  // }, [res1]);

  // useEffect(() => {
  //   setVisibleValue(res2);
  // }, [res2]);

  return (
    <>
      <input className="inputs old" type="text" value="oldres" />
      <input className="inputs new" type="text" value={visibleValue} />
      <div className="wrapper" onClick={(e) => getChangeValue(e)}>
        <button className="wrapper__btn" onClick={clearAll}>
          C
        </button>
        <button className="wrapper__btn">+-</button>
        <button className="wrapper__btn">%</button>
        <button className="wrapper__btn-red">/</button>
        <button className="wrapper__btn">7</button>
        <button className="wrapper__btn">8</button>
        <button className="wrapper__btn">9</button>
        <button className="wrapper__btn-red">x</button>
        <button className="wrapper__btn">4</button>
        <button className="wrapper__btn">5</button>
        <button className="wrapper__btn">6</button>
        <button className="wrapper__btn-red">-</button>
        <button className="wrapper__btn">1</button>
        <button className="wrapper__btn">2</button>
        <button className="wrapper__btn">3</button>
        <button className="wrapper__btn-red">+</button>
        <button className="wrapper__btn">0</button>
        <button className="wrapper__btn">,</button>
        <button className="wrapper__btn-yellow">=</button>
      </div>
    </>
  );
};

export default Buttons;
