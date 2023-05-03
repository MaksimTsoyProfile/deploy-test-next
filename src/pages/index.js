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
    // const response = await axios.get('http://192.168.1.192:1337/api/title');
    return {
      props: {
        title: "Deploy test"
        // title: response.data.data,
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
