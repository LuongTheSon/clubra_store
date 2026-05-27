"use client";
import { useSearchStore } from "@/lib/store/searchStore";
import { SearchIcon, XIcon } from "lucide-react";

export default function Search() {
  const { search, showSearch, setSearch, setShowSearch } = useSearchStore();
  return showSearch ? (
    <div className="inner mb-10!">
      <div className="flex items-center justify-center gap-4">
        <div className="group relative w-[600px]">
          <input
            type="text"
            placeholder="Search for products"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="w-full rounded-full border border-neutral-400 p-[10px_20px]"
          />
          <SearchIcon className="absolute right-4 top-1/2 size-6 -translate-y-1/2 text-neutral-400" />
        </div>
        <div
          className="group flex h-9 w-9 cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:bg-neutral-950"
          onClick={() => setShowSearch(false)}
        >
          <XIcon className="size-6 transition-colors duration-300 group-hover:text-white" />
        </div>
      </div>
    </div>
  ) : null;
}
