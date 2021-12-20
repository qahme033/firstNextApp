import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

export default class extends Component {
  render () {
    return (
      <div>
        <Button variant="contained">Hello World</Button>
        <Orders rows={this.props.rows} />

      </div>
    )
  }
}

export async function getStaticProps() {
  // const res = await fetch(
  //   "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
  // );
  const res = await fetch(
    "https://api.jsonbin.io/b/61ab97ca0ddbee6f8b173894"
  ); 
  const data = await res.json();

  return {
    props: {
      rows: data,
      // imageUrl: data.url,
    },
  };
}

function Title(props) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  let foo = { id, date, name, shipTo, paymentMethod, amount };
  return foo;
}
function preventDefault(event) {
  event.preventDefault();
}
console.log("doij")
const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
];

export  function Orders(props) {
  let keys = Object.keys(props.rows[0]);
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>{keys[0]}</TableCell>
            <TableCell>{keys[1]}</TableCell>
            <TableCell>{keys[2]}</TableCell>
            <TableCell>{keys[3]}</TableCell>
            <TableCell align="right">{keys[4]}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map(function (row, index) {
            keys=this;
            return <TableRow key={index}>
              <TableCell>{row[keys[0]]}</TableCell>
              <TableCell>{row[keys[1]]}</TableCell>
              <TableCell>{row[keys[2]]}</TableCell>
              <TableCell>{row[keys[3]]}</TableCell>
              <TableCell align="right">{`$${row[keys[4]]}`}</TableCell>
            </TableRow>
          }, keys)}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}