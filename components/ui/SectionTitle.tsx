import clsx from "clsx";

export default function SectionTitle({
  title,
  firstTitle,
  className,
}: {
  title: string;
  firstTitle: string;
  className?: string;
}) {
  return (
    <h2 className={clsx("text-5xl font-semibold text-neutral-900", className)}>
      <span className="font-normal text-neutral-500">{firstTitle}</span>
      {title}
    </h2>
  );
}
