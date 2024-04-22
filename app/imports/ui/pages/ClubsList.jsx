import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const ClubsList = () => {
  const [clubsData, setClubsData] = useState([]);
  const [currentChunk, setCurrentChunk] = useState(0);
  const chunkSize = 15;

  useEffect(() => {
    async function loadClubsData() {
      try {
        const response = await fetch('/UH Manoa Approved RIOs - 2023-2024 UHM Approved RIOs.csv');
        const data = await response.text();
        const lines = data.split('\n').slice(1);
        const parsedData = lines.map(line => {
          const regex = /"([^"]*(?:""[^"]*)*)"|([^",]+)/g;
          const cols = [];
          let match;
          // eslint-disable-next-line no-cond-assign
          while ((match = regex.exec(line)) !== null) {
            cols.push(match[1] ? match[1].replace(/""/g, '"') : match[2]);
          }
          return cols;
        });
        setClubsData(parsedData);
      } catch (error) { /* empty */ }
    }

    loadClubsData();
  }, []);

  const displayClubs = () => clubsData
    .slice(currentChunk * chunkSize, (currentChunk + 1) * chunkSize)
    .map((rowData, rowIndex) => (
      <tr key={rowIndex}>
        {rowData.map((cellData, cellIndex) => (
          <td key={cellIndex} className={cellIndex === 5 ? 'description' : ''}>
            {cellData.trim()}
          </td>
        ))}
      </tr>
    ));

  const handlePrevClick = () => {
    setCurrentChunk(Math.max(0, currentChunk - 1));
  };

  const handleNextClick = () => {
    setCurrentChunk(Math.min(Math.ceil(clubsData.length / chunkSize) - 1, currentChunk + 1));
  };

  return (
    <div>
      <h1>List of Clubs</h1>
      <table id="clubsTable">
        <thead>
          <tr>
            <th>Club Name</th>
            <th>Registration Start Date</th>
            <th>Registration End Date</th>
            <th>Category</th>
            <th>Contact Email</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {displayClubs()}
        </tbody>
      </table>
      <div id="pagination">
        <Button onClick={handlePrevClick} disabled={currentChunk === 0}>
          Previous
        </Button>
        <span>{currentChunk + 1}</span>
        <Button onClick={handleNextClick} disabled={(currentChunk + 1) * chunkSize >= clubsData.length}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default ClubsList;
