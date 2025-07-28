"use client"

import styled from "styled-components"

interface ContainerProps {
  backgroundImage?: string
}

export const Container = styled.div<ContainerProps>`
  height: 100vh;
  scroll-snap-align: start;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: ${(props) => (props.backgroundImage ? `url(${props.backgroundImage})` : "none")};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: -1;
  }
`
