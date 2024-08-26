import Quiz01 from './Quiz01';
import Quiz02 from './Quiz02';
import Quiz03 from './Quiz03';
import Quiz04 from './Quiz04';
import Quiz05 from './Quiz05';


function App() {
  return <Quiz01 name="이지은" age={21} phone="010-2323-9090" major="컴퓨터공학"/>
  // return <Quiz02 name="이지은" age={21} phone="010-2323-9090">컴퓨터 공학</Quiz02>
  // return <Quiz03 name="이지은" phone="010-2323-9090">컴퓨터 공학</Quiz03>
  // return <Quiz04 major="국어국문과" grade={['A', 'A+', 'C', 'B', 'B+', 'D']} start={false}></Quiz04>
  // return <Quiz05 major="국어국문과" grade={['A', 'A+', 'C', 'B', 'B+', 'D']} start={false}>컴퓨터 공학</Quiz05>

}

export default App;
