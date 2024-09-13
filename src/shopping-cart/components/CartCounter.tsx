"use client";

import { addOne, initCounterState, substractOne } from "@/store/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";

interface Props {
  value?: number;
}


export const CartCounter = ({ value = 0 }: Props) => {

  const dispatch = useAppDispatch();

  const count = useAppSelector((state) => state.counter.count);

  return (
    <>
      <span className="text-9xl h-[130px]">{count}</span>

      <div className="flex gap-2">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]"
          onClick={() => dispatch(addOne())}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]"
          onClick={() => dispatch(substractOne())}
        >
          -1
        </button>
      </div>
    </>
  );
};
