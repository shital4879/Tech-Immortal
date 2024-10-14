import React from 'react';

const SearchFilter = ({ setSearch, setFilterStatus }) => {
  return (
    <div className="flex mb-4">
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name"
        className="border p-2 rounded w-full mr-4"
      />
      <select
        onChange={(e) => setFilterStatus(e.target.value)}
        className="border p-2 rounded w-48"
      >
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
  );
};

export default SearchFilter;
