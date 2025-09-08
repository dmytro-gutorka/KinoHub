export const composeHandlers =
  <E extends React.SyntheticEvent>(user?: (e: E) => void, ours?: (e: E) => void) =>
  (e: E) => {
    user?.(e);
    if (e.defaultPrevented) return;
    ours?.(e);
  };
