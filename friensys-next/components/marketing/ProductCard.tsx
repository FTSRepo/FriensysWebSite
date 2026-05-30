import Link from "next/link";
import { DynIcon } from "@/components/ui/DynIcon";
import type { Product } from "@/lib/content";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block rounded-[var(--radius-lg)] border border-border-subtle bg-bg-elevated p-6 shadow-[0_1px_2px_rgba(27,23,20,.05),0_4px_12px_-6px_rgba(27,23,20,.08)] transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_4px_16px_-6px_rgba(27,23,20,.14)]"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[var(--radius-sm)] border border-border-subtle bg-bg-overlay text-accent-primary">
        <DynIcon name={product.icon} className="h-6 w-6" />
      </div>
      <h3 className="mb-1 font-display font-semibold text-text-primary transition-colors group-hover:text-accent-primary">
        {product.name}
      </h3>
      <p className="text-sm leading-relaxed text-text-secondary">{product.tagline}</p>
      <ul className="mt-4 space-y-1">
        {product.features.slice(0, 3).map((f) => (
          <li key={f} className="flex items-center gap-2 text-xs text-text-muted">
            <span className="h-1 w-1 shrink-0 rounded-full bg-accent-primary" />
            {f}
          </li>
        ))}
      </ul>
    </Link>
  );
}
