const React = require('react');
const { useState, userRef} = React;

const  WordRelay = () => {
  const [word, setWrod] = useSate('강민수');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word.charAt(this.state.word.length - 1) === value.charAt(0)) {
      setResult('딩동댕');
      setWrod(value);
      setValue('');

    } else {
      setResult('땡');
      setValue('');
    }
    inputRef.current.focuse();
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

module.exports = WordRelay;