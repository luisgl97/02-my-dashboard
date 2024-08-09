"use client";

import { addOne, initCounterState, substractOne } from "@/store/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect, useState } from "react";

interface Props {
  value?: number;
}

interface CounterResponse {
  method: string;
  count: number
}

const getApiCounter = async ():Promise<CounterResponse> => {
  const data = await fetch('/api/counter').then(res => res.json())
  return data
}

export const CartCounter = ({ value = 0 }: Props) => {

  const dispatch = useAppDispatch();
  // const [initialized, setInitialized] = useState(false);

  // useEffect(() => {
  //   dispatch(initCounterState(value));
  //   setInitialized(true);
  // }, [dispatch, value]);
  const count = useAppSelector((state) => state.counter.count);

  // Render conditionally only after initialization
  // if (!initialized) {
  //   return <div className="h-[168px]">{""}</div>; // Or a loading indicator if necessary
  // }

  // useEffect(() => {
  //   const iniciarContador = async () => {
  //     const data = await getApiCounter()
  //     dispatch(initCounterState(data.count))
  //     setInitialized(true)
  //   }
  //   iniciarContador()
  // }, [])
  
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
