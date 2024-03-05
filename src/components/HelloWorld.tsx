import styled from '@emotion/styled';
import React from 'react';

export const HelloWorld = () => {
  return <Wrapper>HelloWorld</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  width: fit-content;
  padding: 4px 8px;
  border: 1px solid black;
  border-radius: 4px;
`;
