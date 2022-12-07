import React from 'react';

interface DropDownType {
  visibility: boolean;
  children: any;
}

function Dropdown({ visibility, children }: DropDownType) {
  return <article>{visibility && children}</article>;
}

export default Dropdown;
