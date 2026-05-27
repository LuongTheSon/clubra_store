import clsx from "clsx";

export default function FillerCheckbox({
  title,
  list,
  className,
  toggleBrand,
  toggleType,
}: {
  title: string;
  list: { name: string; value: string }[];
  className?: string;
  toggleBrand?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleType?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className={clsx(`border border-neutral-400 p-[15px_20px]`, className)}>
      <h3 className="mb-4 text-xl text-neutral-900">{title}</h3>
      <ul className="flex flex-col gap-3">
        {list.map((category) => (
          <li key={category.value}>
            <label htmlFor={category.value} className="flex items-center gap-2">
              <input
                type="checkbox"
                id={category.value}
                name={category.value}
                value={category.value}
                onChange={title === "Types" ? toggleType : toggleBrand}
                className="h-5 w-5 rounded-none"
              />
              <span className="text-neutral-1100 text-xl">{category.name}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
