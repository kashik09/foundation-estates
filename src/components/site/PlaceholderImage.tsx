export function PlaceholderImage({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center border border-dashed border-black/20 bg-black/5 text-center ${className}`}
    >
      <span className="px-4 text-xs tracking-widest text-black/40 uppercase">
        {label}
      </span>
    </div>
  );
}
