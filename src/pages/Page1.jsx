import React from 'react';

const Page1 = ({
  title,
}) => {
  return (
    <div style={{ fontSize: '36px', display: 'flex', justifyContent: 'center' }}>
      {/*{title?.attributes?.title}*/}
      {title}
      <div>
        Maksim Tsoy
      </div>
    </div>
  )
};

export default Page1;
