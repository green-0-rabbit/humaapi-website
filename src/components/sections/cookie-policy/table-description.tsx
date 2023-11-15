import styled from '@emotion/styled';
import { Table } from '@mantine/core';
import { FC } from 'react';
import { IListCookie } from 'src/services/cookie-service';

interface ITableDescription {
  cookieList: IListCookie[];
}
const SectionTable = styled.section``;

const TableDescription: FC<ITableDescription> = (props) => {
  const { cookieList } = props;
  const { id, ...rest } = cookieList[0];
  const title = Object.keys(rest);
  const capitalizeFirstLetter = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

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
            {title.map((item) => (
              <th key={item}>{capitalizeFirstLetter(item)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cookieList.map((element) => (
            <tr key={element.id}>
              <td>{element.name}</td>
              <td>{element.category}</td>
              <td>{element.purpose}</td>
              <td>{element.domain}</td>
              <td>{element.storage}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </SectionTable>
  );
};

export default TableDescription;
