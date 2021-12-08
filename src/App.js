// import './App.css';
// import { useState } from 'react';
// import axios, { Axios } from 'axios';

// function App() {
//   const [formInput, setFormInput] = useState('');
//   const [job, setJob] = useState({title: 'No match job title', company: 'None'});

//   function onSearchButtonClick() {
//     axios.get("http://localhost:8000/api/jobs/find/softwareengineer")
//       .then(response => setJob(response.data))
//       .catch(error => console.warn("error"));
//   }


//   return (
//     <div>
//       <input type='text' value={formInput}
//       onChange={(e) => setFormInput(e.target.value)}
//       />
//       <button onClick={onSearchButtonClick}>
//         Search job
//       </button>
//       <div>
//         Job title: {job.title}
//       </div>
//       <div>
//         Job Company: {job.company}
//       </div>
//     </div>
//   );
// }

// export default App;
