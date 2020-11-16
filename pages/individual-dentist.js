import React, { useState } from "react";
import Link from "next/link";
import { Image } from 'cloudinary-react';
import Head from 'next/head';
import GoogleMapReact from "google-map-react";
import { Layout } from "../components/layout/layout";
import { Toggle } from "../components/toggle";
import { offices } from '../data/find-a-dentist';



const MapMarker = ({ text }) => (
  <div className="fill-current text-teal-600">
    <Image publicId="vantageone/icons/map-marker-solid" height="15" width="15" />
  </div>  
  );

export default function IndividualDentist() {
  const office = {
    "name": "Family Dental at Alafaya Crossings, Oviedo",
    "address": "1984 Alafaya Trl, Ste 1006",
    "address2": "",
    "city": "Oviedo",
    "state": "FL",
    "email": "alafayacrossings@mydentalmail.com",
    "phone": "(407) 542-1542",
    "region": "Florida (VODP)",
    "feeSchedule": "VODP-FEES-GEN",
    "lat": 28.641419,
    "lng": -81.208652,
    "zip": 32765
  };

  const [mapCenter, setMapCenter] = useState({ lat: office.lat, lng: office.lng });
  const [mapZoom, setMapZoom] = useState(10);
  const defaultMapCenter = { lat: office.lat, lng: office.lng };
  






  return (
    <Layout>
      <Head>
        <title>Individual Dentist | VantageOne Dental Plan</title>
      </Head>


      <div className="mx-auto">
        {/* Google Map */}
        <div style={{ height: "30vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyD_bBaGS6Hk_QgBQQxIwa8td2eU9sbOUtA" }}
            defaultCenter={defaultMapCenter}
            center={mapCenter}
            defaultZoom={ 7 }
            zoom={mapZoom}
          >
            <MapMarker 
              lat={mapCenter.lat}
              lng={mapCenter.lng}
              text="Membersy Office"
            />
          </GoogleMapReact>
        </div>
      </div>


      <div className="mx-auto container">
        <div className="max-w-7xl mx-auto grid grid-cols-3">
          <div className="pr-4 mx-auto z-10">
            <Image 
              publicId="vantageone/office-logo" 
              className="-mt-6"
            />
          </div>

          <div className="col-span-2">
            <div className="flex space-x-4 py-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium leading-4 bg-green-600 text-white">
                General Dentistry
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium leading-4 bg-teal-600 text-white">
                Specialty Dentistry
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium leading-4 bg-blue-600 text-white">
                Orthodontics
              </span>
            </div>
            <h1 className="text-blue-600 text-5xl font-black tracking-wide leading-tight">{office.name}</h1>
            

            <div className="flex flex-row py-6">
              <div className="py-1 pr-6">
                <Image publicId="vantageone/icons/phone-icon" height="30" width="30" />
              </div>
              <span className="text-xl text-dark-gray font-bold">
                {office.phone}
              </span>
            </div>






            <div className="flex flex-row py-2">
              <div className="py-2 pr-6">
                <Image publicId="vantageone/icons/map-marker-solid" height="25" width="25" />
              </div>
              <div className="flex flex-col text-xl text-dark-gray font-bold">
                <span>{office.address}</span>
                <span>{office.city}, {office.state} {office.zip}</span>
              </div>
            </div>





          </div>

        </div>

        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <h2 className="text-blue-600 text-3xl py-4 ">Membership dentistry has arrived - become a member today!</h2>
          <p className="text-dark-gray text-xl pt-4 pb-12">We value your loyalty; for {office.name} patients without insurance, we’ve launched our dental membership plan to simplify how you pay for your dental care. For a low annual fee starting at <strong>$79</strong> per year, you’ll receive exclusive access to a wide range of discounts on most dental procedures.</p>
        </div>

        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          


            
            <div className="bg-white">
              <div className="max-w-screen-xl mx-auto bg-white py-16 sm:py-24 sm:px-6 lg:px-8">













                {/* <!-- xs to lg --> */}
                <div className="max-w-2xl mx-auto lg:hidden">
                  <div className="px-4">
                    <div className="relative h-full w-full text-center table">
                      <Image 
                        publicID="/vantageone/VantageOne-classic-logo" 
                        className="mx-auto"
                      />
                      <p className="pt-6 pb-4 text-md leading-5 text-gray-500">Starting at</p>
                      <p className="mb-4">
                        <span className="text-4xl leading-10 font-extrabold text-blue-600">$79</span>
                        <span className="text-base leading-6 font-medium text-gray-500">/yr</span>
                      </p>
                      <button 
                        type="button" 
                        className="flex-grow w-3/4 bg-green-600 rounded-full 5 py-2 text-xs leading-5 font-semibold text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray transition duration-150 ease-in-out"
                      >
                        Select Membership
                      </button>
                    </div>
                  </div>

                  <table className="mt-8 w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr className="border-t border-gray-200">
                        <th className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left" scope="row">50% OFF EXAMS</th>
                        <td className="py-5 pr-4">
                          <Image
                            publicId="/vantageone/home/circle-check-icon"
                            height="19"
                            width="19"
                            className="ml-auto"
                          />
                          <span className="sr-only">Yes</span>
                        </td>
                      </tr>

                      <tr className="border-t border-gray-200">
                        <th className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left" scope="row">50% OFF X-RAYS</th>
                        <td className="py-5 pr-4">
                          <Image
                            publicId="/vantageone/home/circle-check-icon"
                            height="19"
                            width="19"
                            className="ml-auto"
                          />
                          <span className="sr-only">Yes</span>
                        </td>
                      </tr>

                      <tr className="border-t border-gray-200">
                        <th className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left" scope="row">20-50% OFF MOST OTHER SERVICES</th>
                        <td className="py-5 pr-4">
                          <Image
                            publicId="/vantageone/home/circle-check-icon"
                            height="19"
                            width="19"
                            className="ml-auto"
                          />
                          <span className="sr-only">Yes</span>
                        </td>
                      </tr>

                    </tbody>
                  </table>















                  <div className="px-4 mt-16">
                    <div className="relative h-full w-full text-center table">
                      <Image 
                        publicID="/vantageone/VantageOne-premium-logo" 
                        className="mx-auto"
                      />
                      <p className="pt-6 pb-4 text-md leading-5 text-gray-500">Starting at</p>
                      <p className="mb-4">
                        <span className="text-4xl leading-10 font-extrabold text-blue-600">$159</span>
                        <span className="text-base leading-6 font-medium text-gray-500">/yr</span>
                      </p>
                      <button 
                        type="button" 
                        className="flex-grow w-3/4 bg-green-600 rounded-full 5 py-2 text-xs leading-5 font-semibold text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray transition duration-150 ease-in-out">
                          Select Membership
                        </button>
                    </div>
                  </div>

                  <table className="mt-8 w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr className="border-t border-gray-200">
                        <th className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left" scope="row">FREE EXAMS</th>
                        <td className="py-5 pr-4">
                          <Image
                            publicId="/vantageone/home/circle-check-icon"
                            height="19"
                            width="19"
                            className="ml-auto"
                          />
                          <span className="sr-only">Yes</span>
                        </td>
                      </tr>

                      <tr className="border-t border-gray-200">
                        <th className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left" scope="row">FREE X-RAYS</th>
                        <td className="py-5 pr-4">
                          <Image
                            publicId="/vantageone/home/circle-check-icon"
                            height="19"
                            width="19"
                            className="ml-auto"
                          />
                          <span className="sr-only">Yes</span>
                        </td>
                      </tr>

                      <tr className="border-t border-gray-200">
                        <th className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left" scope="row">20-50% OFF MOST OTHER SERVICES</th>
                        <td className="py-5 pr-4">
                          <Image
                            publicId="/vantageone/home/circle-check-icon"
                            height="19"
                            width="19"
                            className="ml-auto"
                          />
                          <span className="sr-only">Yes</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="px-4 mt-16">
                    <div className="relative h-full w-full text-center table">
                      <Image 
                        publicID="/vantageone/VantageOne-premium-plus-logo" 
                        className="mx-auto"
                      />
                      <p className="pt-6 pb-4 text-md leading-5 text-gray-500">Starting at</p>
                      <p className="mb-4">
                        <span className="text-4xl leading-10 font-extrabold text-blue-600">$299</span>
                        <span className="text-base leading-6 font-medium text-gray-500">/yr</span>
                      </p>
                      <button type="button" className="flex-grow w-3/4 bg-green-600 rounded-full 5 py-2 text-xs leading-5 font-semibold text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray transition duration-150 ease-in-out">Select Membership</button>
                    </div>
                  </div>

                  <table className="mt-8 w-full">
                    <tbody className="divide-y divide-gray-200">

                      <tr className="border-t border-gray-200">
                        <th className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left" scope="row">FREE EXAMS</th>
                        <td className="py-5 pr-4">
                          <Image
                            publicId="/vantageone/home/circle-check-icon"
                            height="19"
                            width="19"
                            className="ml-auto"
                          />
                          <span className="sr-only">Yes</span>
                        </td>
                      </tr>

                      <tr className="border-t border-gray-200">
                        <th className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left" scope="row">FREE X-RAYS</th>
                        <td className="py-5 pr-4">
                          <Image
                            publicId="/vantageone/home/circle-check-icon"
                            height="19"
                            width="19"
                            className="ml-auto"
                          />
                          <span className="sr-only">Yes</span>
                        </td>
                      </tr>

                      <tr className="border-t border-gray-200">
                        <th className="py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left" scope="row">20-50% OFF MOST OTHER SERVICES</th>
                        <td className="py-5 pr-4">
                          <Image
                            publicId="/vantageone/home/circle-check-icon"
                            height="19"
                            width="19"
                            className="ml-auto"
                          />
                          <span className="sr-only">Yes</span>
                        </td>
                      </tr>

                    </tbody>
                  </table>

                </div>






























                {/* <!-- lg+ --> */}
                <div className="hidden lg:block">
                  <table className="w-full h-px table-fixed">
                    <caption className="sr-only">
                      Pricing plan comparison
                    </caption>
                    <thead>
                      <tr>
                        <th className="w-2/5 py-8 px-6 text-sm leading-5 font-medium text-gray-900 text-left align-top" scope="row">
                          <div className="p-4 bg-gray-200 rounded-lg">
                            <h3 className="text-xl font-bold text-dark-gray">Membership Pricing</h3>
                            <p className="text-dark-gray py-2">With annual and monthly payment options available, saving on your dental care has never been easier.</p>
                            <button
                              className="text-white bg-green-600 rounded-full py-2 px-4"
                            >
                              View Full Pricing
                            </button> 
                          </div>
                        </th>

                        <td className="w-1/5 h-full py-8 px-6 align-top">
                          <div className="relative h-full w-full text-center table">
                            <Image 
                              publicID="/vantageone/VantageOne-classic-logo" 
                              className="mx-auto"
                            />
                            <p className="pt-6 pb-4 text-md leading-5 text-gray-500">Starting at</p>
                            <p className="mb-4">
                              <span className="text-4xl leading-10 font-extrabold text-blue-600">$79</span>
                              <span className="text-base leading-6 font-medium text-gray-500">/yr</span>
                            </p>
                            <button type="button" className="flex-grow w-3/4 bg-green-600 rounded-full 5 py-2 text-xs leading-5 font-semibold text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray transition duration-150 ease-in-out">Select Membership</button>
                          </div>
                        </td>

                        <td className="w-1/5 h-full py-8 px-6 align-top">
                          <div className="relative h-full w-full text-center table">
                            <Image 
                              publicID="/vantageone/VantageOne-premium-logo" 
                              className="mx-auto"
                            />
                            <p className="pt-6 pb-4 text-md leading-5 text-gray-500">Starting at</p>
                            <p className="mb-4">
                              <span className="text-4xl leading-10 font-extrabold text-blue-600">$159</span>
                              <span className="text-base leading-6 font-medium text-gray-500">/yr</span>
                            </p>
                            <button type="button" className="flex-grow w-3/4 bg-green-600 rounded-full 5 py-2 text-xs leading-5 font-semibold text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray transition duration-150 ease-in-out">Select Membership</button>
                          </div>
                        </td>

                        <td className="w-1/5 h-full py-8 px-6 align-top">
                          <div className="relative h-full w-full text-center table">
                            <Image 
                              publicID="/vantageone/VantageOne-premium-plus-logo" 
                              className="mx-auto"
                            />
                            <p className="pt-6 pb-4 text-md leading-5 text-gray-500">Starting at</p>
                            <p className="mb-4">
                              <span className="text-4xl leading-10 font-extrabold text-blue-600">$299</span>
                              <span className="text-base leading-6 font-medium text-gray-500">/yr</span>
                            </p>
                            <button type="button" className="flex-grow w-3/4 bg-green-600 rounded-full 5 py-2 text-xs leading-5 font-semibold text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray transition duration-150 ease-in-out">Select Membership</button>
                          </div>
                        </td>
                        <td></td>
                      </tr>
                    </thead>
                    <tbody 
                      // className="divide-y divide-gray-200"
                    >
                      <tr>
                        <th class="bg-blue-600 py-3 pl-6 rounded-t-full" colspan="4" scope="colgroup"></th>
                      </tr>
                      <tr>
                        <th className="py-5 px-6 text-sm leading-5 font-normal text-white text-left bg-blue-600 " scope="row">50% OFF EXAMS</th>
                        <td className="py-5 px-6">
                          <Image
                            publicId="/vantageone/home/circle-check-icon"
                            height="19"
                            width="19"
                            className="mx-auto"
                          />
                          <span className="sr-only">Included in Basic</span>
                        </td>
                        <td className="py-5 px-6">
                          <Image 
                            publicId="/vantageone/icons/x-outline-icon"
                            height="20"
                            width="20"
                            className="mx-auto"
                          />
                          <span className="sr-only">Not included in Essential</span>
                        </td>
                        <td className="py-5 px-6">
                          <Image 
                            publicId="/vantageone/icons/x-outline-icon"
                            height="20"
                            width="20"
                            className="mx-auto"
                          />
                          <span className="sr-only">Not included in Premium</span>
                        </td>
                        <td className="bg-blue-600 mx-4">

                        </td>
                      </tr>

                      <tr>
                        <th className="py-5 px-6 text-sm leading-5 font-normal text-white text-left bg-blue-600" scope="row">50% OFF X-RAYS</th>
                        <td className="py-5 px-6">
                          <Image
                            publicId="/vantageone/home/circle-check-icon"
                            height="19"
                            width="19"
                            className="mx-auto"
                          />
                          <span className="sr-only">Included in Basic</span>
                        </td>
                        <td className="py-5 px-6">
                          <Image 
                            publicId="/vantageone/icons/x-outline-icon"
                            height="20"
                            width="20"
                            className="mx-auto"
                          />
                          <span className="sr-only">Not included in Essential</span>
                        </td>
                        <td className="py-5 px-6">
                          <Image 
                            publicId="/vantageone/icons/x-outline-icon"
                            height="20"
                            width="20"
                            className="mx-auto"
                          />
                          <span className="sr-only">Not included in Premium</span>
                        </td>
                        <td className="bg-blue-600 mx-4">

                        </td>
                      </tr>

                      <tr>
                        <th className="py-5 px-6 text-sm leading-5 font-normal text-white text-left bg-blue-600" scope="row">
                          FREE EXAMS
                        </th>
                        <td className="py-5 px-6">
                          <Image 
                            publicId="/vantageone/icons/x-outline-icon"
                            height="20"
                            width="20"
                            className="mx-auto"
                          />
                          <span className="sr-only">Not included in Basic</span>
                        </td>
                        <td className="py-5 px-6">
                          <Image
                            publicId="/vantageone/home/circle-check-icon"
                            height="19"
                            width="19"
                            className="mx-auto"
                          />
                          <span className="sr-only">Included in Essential</span>
                        </td>
                        <td className="py-5 px-6">
                          <Image
                            publicId="/vantageone/home/circle-check-icon"
                            height="19"
                            width="19"
                            className="mx-auto"
                          />
                          <span className="sr-only">Included in Premium</span>
                        </td>
                        <td className="bg-blue-600 mx-4">

                        </td>
                      </tr>

                      <tr>
                        <th className="py-5 px-6 text-sm leading-5 font-normal text-white text-left bg-blue-600" scope="row">FREE X-RAYS</th>
                        <td className="py-5 px-6">
                          <Image 
                            publicId="/vantageone/icons/x-outline-icon"
                            height="20"
                            width="20"
                            className="mx-auto"
                          />
                          <span className="sr-only">Not included in Basic</span>
                        </td>
                        <td className="py-5 px-6">
                          <Image
                            publicId="/vantageone/home/circle-check-icon"
                            height="19"
                            width="19"
                            className="mx-auto"
                          />
                          <span className="sr-only">Included in Essential</span>
                        </td>
                        <td className="py-5 px-6">
                          <Image
                            publicId="/vantageone/home/circle-check-icon"
                            height="19"
                            width="19"
                            className="mx-auto"
                          />
                          <span className="sr-only">Included in Premium</span>
                        </td>
                        <td className="bg-blue-600 mx-4">

                        </td>
                      </tr>

                      <tr>
                        <th className="py-5 px-6 text-sm leading-5 font-normal text-white text-left bg-blue-600" scope="row">FREE CLEANINGS</th>
                        <td className="py-5 px-6">
                          <Image 
                            publicId="/vantageone/icons/x-outline-icon"
                            height="20"
                            width="20"
                            className="mx-auto"
                          />
                          <span className="sr-only">Not included in Basic</span>
                        </td>
                        <td className="py-5 px-6">
                          <Image 
                            publicId="/vantageone/icons/x-outline-icon"
                            height="20"
                            width="20"
                            className="mx-auto"
                          />
                          <span className="sr-only">Not included in Essential</span>
                        </td>
                        <td className="py-5 px-6">
                          <Image
                            publicId="/vantageone/home/circle-check-icon"
                            height="19"
                            width="19"
                            className="mx-auto"
                          />
                          <span className="sr-only">Included in Premium</span>
                        </td>
                        <td className="bg-blue-600 mx-4">

                        </td>
                      </tr>

                      <tr>
                        <th className="py-5 px-6 text-sm leading-5 font-normal text-white text-left bg-blue-600" scope="row">20-50% OFF MOST OTHER SERVICES</th>
                        <td className="py-5 px-6">
                          <Image
                            publicId="/vantageone/home/circle-check-icon"
                            height="19"
                            width="19"
                            className="mx-auto"
                          />
                          <span className="sr-only">Included in Basic</span>
                        </td>
                        <td className="py-5 px-6">
                          <Image
                            publicId="/vantageone/home/circle-check-icon"
                            height="19"
                            width="19"
                            className="mx-auto"
                          />
                          <span className="sr-only">Included in Essential</span>
                        </td>
                        <td className="py-5 px-6">
                          <Image
                            publicId="/vantageone/home/circle-check-icon"
                            height="19"
                            width="19"
                            className="mx-auto"
                          />
                          <span className="sr-only">Included in Premium</span>
                        </td>
                        <td className="bg-blue-600">

                        </td>
                      </tr>
                      <tr>
                        <th class="bg-blue-600 py-3 pl-6 rounded-b-full" colspan="4" scope="colgroup"></th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>








        </div>

        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <p>If paying monthly, your account will be billed $79 per member, plus first month’s payment installment. Monthly, thereafter, you will be billed every 30 days  from the subscription’s original start date. Monthly option is only available for accounts paying with credit/debit card.</p>
        </div>


      </div>
    </Layout>
  );
}
