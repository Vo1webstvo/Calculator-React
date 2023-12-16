import { useState, useEffect, useRef } from 'react';
import './buttons.scss';
const Buttons = () => {
  const [visibleValue, setVisibleValue] = useState('');
  const [res1, setRes1] = useState('');
  const [res2, setRes2] = useState('');
  const [action, setAction] = useState('');
  const [finish, setFinish] = useState(false);
  const [point, setPoint] = useState(false);
  const [oldValue, setOldValue] = useState('');

  const numberValue = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
  const actionValue = ['+', 'x', '-', '/', '%'];

  const clearAll = () => {
    setVisibleValue('');
    setRes1('');
    setRes2('');
    setAction('');
    setFinish(false);
  };

  const reverseNumber = (num) => {
    if (num === '0') return;
    if (num > '0') {
      return -num;
    } else {
      return Math.abs(num);
    }
  };

  const getChangeValue = (e) => {
    let res = e.target.textContent;

    // кнопки 0-9
    if (numberValue.includes(res)) {
      if (!res2 && !action) {
        setRes1((res1) => res1 + res);
        setVisibleValue((prev) => (prev += res));
      } else if (res1 && res2 && finish) {
        setRes2(res);
        setFinish(false);
        setVisibleValue(res2);
      } else {
        setRes2((prev) => prev + res);
        setVisibleValue(res2);
        return;
      }
    }

    // кнопки +, - , / , x, %
    if (actionValue.includes(res)) {
      setAction(res);
      setVisibleValue(action);
    }

    if (res === '+-') {
      if (!res2 && !action) {
        setRes1(reverseNumber(res1));
      } else if (res1 && res2 && finish) {
        setRes1(reverseNumber(res1));
      } else {
        setRes2(reverseNumber(res2));
      }
    }

    //если нажимаем знак а не равно, т.е. 1+1+1+2+1 и т.д
    if (res1 && res2 && action && !finish) {
      if (res === '+' || res === '-' || res === 'x' || res === '/') {
        switch (action) {
          case '+':
            setRes1(+res1 + +res2);
            break;
          case '-':
            setRes1(+res1 - +res2);
            break;
          case 'x':
            setRes1(+res1 * +res2);
            break;
          case '/':
            if (res2 === '0' || res2 === 0) {
              setRes1('error');
              break;
            }
            setRes1(+res1 / +res2);
            break;
        }
        setFinish(true);
        setVisibleValue(res1);
      }
    }

    //если нажимает = сразу, т.е. 1+1=
    if (res === '=') {
      if (!res2) setRes2(res1);
      switch (action) {
        case '+':
          setRes1(+res1 + +res2);
          break;
        case '-':
          setRes1(+res1 - +res2);
          break;
        case 'x':
          setRes1(+res1 * +res2);
          break;
        case '/':
          if (res2 === '0' || res2 === 0) {
            setRes1('error');
            break;
          }
          setRes1(+res1 / +res2);
          break;
      }
      setFinish(true);
      setVisibleValue(res1);
    }

    //нажимаем %
    if (res === '%') {
      if (!res2) setRes2(res1);
      switch (action) {
        case '+':
          setRes1((+res1 / 100) * +res2 + +res2);
          break;
        case '-':
          setRes1((+res1 / 100) * +res2 - +res2);
          break;
        case 'x':
          setRes1((+res2 / 100) * +res1);
          break;
        case '/':
          if (res2 === '0' || res2 === 0) {
            setRes1('error');
            break;
          }
          setRes1(+res1 / res2) * res2;
          break;
      }
      setVisibleValue(res1);
    }
  };

  useEffect(() => {
    setVisibleValue(res1);
  }, [res1]);

  useEffect(() => {
    setVisibleValue(res2);
  }, [res2]);

  useEffect(() => {
    setVisibleValue(action);
  }, [action]);

  useEffect(() => {
    setOldValue(`${res1} ${action} ${res2}`);
  }, [res1, action, res2]);

  return (
    <>
      <div className="inputs old"> {oldValue} </div>
      <div className="inputs new">{res1 ? visibleValue : 0}</div>
      <div className="wrapper" onClick={(e) => getChangeValue(e)}>
        <button className="wrapper__btn" onClick={clearAll}>
          C
        </button>
        <button className="wrapper__btn" onClick={reverseNumber}>
          +-
        </button>
        <button className="wrapper__btn">%</button>
        <button className="wrapper__btn wrapper__btn-red">/</button>
        <button className="wrapper__btn">7</button>
        <button className="wrapper__btn">8</button>
        <button className="wrapper__btn">9</button>
        <button className="wrapper__btn wrapper__btn-red">x</button>
        <button className="wrapper__btn">4</button>
        <button className="wrapper__btn">5</button>
        <button className="wrapper__btn">6</button>
        <button className="wrapper__btn wrapper__btn-red">-</button>
        <button className="wrapper__btn">1</button>
        <button className="wrapper__btn">2</button>
        <button className="wrapper__btn">3</button>
        <button className="wrapper__btn wrapper__btn-red">+</button>
        <button className="wrapper__btn">0</button>
        <button className="wrapper__btn">.</button>
        <button className="wrapper__btn wrapper__btn-yellow">=</button>
      </div>
    </>
  );
};

export default Buttons;
