import './Loading.module.css'
import stu from "../../assets/green_stu.PNG"; 

const Loading = () => {
  return(
    <div>
      <h1 className='loader'>Loading...</h1>
      <img alt={""} src={stu}/>
    </div>
  )
}

export default Loading;
