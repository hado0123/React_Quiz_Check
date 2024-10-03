import React, { useState } from 'react'

function Quiz02() {
   const [form, setForm] = useState({
      username: '',
      message: '',
   })

   const { username, message } = form

   const onChange = (e) => {}

   const onClick = () => {}

   const onKeyDown = (e) => {}

   return (
      <div>
         <h1>이벤트 연습</h1>
         <input type="text" name="username" placeholder="이름 입력" />
         <input type="text" name="message" placeholder="메시지 입력" />
         <button disabled={!username || !message}>확인</button>
      </div>
   )
}

export default Quiz02
