import Page1 from '@/pages/Page1';
import axios from 'axios';

const Home = ({
  title = {},
}) => {
  return (
    <>
      <Page1 title={title} />
    </>
  )
}

export async function getServerSideProps() {
  try {
    const response = await axios.get('http://test-strapi.tendee.uz/api/title');
    console.log(response);
    return {
      props: {
        title: response.data.data,
      }
    }
  } catch (e) {
    console.log(e);
    return {
      props: {
        title: {},
      }
    }
  }
}

export default Home;
