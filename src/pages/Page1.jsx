import React from 'react';

const Page1 = ({
  title,
}) => {
  return (
    <div style={{ fontSize: '36px', display: 'flex', justifyContent: 'center' }}>
      {title?.attributes?.title}
    </div>
  )
};

export default Page1;
