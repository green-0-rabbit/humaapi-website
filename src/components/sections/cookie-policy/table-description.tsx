import styled from '@emotion/styled';
import { Table } from '@mantine/core';
import { ICookieManagementData } from 'src/services/cookie-service';
import { FC } from 'react';

interface ITableDescription {
  cookiesData: ICookieManagementData[];
}
const SectionTable = styled.section``;

const TableDescription: FC<ITableDescription> = (props) => {
  const { cookiesData } = props;

  return (
    <SectionTable className="mx-auto h-[400px] max-w-4xl overflow-auto">
      <Table
        horizontalSpacing="sm"
        verticalSpacing="md"
        fontSize="md"
        highlightOnHover
        withBorder
        sx={{ fontFamily: 'Ubuntu-Regular' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Purpose</th>
            <th>Domain</th>
            <th>Strorage Period</th>
          </tr>
        </thead>
        <tbody>
          {cookiesData.map((element) => (
            <tr key={element.id}>
              <td>{element.name}</td>
              <td>{element.category}</td>
              <td>{element.purpose}</td>
              <td>{element.domain}</td>
              <td>{element.stroragePeriod}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </SectionTable>
  );
};

export default TableDescription;
