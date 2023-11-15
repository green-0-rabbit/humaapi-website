import styled from '@emotion/styled';
import { useLocalStorage } from '@mantine/hooks';
import { FC } from 'react';

interface IDescriptionField {
  content: string;
}

const DescriptionField: FC<IDescriptionField> = ({ ...props }) => {
  const { content } = props;
  const [localValue, setLocalValue] = useLocalStorage({
    key: 'humaapi-color-scheme'
  });
  const Content = styled.div`
    a {
      color: #ea6f66;
    }
    a:hover {
      text-decoration: underline;
    }
    p {
      font-size: 14px;
    }

    h2 {
      font-size: 36px;
      line-height: 36px;
      font-family: 'Ubuntu-Bold';
      color: ${localValue === 'dark' ? 'white' : 'black'};
    }
    p {
      font-size: 14px;
      font-family: 'Ubuntu-Regular';
    }
  `;
  return (
    <Content
      className="mx-auto max-w-xl px-4 text-left md:text-center"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};
export default DescriptionField;
