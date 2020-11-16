import React, { useState } from "react";
import Head from 'next/head';
import { Layout } from "../components/layout/layout";
import { Image, Transformation } from "cloudinary-react";
import { savingsColumns, savingsData } from "../data/pick-your-plan";

const TextToggle = (props) => {
  return (
    <div className="px-6 mt-2 text-center">
      <div className="relative bg-gray-100 rounded-full p-1.5 mx-8 flex self-center justify-center ">
        <button
          type="button"
          className={` ${
            props.active === "monthly"
              ? "bg-white border-gray-200 shadow-sm"
              : "border border-transparent"
          }  relative rounded-full py-1.5 w-1/2 text-xs leading-5 font-medium text-blue-600 whitespace-no-wrap hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue focus:z-10 active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150 sm:w-auto sm:px-4`}
          value="monthly"
          onClick={() => props.setActive("monthly")}
        >
          Monthly
        </button>
        <button
          type="button"
          className={` ${
            props.active === "annual"
              ? "bg-white border-gray-200 shadow-sm"
              : "border border-transparent"
          }  relative rounded-full py-1.5 w-1/2 text-xs leading-5 font-medium text-blue-600 whitespace-no-wrap hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue focus:z-10 active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150 sm:w-auto sm:px-4`}
          value="annual"
          onClick={() => props.setActive("annual")}
        >
          Annual
        </button>
      </div>
    </div>
  );
};

