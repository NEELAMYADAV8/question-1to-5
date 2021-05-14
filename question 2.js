function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>
        {number}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
  
  const numbers = 
    arr = [00110001001110];
  ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
  );
 