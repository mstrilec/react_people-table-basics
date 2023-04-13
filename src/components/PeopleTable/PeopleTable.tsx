import React from 'react';
import { Person } from '../../types/Person';
import { PersonInfo } from '../PersonInfo/PersonInfo';

interface Props {
  people: Person[],
}

export const PeopleTable: React.FC<Props> = ({ people }) => {
  return (
    <table
      data-cy="peopleTable"
      className="table is-striped is-hoverable is-narrow is-fullwidth"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Sex</th>
          <th>Born</th>
          <th>Died</th>
          <th>Mother</th>
          <th>Father</th>
        </tr>
      </thead>

      <tbody>
        {people.map(person => (
          <PersonInfo person={person} />
        ))}
      </tbody>
    </table>
  );
};