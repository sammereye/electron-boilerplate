import { hookstate } from "@hookstate/core";

export const COUNT = hookstate(0);

export async function addToCount() {
  let newCount = await window.electron.buttonPressed(COUNT.get())
  let data = await window.electron.getBankAccountData()
  console.log(data);
  COUNT.set(newCount);
}