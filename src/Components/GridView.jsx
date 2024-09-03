import  { useState } from 'react';
import PropTypes from 'prop-types';
import './GridView.css'; // Import CSS for GridView

const GridView = ({ data }) => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleItemClick = (student) => {
    setSelectedStudent(student);
  };

  const handleClosePopup = () => {
    setSelectedStudent(null);
  };

  const handleEdit = () => {
    // Handle edit logic here
    console.log("Edit:", selectedStudent);
    handleClosePopup();
  };

  const handleFlag = () => {
    // Handle flag logic here
    console.log("Flag:", selectedStudent);
    handleClosePopup();
  };

  const handleDelete = () => {
    // Handle delete logic here
    // console.log("Delete:", selectedStudent);
    handleClosePopup();
  };
  console.log("dataGrid", data);
  return (
    <>
      <div className="grid-view">
        {data.length > 0 ? (
          data.map((student) => (
            <div
              key={student.id}
              className="grid-item"
              onClick={() => handleItemClick(student)}
            >
              <div className="item-content">
                <h3>{student.name}</h3>
                <p>{student.email}</p>
                <p>{student.phone}</p>
                <p>{student.website}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
        {selectedStudent && (
          <div className="popup-overlay">
            <div className="popup-content">
              <h3>{selectedStudent.name}</h3>
              <p>{selectedStudent.email}</p>
              <p>{selectedStudent.phone}</p>
              <p>{selectedStudent.website}</p>
              <div className="popup-buttons">
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleFlag}>Flag</button>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleClosePopup}>Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <button onClick={() => window.location.href = '/'}>Home</button>
    </>
  );
};

GridView.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      website: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func,
};

export default GridView;
