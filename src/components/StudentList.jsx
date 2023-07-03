import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentList = () => {
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

  const clickme = () => {
    console.log('clicked');
    const studentList = students.map((student) => (
      <li key={student.id}>{student.name}</li>
    ));
    console.log(studentList);
  };

  return (
    <div>
      <button type="button" className="btn btn-outline-secondary" onClick={clickme}>
        StudentList
      </button>
    </div>
  );
};

export default StudentList;
