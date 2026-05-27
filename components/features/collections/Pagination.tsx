export default function Pagination({
  currentPage,
  totalPages,
  prevPage,
  nextPage,
  jumpToPage,
  getMiddlePages,
}: {
  currentPage: number;
  totalPages: number;
  prevPage: () => void;
  nextPage: () => void;
  jumpToPage: (page: number) => void;
  getMiddlePages: () => number[];
}) {
  return (
    <div className="mt-30 flex items-center justify-center gap-2">
      <button
        className="mx-2 cursor-pointer rounded-sm border border-neutral-400 bg-white p-[8px_14px]"
        disabled={currentPage === 1}
        onClick={prevPage}
      >
        Prev
      </button>

      <button
        className={`mx-2 w-[42px] cursor-pointer rounded-sm border border-neutral-400 bg-white p-[8px_14px] ${currentPage === 1 ? "bg-neutral-950! text-white! border-neutral-950!" : ""}`}
        onClick={() => jumpToPage(1)}
      >
        1
      </button>

      {currentPage > 3 && (
        <button
          className="mx-2 w-[42px] cursor-pointer rounded-sm border border-neutral-400 bg-white p-[8px_14px] disabled:opacity-50"
          disabled
        >
          ...
        </button>
      )}

      {getMiddlePages().map((page) => (
        <button
          key={page}
          className={`mx-2 w-[42px] cursor-pointer rounded-sm border border-neutral-400 bg-white p-[8px_14px] ${currentPage === page ? "bg-neutral-950! text-white! border-neutral-950!" : ""}`}
          onClick={() => jumpToPage(page)}
        >
          {page}
        </button>
      ))}

      {currentPage < totalPages - 2 && (
        <button
          className="mx-2 w-[42px] cursor-pointer rounded-sm border border-neutral-400 bg-white p-[8px_14px] disabled:opacity-50"
          disabled
        >
          ...
        </button>
      )}

      {totalPages > 1 && (
        <button
          className={`mx-2 w-[42px] cursor-pointer rounded-sm border border-neutral-400 bg-white p-[8px_14px] ${currentPage === totalPages ? "bg-neutral-950! text-white! border-neutral-950!" : ""}`}
          onClick={() => jumpToPage(totalPages)}
        >
          {totalPages}
        </button>
      )}

      <button
        className="mx-2 cursor-pointer rounded-sm border border-neutral-400 bg-white p-[8px_14px] disabled:opacity-50"
        disabled={currentPage === totalPages}
        onClick={nextPage}
      >
        Next
      </button>
    </div>
  );
}
