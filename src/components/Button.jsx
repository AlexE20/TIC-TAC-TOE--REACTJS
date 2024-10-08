function Button({ setCells, setPlayerOne }) {
  const restart = () => {
    setCells(Array(9).fill(null));
    setPlayerOne(true);
  };

  return <button onClick={restart} id="restart">Restart</button>;
}

export default Button;
