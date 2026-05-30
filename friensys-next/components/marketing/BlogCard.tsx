import Link from "next/link";

interface BlogCardProps {
  post: {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    tags: string[];
    url: string;
  };
}

export function BlogCard({ post }: BlogCardProps) {
  const date = new Date(post.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link
      href={post.url}
      className="group block rounded-[var(--radius-lg)] border border-border-subtle bg-bg-elevated p-6 shadow-[0_1px_2px_rgba(27,23,20,.05),0_4px_12px_-6px_rgba(27,23,20,.08)] transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong"
    >
      <div className="mb-3 flex flex-wrap gap-2">
        {post.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border-subtle bg-bg-overlay px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="mb-2 font-display font-semibold leading-snug text-text-primary transition-colors group-hover:text-accent-primary">
        {post.title}
      </h3>
      <p className="mb-4 line-clamp-2 text-sm text-text-secondary">{post.description}</p>
      <div className="flex items-center justify-between font-mono text-[11px] text-text-muted">
        <span>{post.author}</span>
        <time dateTime={post.date}>{date}</time>
      </div>
    </Link>
  );
}
