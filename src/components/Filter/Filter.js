import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../redux/filterSlice';
import { selectFilterQuery } from '../../redux/selectors';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const onFilter = event => {
    dispatch(updateFilter(event.currentTarget.value));
  };
  const value = useSelector(selectFilterQuery);

  return (
    <input
      type="text"
      className={css.filter}
      value={value}
      onChange={onFilter}
      placeholder="Find contacts by name"
    ></input>
  );
};

export default Filter;
