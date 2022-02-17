const Logo = ({ className = "", ...props }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="32" rx="16" fill="#047857" />
    <path d="M18.5 24L1.5 24" stroke="white" strokeWidth="2" />
    <path d="M29.5 8L14 8" stroke="white" strokeWidth="2" />
    <line
      y1="-1"
      x2="18.0942"
      y2="-1"
      transform="matrix(0.415206 -0.909728 0.909728 0.415204 8.47314 24.2705)"
      stroke="white"
      strokeWidth="2"
    />
    <path d="M17.6466 24.1787L24.2891 8.047" stroke="white" strokeWidth="2" />
  </svg>
);

export default Logo;
