import React, {useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    const plus = () => setCount(count+1);
    const minus = () => setCount(count-1);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={plus}>+1</button>
      <button onClick={minus}>-1</button>
    </div>
  )
}
