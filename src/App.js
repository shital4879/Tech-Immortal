import React, { useState, useEffect } from 'react';
import StudentForm from './StudentForm';
import StudentTable from './StudentTable';
import SearchFilter from './SearchFilter';

const App = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [editingStu, setEditingStu] = useState(null);

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students'));
    setStudents(storedStudents);
  }, []);

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    setStudents([...students, { ...student, id: Date.now() }]);
  };

  const updateStu = (updatedStudent) => {
    const updatedStudents = students.map((s) =>
      s.id === updatedStudent.id ? updatedStudent : s
    );
    setStudents(updatedStudents);
    setEditingStu(null);
  };

  const deleteStu = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const filteredStu = students
    .filter((student) =>
      student.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((student) =>
      filterStatus === 'all' ? true : student.status === filterStatus
    );

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Student Record Management</h1>
      <StudentForm
        addStudent={addStudent}
        updateStu={updateStu}
        editingStu={editingStu}
      />
      <SearchFilter
        setSearch={setSearch}
        setFilterStatus={setFilterStatus}
      />
      <StudentTable
        students={filteredStu}
        deleteStu={deleteStu}
        setEditingStu={setEditingStu}
      />
    </div>
  );
};

export default App;
