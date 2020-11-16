import React, { useState } from "react";
import Head from 'next/head';
import { Layout } from "../components/layout/layout";
import { NativeSelect } from '../components/nativeSelect';
import { SearchSelect } from '../components/searchSelect';
import { Toggle } from '../components/toggle';
import { planDropdown, planData, dependentsDropdown, officesDropdown } from '../data/join-now';

export default function JoinNow() {
  const [plan, setPlan] = useState(planData[0]);
  const [enrollmentOffice, setEnrollmentOffice] = useState({ id: '', name: '' });
  const [addDependents, setAddDependents] = useState(0);
  const [dependentsInput, setDependentsInput] = useState([]);
  const [annualBilling, setAnnualBilling] = useState(true); 


  function handleDependentSelect(event) {
    console.log('handleDependentSelect event -> ', event);
    console.log('event.target.value -> ', event.target.value);
    
    let dependentsToAdd = [];
    for (let i = 0; i < event.target.value; i++) {
      dependentsToAdd.push(
        <>
          <div className="sm:col-span-3">
            <label for="first_name" className="block text-sm font-medium leading-5 text-gray-700">
              First name
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input id="first_name" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label for="last_name" className="block text-sm font-medium leading-5 text-gray-700">
              Last name
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input id="last_name" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
          </div>
        </>
      )
    }

    console.log('dependents -> ', dependentsInput);
    setDependentsInput(dependentsToAdd);
    setAddDependents(parseInt(event.target.value));
  }


  function handlePlanSelect(event) {
    console.log('event -> ', event);

    console.log('plan before -> ', plan);
    const selectedPlan = planData.filter(plan => plan.id === event.value);
    console.log('selected plan -> ', selectedPlan);
    setPlan(selectedPlan[0]);
    if(selectedPlan[0].id === 'classic') {
      console.log('test');
      setAnnualBilling(true);
    }
  }

 



  return (
    <Layout>
      <Head>
        <title>Join Now | VantageOne</title>
      </Head>

      <div className="min-h-screen container mx-auto py-8 px-4 sm:px-6 lg:px-8">

        <div className="md:flex md:items-center md:justify-between py-8">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
              Join Now
            </h2>
            <p className="mt-1 text-sm leading-5 text-gray-500">
              Enroll today, pay a low annual membership fee, and save on your dental care right away.
            </p>
          </div>
        </div>


        <div className="grid grid-cols-3 gap-8">

          <form className="col-span-2">
            <div>
              <div>
                <div className="sm:col-span-6 py-3">
                  <label for="country" className="block text-md font-medium leading-5 text-black">
                    Enrollment Office
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      Note: If you're enrolling outside a participating office, please select *NA (Enrolling Outside Office).
                    </p>
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">

                    <SearchSelect 
                      options={officesDropdown}
                      onChange={event => setEnrollmentOffice({ id: event.value, name: event.label})}
                    />

                  </div>
                </div>
              </div>
              <div>
                <div className="sm:col-span-6 py-3">
                  <label for="country" className="block text-md font-medium leading-5 text-black">
                    Select Plan
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      Select the plan you want.
                    </p>
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">

                    <SearchSelect 
                      options={planDropdown}
                      value={planDropdown.filter(item => item.value === plan.id)}
                      onChange={event => handlePlanSelect(event)}
                    />

                  </div>
                </div>
              </div>

              {plan.id !== 'classic' && (
                <div class="flex items-center justify-between py-2">
                  <span class="flex-grow flex flex-col" id="toggleLabel">
                    <span class="text-sm leading-5 font-medium text-black">
                      Select Annual or Monthly Billing
                    </span>
                    <span class="text-sm leading-normal text-gray-500">
                      Save up to 10% with annual billing.
                    </span>
                  </span>

                  <Toggle isChecked={annualBilling} setIsChecked={setAnnualBilling} />
                </div>
              )}
              {plan.id === 'classic' && (
                <div class="flex items-center justify-between py-2">
                  <span className="text-gray-500">
                    The Classic plan is only available in annal pricing.
                  </span>

                </div>
              )}
              



              <div className="mt-8 border-t border-gray-200 pt-8">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Personal Information
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-gray-500">
                    Use a permanent address where you can receive mail.
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label for="first_name" className="block text-sm font-medium leading-5 text-gray-700">
                      First name
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input id="first_name" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label for="last_name" className="block text-sm font-medium leading-5 text-gray-700">
                      Last name
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input id="last_name" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label for="dateOfBirth" className="block text-sm font-medium leading-5 text-gray-700">
                      Date of Birth
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input id="dateOfBirth" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label for="phone" className="block text-sm font-medium leading-5 text-gray-700">
                      Phone
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input id="phone" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label for="email" className="block text-sm font-medium leading-5 text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input id="email" type="email" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label for="address" className="block text-sm font-medium leading-5 text-gray-700">
                      Address
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input id="address" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label for="address2" className="block text-sm font-medium leading-5 text-gray-700">
                      Apt, Suite, Etc
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input id="address2" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label for="city" className="block text-sm font-medium leading-5 text-gray-700">
                      City
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input id="city" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label for="state" className="block text-sm font-medium leading-5 text-gray-700">
                      State / Province
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input id="state" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label for="zip" className="block text-sm font-medium leading-5 text-gray-700">
                      ZIP / Postal
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input id="zip" className="form-input block w-full transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm sm:text-md sm:leading-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-5">
            
              <div>
                <div className="sm:col-span-6 py-3">
                  <label for="country" className="block text-md font-medium leading-5 text-black">
                    Would you like to add any dependents?
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      Each dependent added will add $30 to your annual membership fee (total illustrated in the right sidebar).
                    </p>
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">


                    <NativeSelect 
                      id="dependents"
                      options={dependentsDropdown} 
                      selected={addDependents} 
                      setSelected={handleDependentSelect} 
                    />

                  </div>
                </div>
              </div>


              {addDependents !== 'na' && (
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">

                  {dependentsInput}

                </div>
              )}
              


              <div className="mt-8 border-t border-gray-200 pt-8">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Payment Details
                  </h3>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <label for="cardNumber" className="block text-sm font-medium leading-5 text-gray-700">
                      Credit/Debit Card
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input id="cardNumber" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label for="expiration" className="block text-sm font-medium leading-5 text-gray-700">
                      MM / YYYY
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input id="expiration" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label for="cvc" className="block text-sm font-medium leading-5 text-gray-700">
                      CVC
                    </label>
                    <div className="mt-1 rounded-md shadow-sm">
                      <input id="cvc" className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                    </div>
                  </div>

                  
                </div>
              </div>
            </div>

            
            <div className="mt-8 border-t border-gray-200 pt-5">
              <div className="flex justify-end">
                <span className="inline-flex rounded-md shadow-sm">
                  <button type="button" className="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
                    Cancel
                  </button>
                </span>
                <span className="ml-3 inline-flex rounded-md shadow-sm">
                  <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition duration-150 ease-in-out">
                    Save
                  </button>
                </span>
              </div>
            </div>


            
          </form>


          <div className="relative col-span-1">
            <div className="sticky top-0 py-20 ">
              <div className="bg-gray-50 overflow-hidden rounded-lg shadow-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="text-center pb-8 flex flex-col">
                    <h1 className="text-2xl pb-4">Receipt</h1>
                    <span>{ annualBilling ? "Billed Annually" : "Billed Monthly" }</span>
                    <span>Plan: {plan.name}</span>
                    <div className="flex justify-between pt-8">
                      <span>{plan.name}:</span>
                      <span>${annualBilling ? plan.annualPrice : plan.monthlyPrice}</span>
                    </div>
                  </div>
                  {annualBilling && (
                    <div className="divide-y divide-grey-400">
                      <div className="flex justify-between pb-8">
                        <span>{addDependents} dependent(s) @ ${plan.annualDependentPrice}:</span>
                        <span>${addDependents * plan.annualDependentPrice}</span>
                      </div>

                      <div className="flex justify-between py-8">
                        <span>Total: </span>
                        <span>${(plan.annualPrice + (addDependents * plan.annualDependentPrice))}</span>
                      </div>
                    </div>
                  )}
                  {!annualBilling && (
                    <div className="divide-y divide-grey-400">
                      <div className="flex justify-between pb-8">
                        <span>{addDependents} dependent(s) @ ${plan.monthlyDependentPrice}:</span>
                        <span>${addDependents * plan.monthlyDependentPrice}</span>
                      </div>

                      <div className="flex justify-between py-8">
                        <span>Total: </span>
                        <span>${(plan.annualPrice + (addDependents * plan.monthlyDependentPrice))}</span>
                      </div>
                    </div>
                  )}





                  {/* <p>Enrollment Office: {enrollmentOffice.name}</p> */}

                  <div className="text-center">
                    <span className="inline-flex rounded-md shadow-sm pt-4">
                      <button 
                        type="button" 
                        className="inline-flex items-center px-12 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-400 focus:shadow-outline-green active:bg-green-400 transition ease-in-out duration-150"
                      >
                        Continue
                      </button>
                    </span>
                  </div>
                  
                </div>
                
              </div>
            </div>
          </div>


        </div>





      </div>







    </Layout>
  );
}
