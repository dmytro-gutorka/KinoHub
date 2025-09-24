import { SVGIcon } from '@shared/types/generalTypes';

export default function ColorfulOutlinedLinkedinIcon({
  width = 24,
  height = 24,
  color = '#0077B5',
}: SVGIcon) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="LinkedIn-like icon"
    >
      <path
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M23,31H9c-4.4,0-8-3.6-8-8V9c0-4.4,3.6-8,8-8h14c4.4,0,8,3.6,8,8v14C31,27.4,27.4,31,23,31z"
      />
      <rect
        x="7"
        y="13"
        width="4"
        height="12"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
      />
      <path
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M20.5,13c-0.9,0-1.8,0.3-2.5,0.8V13h-4v12h2h2v-6.5c0-0.8,0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5V25h4v-7.5 C25,15,23,13,20.5,13z"
      />
      <circle
        cx="9"
        cy="8"
        r="2"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
      />
    </svg>
  );
}
