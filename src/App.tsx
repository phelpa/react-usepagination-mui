import { TablePagination, TableCell, Table, TableHead, TableBody, TableRow } from '@material-ui/core';
import rows from './rows';
// import usePagination from './usePagination';
import usePagination from 'use-pagination-mui'

function App() {

  const { changePageEvent, perPage, changePerPageEvent, arrayPage } = usePagination();

  return (
    <>
    <Table>
      <TableHead>
        <TableRow>
        <TableCell>ID</TableCell>
        <TableCell>First Name</TableCell>
        <TableCell>Last Name</TableCell>
        <TableCell>Age</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
          {rows
          .slice(arrayPage * perPage, arrayPage * perPage + perPage)
          .map((row) => (
            <TableRow>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.age}</TableCell>
            </TableRow>
        ))}
      </TableBody>
    </Table>
      <TablePagination
      rowsPerPageOptions={[5, 10, 15]}
      count={rows.length}
      page={arrayPage}
      rowsPerPage={perPage}
      onPageChange={changePageEvent}
      onRowsPerPageChange={changePerPageEvent}
      />     
    </>
  );
}


export default App;
