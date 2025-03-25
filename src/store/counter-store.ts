import { create } from "zustand";

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  setCount: (value: number) => void;
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 1,
  increment: () => set((state) => ({ count: Math.min(9999, state.count + 1) })),
  decrement: () => set((state) => ({ count: Math.max(1, state.count - 1) })),
  setCount: (value) => set({ count: value }),
}));
