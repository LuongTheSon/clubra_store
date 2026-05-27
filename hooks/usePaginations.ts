"use client";

import { useState, useEffect } from "react";

export interface PaginationResult<T> {
  items: T[];
  totalPages: number;
}

interface UsePaginationReturn<T> {
  currentData: T[];
  currentPage: number;
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
  jumpToPage: (page: number) => void;
  setCurrentPage: (page: number) => void;
  getMiddlePages: () => number[];
}

/**
 * Custom hook for pagination
 * @param data - Static array of items for pagination
 * @param itemsPerPage - Number of items per page (default: 10)
 * @param fetchData - Optional function to fetch paginated data dynamically
 */
const usePagination = <T>(
  data: T[] = [],
  itemsPerPage: number = 10,
  fetchData?: (page: number, limit: number) => Promise<PaginationResult<T>>
): UsePaginationReturn<T> => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [paginatedData, setPaginatedData] = useState<T[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const updateData = async () => {
      if (fetchData) {
        try {
          const { items, totalPages: fetchedTotalPages } = await fetchData(
            currentPage,
            itemsPerPage
          );
          setPaginatedData(items || []);
          setTotalPages(fetchedTotalPages || 1);
        } catch (error) {
          console.error("Failed to fetch paginated data:", error);
          setPaginatedData([]);
        }
      } else {
        const start = (currentPage - 1) * itemsPerPage;
        const paginated = data.slice(start, start + itemsPerPage);
        setPaginatedData(paginated);
        setTotalPages(Math.ceil(data.length / itemsPerPage) || 1);
      }
    };

    updateData();
  }, [currentPage, data, itemsPerPage, fetchData]);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    scrollToTop();
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    scrollToTop();
  };

  const jumpToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    scrollToTop();
  };

  const getMiddlePages = (): number[] => {
    const pages: number[] = [];
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return {
    currentData: paginatedData,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    jumpToPage,
    setCurrentPage,
    getMiddlePages,
  };
};

export default usePagination;
