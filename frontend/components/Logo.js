import * as React from "react";
import { useTheme } from "emotion-theming";
import styled from "@emotion/styled";

export const Logo = ({ size }) => {
  const width = size ? size : 150;
  const height = Math.round(width / 3);
  const theme = useTheme();
  const StyledWrapper = styled.div`
    position: relative;
    &:after {
      content: "";
      position: absolute;
      top: -1px;
      bottom: -1px;
      left: -1px;
      right: -1px;
      display: block;
    }
  `;
  return (
    <StyledWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="320"
        height="100"
        viewBox="0 0 320 100"
        overflow="hidden"
        style={{
          width,
          height,
        }}
      >
        <path
          fill="#fff"
          fillOpacity="0"
          stroke={theme.secondary}
          strokeWidth="15"
          d="M-2 0H318V100H-2z"
        />
        <g stroke={theme.secondary} strokeOpacity="null" strokeWidth="0">
          <text
            x="15"
            y="29"
            fill="#fff"
            fillOpacity="null"
            fontFamily="'Courier New', Courier, monospace"
            fontSize="8"
            fontWeight="bold"
            textAnchor="start"
            transform="matrix(4.26034 0 0 6.48117 -38.788 -121.906)"
            xmlSpace="preserve"
          >
            illetid
          </text>
          <path
            fill={theme.secondary}
            d="M190.5 -31.5H337.5V168.5H190.5z"
          ></path>
          <text
            x="204.304"
            y="65"
            fill="#fff"
            fontFamily="'Courier New', Courier, monospace"
            fontSize="29"
            fontStyle="italic"
            fontWeight="bold"
            textAnchor="start"
            transform="matrix(1.57937 0 0 1.51515 -127.171 -35.803)"
            xmlSpace="preserve"
          >
            .DEV
          </text>
        </g>
      </svg>
    </StyledWrapper>
  );
};
