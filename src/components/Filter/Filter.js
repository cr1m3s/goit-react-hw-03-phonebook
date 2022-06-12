import PropTypes from 'prop-types';
import style from './Filter.module.css';

const Filter = ({ handleChange, filter }) => {
  return (
    <div className={style.filter}>
      <p className={style.title}>Find contacts by name</p>
      <input onChange={handleChange} type="text" name="filter" value={filter} />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
