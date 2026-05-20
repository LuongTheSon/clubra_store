import { Search } from "lucide-react";

interface SearchButtonProps {
  onToggle: () => void;
  disabled: boolean;
}

export default function SearchButton({ onToggle, disabled }: SearchButtonProps) {
  return (
    <button onClick={onToggle} disabled={disabled} className="cursor-pointer">
      {!disabled ? (
        <Search className="size-6 text-neutral-950" />
      ) : (
        <Search className="size-6 text-neutral-400" />
      )}
    </button>
  );
}
