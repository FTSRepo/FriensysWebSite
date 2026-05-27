import Link from "next/link";

interface MegaMenuProps {
  items: Array<{ label: string; href: string; description: string }>;
  onClose: () => void;
}

export function MegaMenu({ items, onClose }: MegaMenuProps) {
  return (
    <div className="absolute top-full left-0 mt-2 w-[520px] rounded-[var(--radius-lg)] border border-border-subtle bg-bg-elevated shadow-2xl p-3 grid grid-cols-2 gap-1">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClose}
          className="group flex flex-col gap-0.5 rounded-[var(--radius-md)] px-3 py-2.5 hover:bg-bg-overlay transition-colors"
        >
          <span className="text-sm font-medium text-text-primary group-hover:text-accent-primary transition-colors">
            {item.label}
          </span>
          <span className="text-xs text-text-muted leading-snug">
            {item.description}
          </span>
        </Link>
      ))}
    </div>
  );
}
