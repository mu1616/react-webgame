import  React, { useState, useRef } from 'react';

const  WordRelay = () => {
  const [word, setWrod] = useState('강민수');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);
  const a = useRef(3);
  console.log(a.current);
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word.charAt(word.length - 1) === value.charAt(0)) {
      setResult('딩동댕');
      setWrod(value);
      setValue('');

    } else {
      setResult('땡');
      setValue('');
    }
    inputRef.current.focus();
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} value={value} onChange={onChangeInput} />
        <button>입력!!</button>
      </form>
      <div>{result}</div>
    </>
  )
  
}

export default WordRelay;