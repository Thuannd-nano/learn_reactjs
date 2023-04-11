import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



const user = {
  name: 'nano',
  imageUrl: 'https://vuiapp.vn/themes/md_vuiapp/img/footer-logo.png',
  imgSizeWidth: 91,
  imgSizeHeight: 304,
}

const dsHocSinh = [
  {
    nam: 'hoc sinh 1',
    age: '18'
  },
  {
    nam: 'hoc sinh 2',
    age: '20'
  },
  {
    nam: 'hoc sinh 3',
    age: '24'
  }
]

function LearnState() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];
  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }
  return (
    <div className="App">
      <h1> Tên của tôi là: {user.name} </h1>
      <img
        src={user.imageUrl} alt='Anh nano '
        style={{
          width: user.imgSizeWidth,
          height: user.imgSizeWidth
        }}
      />
      <br />
      <MyButton />
      <DsStudent />
      <Caculator />
      <br />


      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
    </div>
  );
}

function Caculator() {
  const [count, setCount] = useState(0);

  function HandClickCaculator() {
    setCount(count + 1)
  }
  return (
    <button onClick={HandClickCaculator}>So lan click la: {count} </button>
  )

}

function DsStudent() {
  return (
    <ul>
      {dsHocSinh.map(employee =>
        <li>
          {employee.nam} có độ tuổi {employee.age}
        </li>
      )}
    </ul>
  )
}

function HandClick() {
  alert('ban nhan duoc canh bao')
}

function MyButton() {
  return (
    <button onClick={HandClick}> test button</button>
  );
}

function Square({ value, onSquareClick }) {
  return (
    <button className='square' onClick={onSquareClick}>
      {value}
    </button>
  )
}

function calculateWinner(squares) {
  const line = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < line.length; i++) {
    const [a, b, c] = line[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null

}

function Board({ xIsNext, squares, onPlay }) {

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Nguoi chien thang la: " + winner;
  } else {
    status = "Nguoi choi tiep theo: " + (xIsNext ? "X" : "O")
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares)
  }

  return (
    <>
      <div className='stutus'>{status}</div>
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className='board-row'>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className='board-row'>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  )
}


export default LearnState;
