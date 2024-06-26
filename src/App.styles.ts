import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const BackgroundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #000;
  min-height: 100%;
  font-family: sans-serif;
  --dur: 1s;
`;
export const CardWrapper = styled.div`
  width: 327px;
  margin: 0 auto;
  background: #1f1f1f;
  border-radius: 12px;
  padding: 24px;
  animation-name: slideup;
  animation-duration: var(--dur);
  animation-timing-function: ease-in;

  @keyframes slideup {
    from {
      transform: translateY(15vh);
    }
    to {
      transform: none;
    }
  }
`;

const imageFadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;

export const ImagePlaceHolder = styled.img`
  width: 88px;
  height: 88px;
  margin: 0 auto;
  background-color: #666;
  border-radius: 50%;
  animation-name: ${imageFadeIn};
  animation-duration: 0.18s;
  animation-delay: var(--dur);
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  opacity: 0;
`;
