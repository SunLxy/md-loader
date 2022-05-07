import StackBlitz, { StackBlitzProps } from '@uiw/react-stackblitz';
const Code = (props: StackBlitzProps) => {
  return (
    <div className="preview-button-ccs">
      <StackBlitz {...props}>
        <svg
          className="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="7514"
          width="18"
          height="18"
        >
          <path
            d="M271.973 508.68l-0.467 0.516c-15.161 17.134-6.178 44.443 16.396 49.075l162.817 33.411-147.137 354.746c-12.63 30.449 26.067 55.938 49.027 32.294l410.916-423.155 0.486-0.511c15.79-16.999 6.974-44.925-15.926-49.613l-152.962-31.315L718.788 109.69c10.37-30.56-28.32-53.605-50.226-29.915L271.972 508.68z m345.075-285.15l-89.404 263.48-0.215 0.657c-5.298 16.85 5.123 34.684 22.518 38.245l132.675 27.162L418.71 824.845l101.086-243.71 0.25-0.621c6.7-17.199-3.668-36.397-21.844-40.127l-146.367-30.033L617.048 223.53z"
            fill="#333333"
            p-id="7515"
          ></path>
        </svg>
      </StackBlitz>
    </div>
  );
};
export default Code;
