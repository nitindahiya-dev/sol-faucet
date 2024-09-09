import React from 'react';
import Image from 'next/image';  // Correct import for the Image component
import solanaLogo from '@/../public/solanaLogo.svg';  // Import your image

const Heading = () => {
  return (
    
      <Image src={solanaLogo} alt="Solana Logo" width={250} height={250} className='mb-10' />
    
  );
}

export default Heading;
