export default function SectionTitle({ title, firstTitle }: { title: string; firstTitle: string }) {
  return (
    <h2 className="text-5xl font-semibold text-neutral-900">
      <span className="font-normal text-neutral-500">{firstTitle}</span>
      {title}
    </h2>
  );
}
