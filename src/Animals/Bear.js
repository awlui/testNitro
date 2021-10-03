import React from "react";
import Svg, { Ellipse, Path } from "svgs";

import { animalSize } from "../constants/board";

const Bear = (props) => (
  <Svg height={animalSize} width={animalSize} viewBox="0 0 64 64" {...props}>
    <Path
      fill="#9E6C49"
      d="M62 14c0 6.627-5.375 12-11.998 12C43.373 26 38 20.627 38 14S43.373 2 50.002 2C56.625 2 62 7.373 62 14z"
    />
    <Ellipse fill="#D6A57C" cx={50.002} cy={14} rx={7.215} ry={7.246} />
    <Path
      fill="#9E6C49"
      d="M26 14c0 6.627-5.375 12-11.998 12C7.373 26 2 20.627 2 14S7.373 2 14.002 2C20.625 2 26 7.373 26 14z"
    />
    <Ellipse fill="#D6A57C" cx={14.002} cy={14} rx={7.215} ry={7.246} />
    <Path
      fill="#9E6C49"
      d="M57.798 38.309s.507-1.719 4.202-.75c0 0-1.779-4.369-4.299-5.164 0 0 1.822-1.024 3.395-.557-.047-.047-7.883-24.163-29.095-24.225C10.885 7.551 2.863 31.884 2.904 31.838c1.572-.467 3.395.557 3.395.557C3.779 33.189 2 37.559 2 37.559c3.695-.969 4.202.75 4.202.75C3.737 38.893 3.07 40.6 3.07 40.6S9.956 62 32 62s28.93-21.4 28.93-21.4-.667-1.707-3.132-2.291z"
    />
    <Path
      fill="#9E6C49"
      d="M14.588 12.5c-1.905-1.438-4.969-.955-4.969-.955 1.491 1.378 2.188 3.022 2.188 3.022-1.732.394-2.918 1.737-2.918 1.737 1.602.542 2.303 2.331 2.303 2.331l7.697-6.178c-1.506-2.41-4.414-2.527-4.414-2.527.269 1.278.113 2.57.113 2.57zm40.522 3.805s-1.187-1.345-2.918-1.74c0 0 .697-1.643 2.188-3.021 0 0-3.063-.481-4.969.957 0 0-.156-1.29.11-2.571 0 0-2.908.119-4.412 2.529l7.697 6.175c.004-.001.704-1.79 2.304-2.329z"
    />
    <Ellipse fill="#1A1626" cx={21.806} cy={31.743} rx={3.5} ry={4.5} />
    <Path
      fill="#FFF"
      d="M21.165 29.72c0 1.5-1.75 1.5-1.75 0s1.75-1.5 1.75 0z"
    />
    <Ellipse fill="#1A1626" cx={42.194} cy={31.743} rx={3.5} ry={4.5} />
    <Path
      fill="#FFF"
      d="M41.556 29.72c0 1.5-1.75 1.5-1.75 0s1.75-1.5 1.75 0z"
    />
    <Path
      fill="#D6A57C"
      d="M19.958 49.535c0-4.119 5.089-11.359 11.99-11.359 6.9 0 11.99 7.24 11.99 11.359 0 3.305-3.76 10.627-11.99 10.627-8.231 0-11.99-7.322-11.99-10.627z"
    />
    <Path
      fill="#302C3B"
      d="M31.998 50.93c-1.751 6.826-7.822 3.479-8.55 2.309 0 1.947 4.883 5.375 8.55 1.916 3.669 3.459 8.552.031 8.552-1.916-.731 1.169-6.801 4.517-8.552-2.309z"
    />
    <Path
      fill="#302C3B"
      d="M24.122 47.971c0-3.141 3.505-3.744 7.827-3.744 4.321 0 7.825.604 7.825 3.744 0 2.498-6.229 4.713-7.825 4.713-1.598 0-7.827-2.215-7.827-4.713z"
    />
    <Path
      fill="#4E5E67"
      d="M25.155 48.061c0-2.561 2.947-3.053 6.586-3.053 4.847 0-6.586 6.844-6.586 3.053z"
    />
  </Svg>
);

export default Bear;
