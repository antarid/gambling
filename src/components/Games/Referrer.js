import React from 'react';
import styled from 'styled-components';

export default ({referrer, onReferrerChange}) => (
  <StyledInput
    placeholder="referrer address"
    value={referrer}
    onChange={onReferrerChange}
  />
);

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid #999999;
  border-radius: 10px;
  padding: 20px 30px;
  margin: 10px 0;
`;
