import React from 'react';
import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import {
  SortingState,
  IntegratedSorting,
  PagingState,
  IntegratedPaging
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  PagingPanel,
  Toolbar,
  ColumnChooser,
  TableColumnVisibility
} from '@devexpress/dx-react-grid-bootstrap3';

import { SearchableColumnChooser } from './SearchableColumnChooser';
import { columns, rows } from './data';

const dummyColCount = 10;
const addDummyColumns = cols =>
  cols.concat(
    Array.from(Array(dummyColCount).keys()).map(i => ({
      name: `empty${i}`,
      title: `Empty ${i}`
    }))
  );

const App = () => (
  <div>
    <Grid columns={addDummyColumns(columns)} rows={rows}>
      <SortingState />
      <PagingState defaultPageSize={5} />
      <IntegratedSorting />
      <IntegratedPaging />
      <Table />
      <TableColumnVisibility />
      <Toolbar />
      <ColumnChooser containerComponent={SearchableColumnChooser} />
      <TableHeaderRow showSortingControls />
      <PagingPanel pageSizes={[0, 5, 10, 20]} />
    </Grid>
  </div>
);

render(<App />, document.getElementById('root'));
