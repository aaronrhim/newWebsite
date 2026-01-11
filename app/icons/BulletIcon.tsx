export default function BulletIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="4" cy="4" r="3" fill="currentColor" />
    </svg>
  );
}
