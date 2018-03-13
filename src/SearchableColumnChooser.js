import React from 'react';
import { ColumnChooser } from '@devexpress/dx-react-grid-bootstrap3';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { compose, withState, withPropsOnChange } from 'recompose';

const styles = {
  padding: '5px'
};

const childMatches = (child, filter) =>
  child.props.item.column.title.toLowerCase().includes(filter.toLowerCase());

const SearchableColumnChooser = compose(
  withState('filter', 'setFilter', ''),
  withPropsOnChange(['children', 'filter'], ({ children, filter }) => ({
    filteredChildren: children.filter(c => childMatches(c, filter))
  }))
)(props => (
  <form style={styles}>
    <FormGroup controlId="searchText">
      <ControlLabel>Search</ControlLabel>
      <FormControl
        type="text"
        value={props.filter}
        placeholder="Column Title"
        onChange={e => props.setFilter(e.target.value)}
      />
    </FormGroup>
    <ColumnChooser.Container>{props.filteredChildren}</ColumnChooser.Container>
  </form>
));

export { SearchableColumnChooser };
