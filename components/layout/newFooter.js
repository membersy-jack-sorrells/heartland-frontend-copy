import React from 'react';
import { Image } from 'cloudinary-react';

export const NewFooter = () => {
  return (
<footer class="bg-blue-600">
  <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <div class="xl:grid xl:grid-cols-3 xl:gap-8">
      <div class="space-y-3 xl:col-span-1">
        <p class="text-white text-base leading-6">
          powered by:
        </p>
        <Image
          cloudName="membersy"
          publicId="vantageone/membersy-logo-white.png"
        />
        <p class="text-white text-base leading-6">
          Our purpose is to grow the membership dentistry movement. That goes beyond creating the best membership experiences in the market; it means revolutionizing the way people access and pay for dental care.
        </p>
        <div class="flex space-x-6">
          <a href="#" class="text-gray-400 hover:text-white">
            <span class="sr-only">Facebook</span>
            <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>


      <div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
        <div class="md:grid md:grid-cols-2 md:gap-8">


          <div>
            <ul class="mt-4 space-y-4">
              <li>
                <a href="#" class="text-base leading-6 text-white hover:text-gray-900">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" class="text-base leading-6 text-white hover:text-gray-900">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" class="text-base leading-6 text-white hover:text-gray-900">
                  Commerce
                </a>
              </li>
              <li>
                <a href="#" class="text-base leading-6 text-white hover:text-gray-900">
                  Insights
                </a>
              </li>
            </ul>
          </div>





          <div class="mt-12 md:mt-0">
            <h4 class="text-sm leading-5 font-semibold text-gray-400 tracking-wider uppercase">
              Support
            </h4>
            <ul class="mt-4 space-y-4">
              <li>
                <a href="#" class="text-base leading-6 text-white hover:text-gray-900">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" class="text-base leading-6 text-white hover:text-gray-900">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" class="text-base leading-6 text-white hover:text-gray-900">
                  Guides
                </a>
              </li>
              <li>
                <a href="#" class="text-base leading-6 text-white hover:text-gray-900">
                  API Status
                </a>
              </li>
            </ul>
          </div>




        </div>

        <p className="text-base text-white">VantageOne Dental Savings Plan is NOT INSURANCE, but rather a licensed dental savings plan offered through your local dental office. Members in good standing with their annual membership fee are eligible to receive transparent, member-only discounts from the normal retail fees that participating offices typically charge self-pay patients for dental services rendered. Plan details and member savings are exclusive to participating offices and may vary by location. Membersy does not make payments directly to dental providers for services rendered to plan members. Members are obligated to pay for all dental services, but will receive a discount on services rendered by participating dental providers. The plan is not a qualified health plan under the Affordable Health Act. The plan does not meet the minimum creditable coverage requirements under MGLC.111M and 956 CMR 5.00. Discount Medical Plan Organization (“DMPO”) and plan administrator: Membersy LLC, 811 Barton Springs Rd. Ste. 750, Austin, TX 78704.</p>



        <div class="md:grid md:grid-cols-2 md:gap-8">
          {/* <p className="text-base text-white">VantageOne Dental Savings Plan is NOT INSURANCE, but rather a licensed dental savings plan offered through your local dental office. Members in good standing with their annual membership fee are eligible to receive transparent, member-only discounts from the normal retail fees that participating offices typically charge self-pay patients for dental services rendered. Plan details and member savings are exclusive to participating offices and may vary by location. Membersy does not make payments directly to dental providers for services rendered to plan members. Members are obligated to pay for all dental services, but will receive a discount on services rendered by participating dental providers. The plan is not a qualified health plan under the Affordable Health Act. The plan does not meet the minimum creditable coverage requirements under MGLC.111M and 956 CMR 5.00. Discount Medical Plan Organization (“DMPO”) and plan administrator: Membersy LLC, 811 Barton Springs Rd. Ste. 750, Austin, TX 78704.</p> */}

      











          
        </div>


      </div>


    </div>
    <div class="mt-12 border-t border-gray-200 pt-8">
      <p class="text-base leading-6 text-white xl:text-center">
        &copy; {new Date().getFullYear()} - Membersy LLC - All Rights Reserved
      </p>
    </div>
  </div>
</footer>

  );
}