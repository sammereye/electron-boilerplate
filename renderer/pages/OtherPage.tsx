import React, { useState } from "react";
import { useHookstate } from "@hookstate/core";
import { COUNT, addToCount } from "../state/number";

export function OtherPage() {
  const count = useHookstate(COUNT);
  const [processing, setProcessing] = useState(false);

  async function addToCountOnClick() {
    setProcessing(true);
    await addToCount();
    setProcessing(false);
  }

  return (
    <div className="mt-2">
      <h1>This is the other page</h1>
      <p>Count: { count.get() }</p>
      <button 
        type="button" 
        className='relative rounded-md bg-blue-600 mt-3 px-3 py-2 text-sm font-semibold text-white shadow-sm'
        onClick={() => { addToCountOnClick() }}
        disabled={processing}
      >
        {processing ? 
          <>
            <span className="opacity-0">Add to Count</span>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="w-full h-full flex items-center justify-center">
                <svg className="fill-white animate-spin" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"/></svg>
              </div>
            </div>
          </>
          :
          <span >Add to Count</span>
        }
      </button>
    </div>
  )
}