import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  Tooltip,
} from "@mui/material";

export default function TableComponent({
  headlines,
  rows,
  hasActions,
}: {
  headlines: Array<string>;
  rows: React.ReactNode;
  hasActions: boolean;
}) {
  return (
    <TableContainer component={Paper} elevation={3} sx={{ borderRadius: 4 }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#f9fafb" }}>
            {headlines.map((head: string, i: number) => (
              <TableCell sx={{ color: "#6b7280", fontWeight: 600 }} key={i}>
                {head}
              </TableCell>
            ))}
            {hasActions && (
              <TableCell sx={{ color: "#6b7280", fontWeight: 600 }}>
                Tools
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </Table>
    </TableContainer>
  );
}
