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
      className="group block rounded-[var(--radius-lg)] border border-border-subtle bg-bg-elevated p-6 transition-colors hover:border-border-strong"
    >
      <div className="mb-3 flex flex-wrap gap-2">
        {post.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-bg-overlay px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="mb-2 font-semibold leading-snug text-text-primary transition-colors group-hover:text-accent-primary">
        {post.title}
      </h3>
      <p className="mb-4 line-clamp-2 text-sm text-text-secondary">{post.description}</p>
      <div className="flex items-center justify-between text-xs text-text-muted">
        <span>{post.author}</span>
        <time dateTime={post.date}>{date}</time>
      </div>
    </Link>
  );
}
