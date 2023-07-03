import React, { useEffect, useState } from 'react';
import axios from 'axios';


const AddStudent = () => {
      const [students, setStudents] = useState([]);

      useEffect(() => {
        fetchStudents();
      }, []);
    
      const fetchStudents = async () => {
        try {
          const response = await axios.get('http://localhost:8000/api/students/');
          setStudents(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      const addStudent = async (studentData) => {
            try {
              const response = await axios.post('http://localhost:8000/api/students/', studentData);
              // Handle the response if needed
              console.log(response.data); // Log the response data for example
              // Refresh the student list or perform any other necessary actions
              fetchStudents();
            } catch (error) {
              console.error(error);
              // Handle the error if needed
            }
          };

          const handleSubmit = (event) => {
            event.preventDefault();
            // Get the form data
            const studentData = {
              name: event.target.name.value,
              department: event.target.department.value,
              college_id: event.target.collegeId.value
            };
            // Call the addStudent function with the student data
            addStudent(studentData);
            // Reset the form if needed
            event.target.reset();
          };
          
          return (
            <div>
              <h1>Add Student</h1>
              <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" required />
                <input type="text" name="department" placeholder="Department" required />
                <input type="text" name="collegeId" placeholder="College ID" required />
                <button type="submit">Add</button>
              </form>
              {/* Rest of your component */}
            </div>
          );
          
}

export default AddStudent
