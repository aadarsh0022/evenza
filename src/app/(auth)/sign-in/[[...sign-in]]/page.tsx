import { SignIn } from '@clerk/nextjs';
import React from 'react';

const page = () => {
  return <SignIn routing="hash" />;
};

export default page;
