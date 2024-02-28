import React from 'react';
import tw, { styled } from 'twin.macro';

import { useHelloWorld } from '@/hooks/useHelloWorld';
import { add } from '@/utils';

const HelloWorld = () => {
  return <Wrapper>HelloWorld</Wrapper>;
};

export default HelloWorld;

const Wrapper = styled.div`
  ${tw``};
`;
