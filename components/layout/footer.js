import React from "react";
import Link from 'next/link';
import { Image } from "cloudinary-react";
import { footerNavigation } from "../../data/footer";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="flex flex-col mx-auto items-center text-white bg-blue-600">
          <div className="mx-auto max-w-7xl lg:max-w-none lg:w-3/4 3xl:w-3/5 ">
            <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col py-5 px-5 divide-x">
              <div className="px-2 lg:w-2/6 md:w-2/6 sm:w-full">
                <p>powered by:</p>
                <Image
                  cloudName="membersy"
                  publicId="vantageone/membersy-logo-white.png"
                />
                <p>
                  Our purpose is to grow the membership dentistry movement. That
                  goes beyond creating the best membership experiences in the
                  market; it means revolutionizing the way people access and pay
                  for dental care.
                </p>
              </div>
              <div className="flex flex-col justify-between px-4 lg:w-1/6 md:w-1/6 sm:w-full w-full">
                {footerNavigation.map(({ title, href }) => (
                  <Link href={href} key={title}><a>{title}</a></Link>
                ))}
              </div>
              <div className="pl-4 lg:w-3/6 md:w-3/6 sm:w-full w-full">
                <p className="text-xs">
                  VantageOne Dental Savings Plan is NOT INSURANCE, but rather a
                  licensed dental savings plan offered through your local dental
                  office. Members in good standing with their annual membership
                  fee are eligible to receive transparent, member-only discounts
                  from the normal retail fees that participating offices
                  typically charge self-pay patients for dental services
                  rendered. Plan details and member savings are exclusive to
                  participating offices and may vary by location. Membersy does
                  not make payments directly to dental providers for services
                  rendered to plan members. Members are obligated to pay for all
                  dental services, but will receive a discount on services
                  rendered by participating dental providers. The plan is not a
                  qualified health plan under the Affordable Health Act. The
                  plan does not meet the minimum creditable coverage
                  requirements under MGLC.111M and 956 CMR 5.00. Discount
                  Medical Plan Organization (“DMPO”) and plan administrator:
                  Membersy LLC, 811 Barton Springs Rd. Ste. 750, Austin, TX
                  78704.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* subfooter */}
        <div className="bg-blue-400 py-2 text-white flex w-full">
          <div className="text-center w-full">
            <span>
              © {new Date().getFullYear()} - Membersy LLC - All Rights Reserved
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};
