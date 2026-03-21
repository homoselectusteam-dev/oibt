import Link from 'next/link';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 bg-gray-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              {i > 0 && <span className="text-gray-300">/</span>}
              {item.href && i < items.length - 1 ? (
                <Link href={item.href} className="hover:text-primary-700 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
