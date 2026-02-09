import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
  
  @media (max-width: 768px) {
    padding: 0 var(--spacing-3);
  }
`;

export default Container;
