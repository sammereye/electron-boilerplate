import React, {useEffect} from 'react';
import { useHookstate } from '@hookstate/core';
import { BANK_ACCOUNT, getBankAccountData } from '../state/bankAccount';
import { BankAccount, Transaction } from '../../models/bankAccount';

export function BankAccount() {
  const bankAccount = useHookstate<BankAccount>(BANK_ACCOUNT)

  useEffect(() => {
    getBankAccountData()
  }, []);

  if (bankAccount.get().length > 0) {
    return (
      <div className="px-4 sm:px-6 lg:px-8 h-full overflow-y-scroll">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Bank Account</h1>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-fit divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                      ID
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Date
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Category
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Description
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Debit
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Credit
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {bankAccount.get().map((transaction: Transaction) => (
                    <tr key={transaction.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        {transaction.id}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{transaction.transactionDate}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{transaction.category}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{transaction.description}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${transaction.debit ?? 0}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${transaction.credit ?? 0}</td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit<span className="sr-only">, {transaction.description}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div>Loading data...</div>
    )
  }
}