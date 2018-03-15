import React from 'react';
import { ColumnChooser } from '@devexpress/dx-react-grid-bootstrap3';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { compose, withState, withPropsOnChange } from 'recompose';

const formStyles = {
  padding: '5px'
};
const listStyles = {
  overflow: 'auto',
  'max-height': '200px'
};

const childMatches = (child, filter) =>
  child.props.item.column.title.toLowerCase().includes(filter.toLowerCase());

const SearchableColumnChooser = compose(
  withState('filter', 'setFilter', ''),
  withPropsOnChange(['children', 'filter'], ({ children, filter }) => ({
    filteredChildren: children.filter(c => childMatches(c, filter))
  }))
)(({ filter, setFilter, filteredChildren }) => (
  <form style={formStyles}>
    <FormGroup controlId="searchText">
      <ControlLabel>Search</ControlLabel>
      <FormControl
        type="text"
        value={filter}
        placeholder="Column Title"
        onChange={e => setFilter(e.target.value)}
      />
    </FormGroup>
    <ColumnChooser.Container style={listStyles}>
      {filteredChildren}
    </ColumnChooser.Container>
  </form>
));

export { SearchableColumnChooser };
