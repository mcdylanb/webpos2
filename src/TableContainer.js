import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(item_no, supplier_num, desc, supp, unit_cost, retail_price, quant, date_rec) {
  return { item_no, supplier_num, desc, supp, unit_cost, retail_price, quant, date_rec};
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 6, 5 , 8),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 6, 5 , 8),
  createData('Eclair', 262, 16.0, 24, 6.0, 6, 5 , 8),
  createData('Cupcake', 305, 3.7, 67, 4.3, 6, 5 , 8),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 6, 5 , 8),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Item no.</TableCell>
            <TableCell align="center">Supplier number</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Supplier</TableCell>
            <TableCell align="center">Unit Cost</TableCell>
            <TableCell align="center">Retail Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Date Recieved</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.item_no}>
              <TableCell component="th" scope="row">
                {row.item_no}
              </TableCell>
              <TableCell align="center">{row.supplier_num}</TableCell>
              <TableCell align="center">{row.desc}</TableCell>
              <TableCell align="center">{row.supp}</TableCell>
              <TableCell align="center">{row.unit_cost}</TableCell>
              <TableCell align="center">{row.retail_price}</TableCell>
              <TableCell align="center">{row.quant}</TableCell>
              <TableCell align="center">{row.date_rec}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
