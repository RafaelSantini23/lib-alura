import styled from 'styled-components';

export const SectionEstilizado = styled.section<{ selecionado?: boolean }>`
  width: 194px;
  height: 88px;
  background: ${({ selecionado }) =>
    selecionado
      ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)'
      : '#FFFF'};
  border: 1px solid;
  border-color: ${({ selecionado }) => (selecionado ? '#002F52' : '#EB9B00')};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
  font-family: sans-serif;
  cursor: pointer;

  header {
    color: ${({ selecionado }) => (selecionado ? '#ffff' : '#EB9B00')};
    font-size: 12px;
    font-weight: 400;
  }

  strong {
    color: ${({ selecionado }) => (selecionado ? '#ffff' : '#EB9B00')};
    font-size: 16px;
    font-weight: 700;
  }

  footer {
    color: ${({ selecionado }) =>
      selecionado ? '#ffff' : 'rgba(0, 0, 0, 0.54)'};
    font-size: 12px;
    font-weight: 400;
  }
`;
