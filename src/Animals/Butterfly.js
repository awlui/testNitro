import React from "react";
import Svg, { Path } from "svgs";

import { animalSize } from "../constants/board";

const Butterfly = (props) => (
  <Svg height={animalSize} width={animalSize} viewBox="0 0 64 64" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#302C3B"
      d="M32 25.5C16.598 4.595-3.875.867 3.583 12.549c8.244 12.913-2.18 18.422 6.967 19.996C.549 44.298 16.167 65.639 25.06 55.214c4.776-5.598 3.432-12.4 6.94-16.456 3.508 4.056 2.163 10.858 6.939 16.456 8.893 10.425 24.512-10.916 14.511-22.669 9.146-1.573-1.277-7.083 6.967-19.996C67.875.867 47.402 4.595 32 25.5z"
    />
    <Path
      fill="#FFE8BB"
      d="M53.481 12.893c-1.887 2.411-4.487 1.784-4.865 0-.595-2.81 6.312-1.851 4.865 0zm1.909-2.646c.344-1.996 2.055-2.446 2.833-1.525 1.225 1.448-3.099 3.057-2.833 1.525zm-1.089 3.034c1.743-1.026 3.192-.009 2.993 1.181-.312 1.872-4.331-.392-2.993-1.181z"
    />
    <Path
      fill="#C21413"
      d="M54.778 18.683c.608-.477.724-1.396.69-2.042-.062-1.191-4.531-1.289-4.531-1.289s-1.094 1.536-2.312 3.016c2.95.55 5.37.932 6.153.315z"
    />
    <Path
      fill="#D47706"
      d="M54.871 20.304c-2.789-.243-7.081-.721-7.081-.721-1.104 1.052-3.372 2.967-3.372 2.967 3.326 1.192 6.991 2.292 9.917 2.49.98.066 1.811-4.627.536-4.736z"
    />
    <Path
      fill="#C21413"
      d="M48.963 15.367s-3.151-.498-4.585.386c-.773.477-8.229 7.55-10.564 9.874v1.968c4.869-3.001 11.102-6.488 15.149-12.228z"
    />
    <Path
      fill="#F59E01"
      d="M54.459 27.199c-2.514-1.066-11.103-3.895-11.727-3.617-1.354.604-8.919 4.721-8.919 4.721v1.248c14.152-1.271 19.563 1.605 20.06.971.456-.583 1.49-2.94.586-3.323z"
    />
    <Path
      fill="#C21413"
      d="M9.221 18.683c-.608-.477-.724-1.396-.69-2.042.062-1.191 4.531-1.289 4.531-1.289s1.094 1.536 2.312 3.016c-2.95.55-5.369.932-6.153.315z"
    />
    <Path
      fill="#D47706"
      d="M9.128 20.304c2.789-.243 7.082-.721 7.082-.721 1.103 1.052 3.372 2.967 3.372 2.967-3.326 1.192-6.991 2.292-9.917 2.49-.981.066-1.811-4.627-.537-4.736z"
    />
    <Path
      fill="#C21413"
      d="M15.037 15.367s3.151-.498 4.584.386c.774.477 8.229 7.55 10.564 9.874v1.968c-4.868-3.001-11.102-6.488-15.148-12.228z"
    />
    <Path
      fill="#F59E01"
      d="M9.541 27.199c2.513-1.066 11.102-3.895 11.727-3.617 1.354.604 8.918 4.721 8.918 4.721v1.248c-14.152-1.271-19.562 1.605-20.059.971-.456-.583-1.49-2.94-.586-3.323z"
    />
    <Path
      fill="#FFE8BB"
      d="M10.519 12.893c1.887 2.411 4.487 1.784 4.865 0 .595-2.81-6.312-1.851-4.865 0zM8.61 10.247c-.343-1.996-2.055-2.446-2.833-1.525-1.225 1.448 3.098 3.057 2.833 1.525zm1.089 3.034c-1.743-1.026-3.192-.009-2.993 1.181.312 1.872 4.331-.392 2.993-1.181z"
    />
    <Path
      fill="#F9B700"
      d="M28.259 42.853c-.529.749-1.386-2.826-3.178-3.728-.773-.391-.938-1.067 7.441-7.101v1c-2.837 1.913-3.047 8.102-4.263 9.829zm-14.61-10.462c.915-.36 9.66-.62 9.66-.62-2.683 5.312-9.969 4.185-13.295 6.368-.321-1.688 2.527-5.311 3.635-5.748zm17.578-.525c-11.058 7.184-10.223 10.298-13.17 8.312-.442-.298 3.169-4.092 6.771-7.925 1.122-1.193 6.399-.387 6.399-.387z"
    />
    <Path
      fill="#FFE12C"
      d="M19.399 42.175c.243 1.004-5.37 4.707-6.257 9.003-7.38-7.454 5.678-11.391 6.257-9.003z"
    />
    <Path
      fill="#FFE12C"
      d="M18.82 37.083s-1.848 2.975-2.901 3.292c-4.053 1.215-5.722 4.329-5.722 4.329-3.138-5.8 4.868-7.157 8.623-7.621zm4.776 2.288c7.152 5.904 1.93 11.575-.874 14.199-13.11-3.406-4.586-6.001.874-14.199z"
    />
    <Path
      fill="#FFE8BB"
      d="M17.01 53.307c-.336-1.95-2.006-2.389-2.766-1.489-1.196 1.413 3.025 2.984 2.766 1.489zm4.065.735c-1.701-1-3.116-.009-2.922 1.153.305 1.828 4.229-.382 2.922-1.153z"
    />
    <Path
      fill="#F9B700"
      d="M35.741 42.853c.529.749 1.386-2.826 3.178-3.728.773-.391.938-1.067-7.441-7.101v1c2.837 1.913 3.047 8.102 4.263 9.829zm14.61-10.462c-.915-.36-9.66-.62-9.66-.62 2.684 5.312 9.969 4.185 13.296 6.368.32-1.688-2.528-5.311-3.636-5.748zm-17.578-.525c11.057 7.184 10.222 10.298 13.169 8.312.443-.298-3.168-4.092-6.771-7.925-1.121-1.193-6.398-.387-6.398-.387z"
    />
    <Path
      fill="#FFE12C"
      d="M44.601 42.175c-.243 1.004 5.37 4.707 6.258 9.003 7.379-7.454-5.679-11.391-6.258-9.003z"
    />
    <Path
      fill="#FFE12C"
      d="M45.18 37.083s1.849 2.975 2.901 3.292c4.054 1.215 5.722 4.329 5.722 4.329 3.138-5.8-4.868-7.157-8.623-7.621zm-4.776 2.288c-7.152 5.904-1.93 11.575.874 14.199 13.11-3.406 4.586-6.001-.874-14.199z"
    />
    <Path
      fill="#FFE8BB"
      d="M46.99 53.307c.336-1.95 2.006-2.389 2.766-1.489 1.196 1.413-3.026 2.984-2.766 1.489zm-4.065.735c1.701-1 3.115-.009 2.922 1.153-.305 1.828-4.229-.382-2.922-1.153z"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#302C3B"
      d="M38.723 10.757C33.313 9.653 35.055 22.121 32 22.121c-3.055 0-1.314-12.468-6.723-11.364-1.104.225-1.02 1.581 1.971 1.181 1.147-.153 3.482 10.433 2.663 12.171-1.874 3.978-3.021 10.81.573 19.173C31.78 46.299 28.638 53.576 32 53.576c3.361 0 .22-7.277 1.515-10.294 3.595-8.363 2.447-15.195.573-19.173-.819-1.738 1.517-12.325 2.663-12.171 2.991.399 3.075-.956 1.972-1.181z"
    />
  </Svg>
);

export default Butterfly;
