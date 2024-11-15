import type { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

// Use throughout  app instead of plain `useSelector`
export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;
