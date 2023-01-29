import styled from 'styled-components';

type TCardContainer = {
  width?: string | number;
  height?: string | number;
};

export const CardContainer = styled.div<TCardContainer>`
  background-color: #ffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: ${props => props.width || '551px'};
  height: ${props => props.height || '374px'};
`;
