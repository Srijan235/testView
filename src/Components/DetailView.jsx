import PropTypes from 'prop-types';
import './DetailView.css'; // Import CSS for DetailView

const DetailView = ({ student, onBack }) => {
  if (!student) {
    return <div className="detail-view">No student data available.</div>;
  }

  const { name, email, phone, website } = student;

  return (
    <div className="detail-view">
      <button onClick={onBack} className="back-button" aria-label="Go back">Back</button>
      <h2>{name}</h2>
      <p><strong>Email:</strong> {email || 'N/A'}</p>
      <p><strong>Phone:</strong> {phone || 'N/A'}</p>
      <p><strong>Website:</strong> {website || 'N/A'}</p>
    </div>
  );
};

// Define PropTypes for type checking
DetailView.propTypes = {
  student: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string,
  }),
  onBack: PropTypes.func.isRequired,
};

// Define default values for props
DetailView.defaultProps = {
  student: null,
};

export default DetailView;
