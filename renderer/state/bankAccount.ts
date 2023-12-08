import { hookstate } from "@hookstate/core";

export const BANK_ACCOUNT = hookstate<object>({});

export async function getBankAccount() {
  let data = await window.electron.getBankAccountData()
  BANK_ACCOUNT.set(data);
}