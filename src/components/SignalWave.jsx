// Signature hero element: a steady signal line that spikes once and
// recovers — a quiet nod to the vibration-sensor / accident-alert theme
// that anchors this portfolio's flagship project, rendered as ambient
// background art rather than a literal chart.
export default function SignalWave({ className = "" }) {
  return (
    <svg
      viewBox="0 0 800 160"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M0 80 H240 L260 30 L280 130 L300 60 L320 80 H800"
        stroke="#2E8A80"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <path
        d="M0 80 H240 L260 30 L280 130 L300 60 L320 80 H800"
        stroke="#4FD1C5"
        strokeWidth="1.5"
        className="animate-pulse-line"
        style={{
          strokeDasharray: 900,
          strokeDashoffset: 0,
        }}
      />
    </svg>
  );
}
