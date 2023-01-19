import styled from '@emotion/styled';
import { createStyles } from '@mantine/styles';
import { FC } from 'react';
import Description from 'src/components/modules/description';

const useStyles = createStyles((theme) => ({
  root: {
    color: theme.colorScheme === 'dark' ? 'white' : ''
  }
}));
interface IDescriptionField {
  content: string;
}
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
  }
  p {
    font-size: 14px;
    font-family: 'Ubuntu-Regular';
  }
`;

const DescriptionField: FC<IDescriptionField> = ({ ...props }) => {
  const { classes } = useStyles();
  const { content } = props;
  return (
    <Content
      className={`${classes.root} text-center mx-auto max-w-xl`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};
export default DescriptionField;
