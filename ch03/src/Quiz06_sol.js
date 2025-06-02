import React, { useState } from 'react'

function Quiz06_sol() {
   // state는 set 함수를 이용해서 바꿀 수 있으므로 const로 선언해서 사용
   const [count, setCount] = useState(0)

   return (
      <div>
         <p>카운트: {count}</p>
         <button
            onClick={() => {
               setCount(count + 1)
               // setCount(count++) count state는 const로 선언되서 직접 count값을 바꿀 수 X
            }}
         >
            1씩 증가
         </button>
      </div>
   )
}

export default Quiz06_sol
