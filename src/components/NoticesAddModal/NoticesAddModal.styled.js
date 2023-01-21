import styled from 'styled-components';

export const Backdrop = styled.div`
  z-index: 1;
  background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow: auto;
  align-items: center;
  display: flex;
  padding: 20px 0px;
`;
