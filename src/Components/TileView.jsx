import PropTypes from 'prop-types';
import './TileView.css';

const TileView = ({ data, onSelect, onEdit, onFlag, onDelete }) => {
  return (
    <>
      <div className="tile-view">
        {data.map((student) => (
          <div
            key={student.id}
            className="tile-item"
            onClick={() => onSelect(student)}
          >
            <h3>{student.name}</h3>
            <p>{student.email}</p>
            <div className="tile-buttons">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit(student);
                }}
                aria-label={`Edit ${student.name}`}
              >
                Edit
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onFlag(student);
                }}
                aria-label={`Flag ${student.name}`}
              >
                Flag
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(student);
                }}
                aria-label={`Delete ${student.name}`}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => (window.location.href = "/")}>Home</button>
    </>
  );
};

TileView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  })).isRequired,
  onSelect: PropTypes.func.isRequired,
  onEdit: PropTypes.func,
  onFlag: PropTypes.func,
  onDelete: PropTypes.func,
};

TileView.defaultProps = {
  onEdit: () => {},
  onFlag: () => {},
  onDelete: () => {},
};

export default TileView;
