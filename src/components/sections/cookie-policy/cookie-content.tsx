import styled from '@emotion/styled';
import DataService from 'src/components/content/content-data';
import { Table } from '@mantine/core';

const Section = styled.section``;

const CookiePolicyContent = () => (
  <Section>
    <Table horizontalSpacing="sm" verticalSpacing="md" fontSize="md">
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
            <td>{element.category}</td>
            <td>{element.purpose}</td>
            <td>{element.domain}</td>
            <td>{element.strorageperiod}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Section>
);
export default CookiePolicyContent;
