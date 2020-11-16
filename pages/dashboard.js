import React, { useState } from "react";
import { Layout } from "../components/layout/layout";
import Head from 'next/head';
import {
  userData,
  membershipColumns,
  membershipData,
  paymentsColumns,
  paymentsData,
} from "../data/dashboard";

export default function Dashboard() {
  return (
    <Layout>
      <Head>
        <title>Member Dashboard | VantageOne Dental Plan</title>
      </Head>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-row md:flex-col lg:flex-row">
          <div className="w-2/3 lg:w-2/3 md:w-full">
            {/* User Details */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap">
                  <div class="ml-4 mt-2">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                      Active Member with *NA (Enrolling Outside Office)
                    </h3>
                  </div>
                  <div class="ml-4 mt-2 flex-shrink-0">
                    <span class="inline-flex rounded-md shadow-sm">
                      <button
                        type="button"
                        class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-700 active:bg-blue-700"
                      >
                        Update Primary Details
                      </button>
                    </span>
                    <span class="inline-flex rounded-md shadow-sm pl-4">
                      <button
                        type="button"
                        class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-700 active:bg-blue-700"
                      >
                        Update Billing
                      </button>
                    </span>
                  </div>
                  
                </div>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <div class="px-4 py-5 sm:px-6">
                  <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    {userData.map((item) => (
                      <div class="sm:col-span-1" key={item.label}>
                        <dt class="text-sm leading-5 font-medium text-gray-500">
                          {item.label}
                        </dt>
                        <dd class="mt-1 text-sm leading-5 text-gray-900">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>

            {/* Membership Table */}
            <div className="flex flex-col pt-10">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          {membershipColumns.map(({ title }) => (
                            <th
                              className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                              key={title}
                            >
                              {title}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {membershipData.map((membership) => (
                          <tr key={membership.key}>
                            <td className="px-6 py-4 whitespace-no-wrap">
                              <div className="flex items-center">
                                <div>
                                  <div className="text-sm leading-5 font-medium text-gray-900">
                                    {membership.startDate}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap">
                              <div className="text-sm leading-5 text-gray-900">
                                {membership.renewalDate}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap">
                              {membership.numMembers}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap">
                              {membership.annualPrice}
                              {/* <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </span> */}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {membership.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium">
                              <a
                                href="/"
                                className="text-indigo-600 hover:text-indigo-900 px-3"
                              >
                                Upgrade plan
                              </a>
                              <a
                                href="/"
                                className="text-indigo-600 hover:text-indigo-900 px-3"
                              >
                                Add Dependent(s)
                              </a>
                              <a
                                href="/"
                                className="text-indigo-600 hover:text-indigo-900 px-3"
                              >
                                Cancel
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

            {/* Payments Table */}
            <div className="flex flex-col pt-10">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          {paymentsColumns.map(({ title }) => (
                            <th
                              className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                              key={title}
                            >
                              {title}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {paymentsData.map((payment) => (
                          <tr key={payment.key}>
                            <td className="px-6 py-4 whitespace-no-wrap">
                              <div className="flex items-center">
                                <div>
                                  <div className="text-sm leading-5 font-medium text-gray-900">
                                    {payment.date}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap">
                              <div className="text-sm leading-5 text-gray-900">
                                {payment.description}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap">
                              {payment.amount}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap">
                              {payment.paymentType}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {payment.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium">
                              <a
                                href="/"
                                className="text-indigo-600 hover:text-indigo-900 px-2"
                              >
                                Receipt
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
          </div>

          <div className="w-1/3 lg:w-1/3 md:w-full px-6">
            <div class="bg-white overflow-hidden shadow rounded-lg">
              <div class="flex flex-col px-4 py-5 sm:p-6">
                <h1>Sidebar content</h1>
                <h5>Call us</h5>
                <p>PHONE ICON (877) 545-4188</p>
                <p>EMAIL ICON member@thrivedentalplan.com</p>
                <p>TIME ICON M-F | 8am-6pm CST</p>

                <span class="inline-flex rounded-md">
                  <button
                    type="button"
                    class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
                  >
                    Temporary Member ID Card
                  </button>
                </span>

                <span class="inline-flex rounded-md">
                  <button
                    type="button"
                    class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
                  >
                    View Terms & Conditions
                  </button>
                </span>

                <span class="inline-flex rounded-md">
                  <button
                    type="button"
                    class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
                  >
                    View Fee Schedules
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
