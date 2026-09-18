// Minimal signal-wave decoration for the hero section.
// Inspired by the vibration sensor used in the accident-detection project.

export default function SignalWave({ className = "" }) {
  const wavePath =
    "M0 80 H240 L260 30 L280 130 L300 60 L320 80 H800";

  return (
    <svg
      viewBox="0 0 800 160"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      {/* Subtle background signal */}
      <path
        d={wavePath}
        stroke="#CBD5E1"
        strokeWidth="1.5"
        opacity="0.7"
      />

      {/* Main blue signal */}
      <path
        d={wavePath}
        stroke="#2563EB"
        strokeWidth="1.5"
        opacity="0.65"
        className="animate-pulse-line"
        style={{
          strokeDasharray: 900,
          strokeDashoffset: 0,
        }}
      />
    </svg>
  );
}