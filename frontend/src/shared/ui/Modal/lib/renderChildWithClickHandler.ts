import React, { ReactElement } from 'react';

export default function renderChildWithClickHandler(children: ReactElement<Clickable>, oursOnClick: () => void) {
  const userOnClick = children.props.onClick;

  const handleClick: React.MouseEventHandler<HTMLElement> = (e) => {
    userOnClick?.(e)
    if (e.defaultPrevented) return;
    oursOnClick()
  }

  return React.cloneElement(children, { onClick: handleClick })
}