import Exam_Style from '../../assets/css/modules/exam.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function ExamSideBar() {
    return (
      <div className={`${Exam_Style.sidebar}`}>
        <input className={`${Exam_Style.sidebar_input}`}>
        </input>
        <button className={`${Exam_Style.sidebar_button}`}>
        </button>
      </div>
    );
  }
  
  export default ExamSideBar;