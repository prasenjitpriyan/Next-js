"use client";

import React from "react";
import type { RootState } from "@/store/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "@/store/slice";

const Incdec: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <button
        className="bg-lime-700 px-5 py-3 rounded-xl text-lime-50"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        className="px-5 py-3 rounded-xl border-2"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </React.Fragment>
  );
};

export default Incdec;
