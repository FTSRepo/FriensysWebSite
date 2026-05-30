import { AuroraButton } from "@/components/ui/AuroraButton";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-text-muted">
        404
      </p>
      <h1 className="font-display text-4xl font-semibold text-text-primary">Page not found</h1>
      <p className="max-w-md text-text-secondary">
        The page you&apos;re looking for doesn&apos;t exist. It may have moved — check
        the navigation or go back home.
      </p>
      <div className="flex flex-wrap gap-3">
        <AuroraButton href="/">Go home</AuroraButton>
        <AuroraButton href="/school-erp" variant="outline">
          See School ERP
        </AuroraButton>
      </div>
    </div>
  );
}
