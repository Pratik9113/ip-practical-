import { useState } from 'react'
import axios from "axios";
function App() {
  const [salary, setSalary] = useState('');


  const onSubmitHandler = async() => { 
    const response = await axios.post(`http://localhost:4000/post`,{
      salary : salary
    });

    setSalary(response.data.data);
  }
  return (
    <>
      <div className="salary">
        <form onSubmit={onSubmitHandler}>
        <label>Enter your Gross Salary 
          <input type ="number"
          value={salary}
          onChange={(e) => e.target.salary}
          required
          />
        </label>
        <button> Click</button>
        </form>
      </div>
    </>
  )
}

export default App
