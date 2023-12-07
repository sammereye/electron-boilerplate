import React from "react";
import { useHookstate } from "@hookstate/core";
import { COUNT, addToCount } from "../state/number";
import { BankAccount } from '../components/BankAccount';

export function AboutPage() {
  const count = useHookstate(COUNT);

  return (
    <div className="mt-2 h-full">
      <h1>This is the about page</h1>
      <p>Count: { count.get() }</p>
      <button 
        type="button" 
        className="rounded-md bg-blue-600 mt-3 px-3 py-2 text-sm font-semibold text-white shadow-sm"
        onClick={() => { addToCount() }}
      >
        Add to Count
      </button>
      <BankAccount />
    </div>
  )
}