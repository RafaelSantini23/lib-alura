import styled from 'styled-components';

const cssButton = {
  'border-radius': '50%',
  width: '25px',
  height: '25px',
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  outline: 'none',
  border: 'none',
  background: '#012f52',
  padding: '8px',
  color: '#fff',
  'font-family': 'sans-serif',
  'font-size': '18px',
  'font-weight': 700,
  'box-shadow': '0px 2px 4px rgba(0, 0, 0, 0.25);',
  cursor: 'pointer',
};

export const Container = styled.div`
  width: fit-content;
  text-align: center;
`;

export const Title = styled.span`
  display: block;
  font-weight: 700;
  margin-bottom: 10px;
  font-family: sans-serif;
  margin-left: 2px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Number = styled.span`
  color: #2a5674;
  font-family: sans-serif;
  margin: 0 14px;
`;
export const ButtonStyle = styled.button`
  ${{ ...cssButton }}
`;
