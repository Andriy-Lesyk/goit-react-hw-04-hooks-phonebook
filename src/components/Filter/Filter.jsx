import React from 'react';
import { Input } from './Filter.styles';
import PropTypes from 'prop-types';

function Filter({ filter, onChange }) {
  return (
    <div>
      <label htmlFor={'filter'}>Find contacts by name</label>
      <Input value={filter} onChange={onChange} type="text" name="filter" />
    </div>
  );
}
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
export default Filter;
