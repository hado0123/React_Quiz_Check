function Quiz02() {
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
