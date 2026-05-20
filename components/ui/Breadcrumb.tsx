import clsx from "clsx";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

interface BreadcrumbProps {
  BreadcrumbName: string;
  className?: string;
}

const Breadcrumb = ({ BreadcrumbName, className }: BreadcrumbProps) => {
  return (
    <div className={clsx("flex items-center gap-2", className)}>
      <Link href="/login" className="font-medium text-neutral-600 hover:underline">
        Home
      </Link>
      <ChevronRightIcon className="h-4 w-4 text-neutral-600" />
      <p className="font-medium text-neutral-600">{BreadcrumbName}</p>
    </div>
  );
};

export default Breadcrumb;
