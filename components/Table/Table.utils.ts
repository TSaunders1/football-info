import { TableType } from '../../types';

const sortTable = (table: TableType[]): TableType[] =>
  table.sort((a, b) => a.position - b.position);

export default sortTable;
