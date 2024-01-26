import  { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Schedule.css'; // Import custom CSS file
// import ss from '../assets/ss.jpg'
const MyCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleAddNote = () => {
    if (note.trim() !== '') {
      const formattedDate = date.toDateString();
      const formattedTime = date.toLocaleTimeString();
      const fullNote = `${formattedDate} ${formattedTime}: ${note}`;

      setNotes([...notes, fullNote]);
      setNote('');
    }
  };

  const tileContent = ({ date, view }) => {
    const formattedDate = date.toDateString();
    const isMarked = notes.some((note) => note.includes(formattedDate));

    if (view === 'month' && isMarked) {
      return <span className="note-marker"></span>;
    }

    return null;
  };

  return (
    <div className="calendar-container">
      <div className="background-gradient"></div>
      <div className="calendar-content">
        <h1 className="calendar-heading">Schedule Your Goals Here!!</h1>
        <div className="calendar-wrapper">
          <div className="calendar">
            <img className='imgban' src="https://img.freepik.com/free-photo/buddha-statue-with-nature-landscape_23-2150774187.jpg?t=st=1706257893~exp=1706261493~hmac=21c2184956519f46f23cf8d8d2b4e246548facd6040f21efa0c295d6c758733f&w=1800"></img>
            <Calendar
              value={date}
              onChange={handleDateChange}
              className="custom-calendar"
              tileClassName="custom-tile"
              tileContent={tileContent}
            />
          </div>
          <div className="notes-container">
            <input
              type="text"
              placeholder=" Mark your dates.."
              value={note}
              onChange={handleNoteChange}
              className="note-input"
            />
            <button className="add-note-button" onClick={handleAddNote}>
              Add
            </button>
            <ul className="note-list">
              {notes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;
