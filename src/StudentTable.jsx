import React from 'react';

const StudentTable = ({ students, deleteStu, setEditingStu }) => {
  return (
    <table className="table-auto w-full bg-white rounded shadow-md mt-4">
      <thead>
        <tr className="bg-gray-200">
          <th className="px-4 py-2">ID</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Age</th>
          <th className="px-4 py-2">Grade</th>
          <th className="px-4 py-2">Status</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id} className="text-center">
            <td className="border px-4 py-2">{student.id}</td>
            <td className="border px-4 py-2">{student.name}</td>
            <td className="border px-4 py-2">{student.age}</td>
            <td className="border px-4 py-2">{student.grade}</td>
            <td className="border px-4 py-2">
              {student.status === 'active' ? 'Active' : 'Inactive'}
            </td>
            <td className="border px-4 py-2">
              <button
                onClick={() => setEditingStu(student)}
                className="bg-yellow-400 text-white px-2 py-1 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => deleteStu(student.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
