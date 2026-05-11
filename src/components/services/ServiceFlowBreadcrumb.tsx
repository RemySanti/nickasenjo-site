export type ServiceFlowCrumb = { label: string; href?: string };

export function ServiceFlowBreadcrumb({ items }: { items: ServiceFlowCrumb[] }) {
  return (
    <nav className="border-b border-black/10 bg-white/90 backdrop-blur-sm" aria-label="Breadcrumb">
      <div className="container mx-auto max-w-7xl px-6 lg:px-12 py-3 text-sm text-black/60">
        {items.map((item, i) => (
          <span key={`${item.label}-${i}`}>
            {i > 0 ? (
              <span className="mx-2" aria-hidden>
                /
              </span>
            ) : null}
            {item.href ? (
              <a href={item.href} className="hover:text-[#BC271C] transition-colors">
                {item.label}
              </a>
            ) : (
              <span className="text-black">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
