import { BrowserRouter, Route, Routes } from 'react-router-dom';

/*로그인 화면*/
import SignUp from './pages/SignUp';
/*회원 가입 화면*/
import SignIn from './pages/SignIn';
/*회원 가입 찾기*/
import FindAccount from './pages/FindAccount';


/*메인 화면*/
import Main from './pages/Home';

/*문제 은행*/
import Exam from './pages/Exam';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/signUp" element={<SignUp/>}></Route>
          <Route path="/signIn" element={<SignIn/>}></Route>
          <Route path="/find-account" element={<FindAccount/>}></Route>

          <Route path="/Main" element={<Main/>}></Route>


          <Route path="/Exam" element={<Exam/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
