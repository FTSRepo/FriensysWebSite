import Link from "next/link";

interface MegaMenuProps {
  items: Array<{ label: string; href: string; description: string }>;
  onClose: () => void;
}

export function MegaMenu({ items, onClose }: MegaMenuProps) {
  return (
    <div className="absolute top-full left-0 mt-2 w-[520px] rounded-[var(--radius-lg)] border border-border-subtle bg-bg-overlay shadow-[0_8px_20px_-10px_rgba(27,23,20,0.12),0_32px_60px_-28px_rgba(27,23,20,0.14)] p-3 grid grid-cols-2 gap-1">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClose}
          className="group flex flex-col gap-0.5 rounded-[var(--radius-md)] px-3 py-2.5 hover:bg-bg-elevated transition-colors"
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
