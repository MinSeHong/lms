import Exam_Style from '../assets/css/modules/exam.module.css'
import styles from '../assets/css/modules/styles.module.css'
import ExamSideBar from '../components/Exam/ExamSideBar';


function Exam(){


    const ForStatement = () => {
        const result=[];
        for(let i=1; i<=8; i++){
            result.push(
                <div className={`${Exam_Style.item}`} key={i}>
                    <button></button>
                    <div>
                        ㅇㅇㅇ
                    </div>
                </div>);
            
        }
        return result;
    }

    return(
        <>
            <ExamSideBar/>
            <div className={`${Exam_Style.container}`}>
                {ForStatement()}
            </div>
        </>
    );
}

export default Exam;
