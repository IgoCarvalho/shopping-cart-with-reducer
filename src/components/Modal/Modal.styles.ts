import { Dialog as RichDialog } from '@reach/dialog';
import styled from 'styled-components';

export const Container = styled.div`
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2); */
`;

export const Dialog = styled(RichDialog)`
  /* background-color: var(--background);
  border-radius: 32px;
  z-index: 10;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */

  &[data-reach-dialog-content] {
    width: 100%;
    max-width: 600px;
    padding: 12px;
  }
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;

  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background-color: var(--foreground);
  border-radius: 12px;

  position: absolute;
  right: 12px;
  top: 12px;
`;
