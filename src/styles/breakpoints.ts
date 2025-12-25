export const breakpoints = {
  xs: '320px',
  sm: '768px',
  xm: '1024px',
  md: '1280px',
  lg: '1440px',
  xl: '1920px',
} as const;

type BreakpointKey = keyof typeof breakpoints;

const down = (key: BreakpointKey) => `@media (max-width: ${breakpoints[key]})`;
const up = (key: BreakpointKey) => `@media (min-width: ${breakpoints[key]})`;

export const media = { down, up };

export type { BreakpointKey };
