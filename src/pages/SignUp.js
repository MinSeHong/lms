/*Static Field*/
import loginModule from '../assets/css/modules/Login.module.css'
import AppleLogo from '../assets/statics/icons/Apple-logo.svg'
import GoogleLogo from '../assets/statics/icons/Google-logo.svg'
import ICTLogo from '../assets/statics/icons/ICT-logo.png'
import KakaoTalkLogo from '../assets/statics/icons/KakaoTalk-logo.svg'

function SignUp() {
    return (
      <>
        <form>
          <div className={`${loginModule.container}`}>
            {/* 로고 이미지 배치*/}
            <div className={`${loginModule.logo}`}>
              <img src={ICTLogo}></img>
            </div>

            {/* 제목 설정 값*/}
            <div className={`${loginModule.title}`}>
              한국 ICT 인재 개발원
            </div>

            
            {/* ID INPUT*/}
            <div className={`${loginModule.subject}`}>
              ID
            </div>
            <input type="text" name="아이디용" className={`${loginModule.subject_input}`}>

            </input>

            {/* PASSWORD INPUT*/}
            <div className={`${loginModule.subject}`}>
              PASSWORD
            </div>
            <input type="password" name="비밀번호용" className={`${loginModule.subject_input}`}>
            
            </input>

            <div className={`${loginModule.login_api}`}>
              <div>
                <img src={AppleLogo}></img>
              </div>
              <div>
                <img src={GoogleLogo}></img>
              </div>
              <div>
                <img src={KakaoTalkLogo}></img>
              </div>
            </div>

            
            <div className={`${loginModule.detail}`}>
              {/* 비밀번호 찾기용 */}
              <a href="">
                Forget password
              </a>
              {/* 회원가입 */}
              <a href="">
                Sign In
              </a>
            </div>
          </div>
        </form>
      </>
    );
  }
  
  export default SignUp;