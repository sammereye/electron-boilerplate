import { hookstate } from "@hookstate/core";
import { ipcRenderer } from "electron";
import { BankAccount } from "../../models/bankAccount";

export const BANK_ACCOUNT = hookstate<BankAccount>([]);

export function getBankAccountData() {
  console.log('client to server to get data');
  ipcRenderer.send('get-bank-account-data');
}

ipcRenderer.on("set-bank-account-data", (evt: any, bankAccountData: BankAccount) => {
  console.log('client from server to set data');
  BANK_ACCOUNT.set(bankAccountData);
});