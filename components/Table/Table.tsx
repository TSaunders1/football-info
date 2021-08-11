import React from 'react';
import { TableType } from '../../types';
import TableRow, { TableRowMobile } from '../TableRow/TableRow';
import useWindowWidth from './Table.hooks';

type Props = {
  table: TableType[];
};

const Table: React.FC<Props> = ({ table }) => {
  const width = useWindowWidth();
  if (width === undefined) {
    return <h1>Loading...</h1>;
  }
  if (width < 500) {
    return (
      <div data-testid="table" className="pa4">
        <div className="overflow-auto">
          <table className="f6 w-100 mw8 center" cellSpacing="0">
            <thead>
              <tr>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white"> </th>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white"> </th>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">P</th>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">W</th>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">D</th>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">L</th>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">GD</th>
                <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Pts</th>
              </tr>
            </thead>
            <tbody className="lh-copy">
              {table
                .sort((a, b) => a.position - b.position)
                .map((club) => (
                  <TableRowMobile club={club} key={club.team.id} />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  return (
    <div data-testid="table" className="pa4">
      <div className="overflow-auto">
        <table className="f6 w-100 mw8 center" cellSpacing="0">
          <thead>
            <tr>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white"> </th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white"> </th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Team</th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Played</th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Won</th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Drawn</th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Lost</th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">For</th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Against</th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">GD</th>
              <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Points</th>
            </tr>
          </thead>
          <tbody className="lh-copy">
            {table
              .sort((a, b) => a.position - b.position)
              .map((club) => (
                <TableRow club={club} key={club.team.id} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