export default function PickYourPlan() {
  const [premiumTerm, setPremiumTerm] = useState("annual");
  const [premiumPlusTerm, setPremiumPlusTerm] = useState("annual");

  return (
    <Layout>
      <Head>
        <title>Pick Your Plan | VantageOne</title>
      </Head>


      {/* <section className="hidden 3xl:block relative">
        <div className="relative bg-red-400 pb-1/5"></div>
      </section> */}






      <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:pt-48 md:pb-4 lg:text-left">
        <div class="px-4 w-full sm:px-8 xl:pr-16 text-center">
          <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
            Options For Every Smile
          </h2>
          <p class="mt-3 max-w-md mx-auto text-lg text-white sm:text-xl md:mt-5 md:max-w-3xl">
            Saving on your dental care has never been easier. Simply select a
            membership that works best for you or the entire family to get
            started.
          </p>
        </div>
      </div>
      <div class="relative w-full h-auto sm:h-72 md:h-96 md:absolute md:inset-y-0 md:right-0 md:w-full md:h-full -z-10">
        <Image
          publicId="/vantageone/backgrounds/pick-your-plan-hero-background-2x1"
          className="hidden md:block 3xl:hidden absolute inset-0 w-full h-auto object-cover"
        >
          <Transformation width="auto" height="auto" />
        </Image>
        <Image
          publicId="/vantageone/backgrounds/pick-your-plan-hero-background-5x1"
          className="hidden 3xl:block absolute inset-0 w-full h-auto object-cover"
        >
          <Transformation width="auto" height="auto" />
        </Image>
      </div>

      <div className="">
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* <!-- Pricing with four tiers and toggle --> */}
            <div>
              <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-12 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-12 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-lg divide-y divide-gray-200">
                    <div className="p-6 flex justify-center">
                      <Image publicID="/vantageone/VantageOne-classic-logo" />
                    </div>

                    <div className="px-6 py-2 text-center">
                      <div className="relative mt-2 bg-gray-100 rounded-full p-1.5 mx-auto w-1/3 flex self-center justify-center sm:mt-2">
                        <button
                          type="button"
                          className="relative bg-white border-gray-200 rounded-full shadow-sm py-1.5 w-1/2 text-xs leading-5 font-medium text-gray-700 whitespace-no-wrap hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue focus:z-10 active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150 sm:w-auto sm:px-4"
                        >
                          Annual
                        </button>
                      </div>

                      <p className="mt-4 text-sm leading-5 text-gray-500">
                        Individual Membership
                      </p>
                      <p className="mt-2">
                        <span className="text-4xl leading-10 font-extrabold text-blue-600">
                          $79
                        </span>
                        <span className="text-base leading-6 font-medium text-blue-600">
                          /yr
                        </span>
                      </p>
                      <p className="mt-8 text-sm leading-5 text-gray-500">
                        Additional Member(s)
                      </p>
                      <p className="mt-2">
                        <span className="text-4xl leading-10 font-extrabold text-blue-600">
                          +$70
                        </span>
                        <span className="text-base leading-6 font-medium text-blue-600">
                          /person
                        </span>
                      </p>
                      <button
                        type="button"
                        className="my-8 w-2/3 bg-green-600 border border-transparent rounded-full py-2 text-sm leading-5 font-semibold text-white hover:bg-green-500 focus:outline-none focus:border-green-400 focus:shadow-outline-green active:bg-green-400 transition duration-150 ease-in-out"
                      >
                        Select Membership
                      </button>
                    </div>
                    <div className="pt-6 pb-8 px-10">
                      <h3 className="text-xs leading-4 font-medium text-gray-900 tracking-wide uppercase">
                        What's included
                      </h3>
                      <ul className="mt-6 space-y-4">
                        <li className="flex space-x-3">
                          <Image publicId="/vantageone/home/circle-check-icon" />
                          <span className="text-sm leading-5 text-gray-500">
                            20% Off Exams
                          </span>
                        </li>

                        <li className="flex space-x-3">
                          <Image
                            publicId="/vantageone/home/circle-check-icon"
                            height="19"
                            width="19"
                          />
                          <span className="text-sm leading-5 text-gray-500">
                            50% Off X-Rays
                          </span>
                        </li>

                        <li className="flex space-x-3">
                          <Image
                            publicId="/vantageone/home/circle-check-icon"
                            height="19"
                            width="19"
                          />
                          <span className="text-sm leading-5 text-gray-500">
                            20% Off Cleanings
                          </span>
                        </li>

                        <li className="flex space-x-3">
                          <Image
                            publicId="/vantageone/home/circle-check-icon"
                            height="19"
                            width="19"
                          />
                          <span className="text-sm leading-5 text-gray-500">
                            20-50% Off Most Other Services
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg shadow-lg divide-y divide-gray-200">
                    <div className="p-6 flex justify-center">
                      <Image publicID="/vantageone/VantageOne-premium-logo" />
                    </div>

                    <div className="px-6 py-2 text-center">
                      <TextToggle
                        active={premiumTerm}
                        setActive={setPremiumTerm}
                      />

                      {premiumTerm === "annual" && (
                        <>
                          <p className="mt-4 text-sm leading-5 text-gray-500">
                            Individual Membership
                          </p>
                          <p className="mt-2">
                            <span className="text-4xl leading-10 font-extrabold text-blue-600">
                              $159
                            </span>
                            <span className="text-base leading-6 font-medium text-blue-600">
                              /yr
                            </span>
                          </p>
                          <p className="mt-8 text-sm leading-5 text-gray-500">
                            Additional Member(s)
                          </p>
                          <p className="mt-2">
                            <span className="text-4xl leading-10 font-extrabold text-blue-600">
                              +$140
                            </span>
                            <span className="text-base leading-6 font-medium text-blue-600">
                              /person
                            </span>
                          </p>
                          <button
                            type="button"
                            className="my-8 w-2/3 bg-green-600 border border-transparent rounded-full py-2 text-sm leading-5 font-semibold text-white hover:bg-green-500 focus:outline-none focus:border-green-400 focus:shadow-outline-green active:bg-green-400 transition duration-150 ease-in-out"
                          >
                            Select Membership
                          </button>
                        </>
                      )}

                      {premiumTerm === "monthly" && (
                        <>
                          <p className="mt-4 text-sm leading-5 text-gray-500">
                            Individual Membership
                          </p>
                          <p className="mt-2">
                            <span className="text-4xl leading-10 font-extrabold text-blue-600">
                              $79
                            </span>
                            <span className="text-base leading-6 font-medium text-blue-600">
                              /yr
                            </span>
                          </p>
                          <p className="mt-6 text-sm leading-5 text-blue-600">
                            Upfront fee billed annually
                          </p>
                          <p className="mt-3 text-sm leading-5 text-blue-600">
                            + $8 / user / mo - first user
                          </p>
                          <p className="mt-3 text-sm leading-5 text-blue-600">
                            + $6 / user / mo - each user after
                          </p>
                          <p className="px-8 mt-3 text-xs leading-5 text-gray-700">
                            *Monthly payment varies dependent on the number of
                            members on the same plan.
                          </p>
                          <button
                            type="button"
                            className="my-8 w-2/3 bg-green-600 border border-transparent rounded-full py-2 text-sm leading-5 font-semibold text-white hover:bg-green-500 focus:outline-none focus:border-green-400 focus:shadow-outline-green active:bg-green-400 transition duration-150 ease-in-out"
                          >
                            Select Membership
                          </button>
                        </>
                      )}
                    </div>
                    <div className="pt-6 pb-8 px-10">
                      <h3 className="text-xs leading-4 font-medium text-gray-900 tracking-wide uppercase">
                        What's included
                      </h3>
                      <ul className="mt-6 space-y-4">
                        <li className="flex space-x-3">
                          <Image
                            publicId="/vantageone/home/circle-check-icon"
                            height="19"
                            width="19"
                          />
                          <span className="text-sm leading-5 text-gray-500">
                            <strong>FREE</strong> Exams
                          </span>
                        </li>

                        <li className="flex space-x-3">
                          <Image
                            publicId="/vantageone/home/circle-check-icon"
                            height="19"
                            width="19"
                          />
                          <span className="text-sm leading-5 text-gray-500">
                            <strong>FREE</strong> X-Rays
                          </span>
                        </li>

                        <li className="flex space-x-3">
                          <Image
                            publicId="/vantageone/home/circle-check-icon"
                            height="19"
                            width="19"
                          />
                          <span className="text-sm leading-5 text-gray-500">
                            20% Off Cleanings
                          </span>
                        </li>

                        <li className="flex space-x-3">
                          <Image
                            publicId="/vantageone/home/circle-check-icon"
                            height="19"
                            width="19"
                          />
                          <span className="text-sm leading-5 text-gray-500">
                            20-50% Off Most Other Services
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg shadow-lg divide-y divide-gray-200">
                    <div className="p-6 flex justify-center">
                      <Image publicID="/vantageone/VantageOne-premium-plus-logo" />
                    </div>

                    <div className="px-6 py-2 text-center">
                      <TextToggle
                        active={premiumPlusTerm}
                        setActive={setPremiumPlusTerm}
                      />

                      {premiumPlusTerm === "annual" && (
                        <>
                          <p className="mt-4 text-sm leading-5 text-gray-500">
                            Individual Membership
                          </p>
                          <p className="mt-2">
                            <span className="text-4xl leading-10 font-extrabold text-blue-600">
                              $299
                            </span>
                            <span className="text-base leading-6 font-medium text-blue-600">
                              /yr
                            </span>
                          </p>
                          <p className="mt-8 text-sm leading-5 text-gray-500">
                            Additional Members
                          </p>
                          <p className="mt-2">
                            <span className="text-4xl leading-10 font-extrabold text-blue-600">
                              +$270
                            </span>
                            <span className="text-base leading-6 font-medium text-blue-600">
                              /yr
                            </span>
                          </p>
                          <button
                            type="button"
                            className="my-8 w-2/3 bg-green-600 border border-transparent rounded-full py-2 text-sm leading-5 font-semibold text-white hover:bg-green-500 focus:outline-none focus:border-green-400 focus:shadow-outline-green active:bg-green-400 transition duration-150 ease-in-out"
                          >
                            Select Membership
                          </button>
                        </>
                      )}

                      {premiumPlusTerm === "monthly" && (
                        <>
                          <p className="mt-4 text-sm leading-5 text-gray-500">
                            Individual Membership
                          </p>
                          <p className="mt-2">
                            <span className="text-4xl leading-10 font-extrabold text-blue-600">
                              $79
                            </span>
                            <span className="text-base leading-6 font-medium text-blue-600">
                              /yr
                            </span>
                          </p>
                          <p className="mt-6 text-sm leading-5 text-blue-600">
                            Upfront fee billed annually
                          </p>
                          <p className="mt-3 text-sm leading-5 text-blue-600">
                            + $20 / user / mo - first user
                          </p>
                          <p className="mt-3 text-sm leading-5 text-blue-600">
                            + $17 / user / mo - each user after
                          </p>
                          <p className="px-8 mt-3 text-xs leading-5 text-gray-700">
                            *Monthly payment varies dependent on the number of
                            members on the same plan.
                          </p>
                          <button
                            type="button"
                            className="my-8 w-2/3 bg-green-600 border border-transparent rounded-full py-2 text-sm leading-5 font-semibold text-white hover:bg-green-500 focus:outline-none focus:border-green-400 focus:shadow-outline-green active:bg-green-400 transition duration-150 ease-in-out"
                          >
                            Select Membership
                          </button>
                        </>
                      )}
                    </div>

                    <div className="pt-6 pb-8 px-10">
                      <h3 className="text-xs leading-4 font-medium text-gray-900 tracking-wide uppercase">
                        What's included
                      </h3>
                      <ul className="mt-6 space-y-4">
                        <li className="flex space-x-3">
                          <Image
                            publicId="/vantageone/home/circle-check-icon"
                            height="19"
                            width="19"
                          />
                          <span className="text-sm leading-5 text-gray-500">
                            <strong>FREE</strong> exams
                          </span>
                        </li>

                        <li className="flex space-x-3">
                          <Image
                            publicId="/vantageone/home/circle-check-icon"
                            height="19"
                            width="19"
                          />
                          <span className="text-sm leading-5 text-gray-500">
                            <strong>FREE</strong> X-Rays
                          </span>
                        </li>

                        <li className="flex space-x-3">
                          <Image
                            publicId="/vantageone/home/circle-check-icon"
                            height="19"
                            width="19"
                          />
                          <span className="text-sm leading-5 text-gray-500">
                            <strong>FREE</strong> Cleanings
                          </span>
                        </li>

                        <li className="flex space-x-3">
                          <Image
                            publicId="/vantageone/home/circle-check-icon"
                            height="19"
                            width="19"
                          />
                          <span className="text-sm leading-5 text-gray-500">
                            20% off other services.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center p-15">
              <p className="text-gray-700 text-sm">
                If paying monthly, your account will be billed $79 per member,
                plus first month’s payment installment. Monthly, thereafter, you
                will be billed every 30 days from the subscription’s original
                start date. Monthly option is only available for accounts paying
                with credit/debit card.
              </p>
            </div>

            <div className="text-center p-6">
              <h2 className="text-6xl font-bold text-blue-600">
                Savings to Smile About
              </h2>
              <p className="text-teal-600 text-xl">
                Enjoy quality dentistry at a fraction of the cost with
                VantageOne Dental Savings Plan
              </p>
            </div>

            <div>
              <div></div>
              <div class="relative w-full h-auto sm:h-72 md:h-96 md:absolute md:inset-y-auto md:right-0 md:w-full -z-10">
                <Image
                  publicId="/vantageone/backgrounds/pick-your-plan-midpage-hero-background-3x1"
                  className="hidden md:block 3xl:hidden absolute inset-auto w-full h-auto object-cover"
                >
                  <Transformation width="auto" height="auto" />
                </Image>
                <Image
                  publicId="/vantageone/backgrounds/pick-your-plan-midpage-hero-background-6x1.png"
                  className="hidden 3xl:block absolute inset-y-0 w-full h-auto object-cover"
                >
                  <Transformation width="auto" height="auto" />
                </Image>
              </div>
            </div>

            {/* Savings Summary table */}
            <div className="flex flex-col pt-10">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:mx-12">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg border border-blue-600">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-blue-600">
                        <tr>
                          {savingsColumns.map(({ title }) => (
                            <th
                              className="px-6 py-3 bg-blue-600 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider"
                              key={title}
                            >
                              {title}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {savingsData.map((item, index) => (
                          <tr
                            key={item.key}
                            className={` ${
                              index % 2 === 0
                                ? "bg-white"
                                : "bg-teal-600 bg-opacity-25"
                            } `}
                          >
                            <td className="px-6 py-4 whitespace-no-wrap">
                              <div className="flex items-center">
                                <div>
                                  <div className="text-sm leading-5 font-medium text-gray-900">
                                    {item.name}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap">
                              <div className="text-sm leading-5 text-gray-900">
                                {item.classic}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap">
                              {item.premium}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap">
                              {item.premiumPlus}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center p-12 pb-20">
              <p>
                *This is just an example of savings. VantageOne Dental Savings
                Plan Providers have agreed to discount their usual and customary
                fees by 20% for services not listed on summary of discount fees
                above, provided those ADA codeservices are offered in office.
              </p>

              <button
                type="button"
                className="mt-8 px-12 bg-green-600 border border-transparent rounded-full py-4 text-md leading-5 font-semibold text-white hover:bg-green-500 focus:outline-none focus:border-green-400 focus:shadow-outline-green active:bg-green-400 transition duration-150 ease-in-out"
              >
                View More Savings
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
