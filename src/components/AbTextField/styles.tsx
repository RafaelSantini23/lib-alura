import styled from 'styled-components';

export const TextField = styled.input.attrs({
  type: 'text',
})`
  outline: none;
  border: 1px solid #002f52;
  padding: 8px 14px;
  border-radius: 30px;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 400;
  width: 100%;
  box-sizing: border-box;

  ::placeholder {
    opacity: 0.6;
  }
`;

export const Field = styled.label`
  margin-left: 16px;
  margin-bottom: 8px;
  font-family: sans-serif;
  font-weight: 700;
  color: #012f52;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;
