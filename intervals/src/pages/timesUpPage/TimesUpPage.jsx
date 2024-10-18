
import '../timesUpPage/timesUpPage.css'
import { Link } from 'react-router-dom'

function TimesUpPage() {
  return (
    <div className='timesUpPage-container'>
      <img src="../src/assets/alarm-icon.svg" alt="nav icon" />
      <h1 className="h1-timesUp">
        Times Up!
      </h1>
      <Link to="/time" className='newTimer-link'>
        <button className='newTimer-btn'>
          SET NEW TIMER
        </button>
      </Link>
    </div>
  )
}

export default TimesUpPage
