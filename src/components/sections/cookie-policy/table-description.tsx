import styled from '@emotion/styled';
import DataService from 'src/components/content/content-data';
import { Table } from '@mantine/core';

const SectionTable = styled.section``;

const TableDescription = () => (
  <SectionTable className="overflow-auto mx-auto max-w-4xl h-[400px]">
    <Table
      horizontalSpacing="sm"
      verticalSpacing="md"
      fontSize="md"
      highlightOnHover
      withBorder
      className="font-UbuntuRegular">
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
        {DataService.cookieContentData.map((element) => (
          <tr key={element.name}>
            <td>{element.name}</td>
            <td>{element.category}</td>
            <td>{element.purpose}</td>
            <td>{element.domain}</td>
            <td>{element.strorageperiod}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </SectionTable>
);
export default TableDescription;
