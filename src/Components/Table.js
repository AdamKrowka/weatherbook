import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(day, weather, morning, evening, night, humidity, pressure) {
  return { day, weather, morning, evening, night, humidity, pressure };
}

const rows = [
  createData("Monday", "Sunny", "8'C", "12'C", "6'C", "60%", "1000hpa"),
  createData("Monday", "Sunny", "8'C", "12'C", "6'C", "60%", "1000hpa"),
  createData("Monday", "Sunny", "8'C", "12'C", "6'C", "60%", "1000hpa"),
  createData("Monday", "Sunny", "8'C", "12'C", "6'C", "60%", "1000hpa"),
  createData("Monday", "Sunny", "8'C", "12'C", "6'C", "60%", "1000hpa"),
  createData("Monday", "Sunny", "8'C", "12'C", "6'C", "60%", "1000hpa"),
  createData("Monday", "Sunny", "8'C", "12'C", "6'C", "60%", "1000hpa"),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Day</TableCell>
            <TableCell align="right">Weather</TableCell>
            <TableCell align="right">Morning</TableCell>
            <TableCell align="right">Day</TableCell>
            <TableCell align="right">Evening</TableCell>
            <TableCell align="right">Night</TableCell>
            <TableCell align="right">Humidity</TableCell>
            <TableCell align="right">Pressure</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.day}</TableCell>
              <TableCell align="right">{row.weather}</TableCell>
              <TableCell align="right">{row.morning}</TableCell>
              <TableCell align="right">{row.evening}</TableCell>
              <TableCell align="right">{row.night}</TableCell>
              <TableCell align="right">{row.humidity}</TableCell>
              <TableCell align="right">{row.pressure}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
