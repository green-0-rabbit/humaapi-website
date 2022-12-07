import  { useRouter } from 'next/router';
import DataService from '../content/content-data';

const GetDetailData = () => {
const route = useRouter()
    const { id } = route.query;
    const checkId = DataService.sendIdData.find(
      (el: { id: string; data: JSX.Element }) => el.id === id
    );
    return checkId?.data;
  };
  export default GetDetailData