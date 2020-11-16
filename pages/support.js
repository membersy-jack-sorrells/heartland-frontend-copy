import React, { useState } from 'react';
import Link from "next/link";
import { Layout } from "../components/layout/layout";
import Head from 'next/head';
import GoogleMapReact from 'google-map-react';
import { Image, Transformation } from 'cloudinary-react';

const MapMarker = ({ text }) => (
  <div className="fill-current text-teal-600">
    <Image publicId="vantageone/icons/map-marker-solid" height="15" width="15" />
  </div>  
  );

  

export default function Support() {
  const mapCenter = { lat: 30.259999, lng: -97.7553417 };
  const defaultMapCenter = { lat: 30.259999, lng: -97.7553417 };
  const mapZoom = 15;


  return (
    <Layout>
      <Head>
        <title>Support | VantageOne</title>
      </Head>


      <section className="relative">
        <div className="block md:hidden pb-2/5 relative">
          <Image 
            publicId="/vantageone/backgrounds/faq-hero-background-5x2.png" 
            className="w-full h-auto object-cover absolute" 
          >
            <Transformation width="auto" height="auto" />
          </Image>
        </div>
        <div className="hidden md:block 3xl:hidden pb-1/3 relative">
          <Image 
            publicId="/vantageone/backgrounds/faq-hero-background-3x1" 
            className="w-full h-auto object-cover absolute" 
          >
            <Transformation width="auto" height="auto" />
          </Image>
        </div>
        <div className="hidden 3xl:block pb-1/5 relative">
          <Image 
            publicId="/vantageone/backgrounds/faq-hero-background-5x1" 
            className="w-full h-auto object-cover absolute" 
          >
            <Transformation width="auto" height="auto" />
          </Image>
        </div>

        <div className="absolute top-0 w-full pt-12 lg:pt-14 xl:pt-24 3xl:pt-32">
          <div className="w-3/4 xl:w-2/3 3xl:w-1/2 mx-auto">
            <h2 className="text-3xl py-3 md:py-8 font-black leading-7 text-white xl:text-6xl sm:leading-9">
              Support
            </h2>
            <p className="text-white text-xl py-4">
              Our team is here to help; please find your dedicated support option below.
            </p>
          </div>
        </div>

      </section>







      <div className="">
        <div className="relative bg-white">
          <div className="absolute inset-0">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
          </div>
          <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
            <div className="py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
              <div className="max-w-lg mx-auto">
                <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
                  Message Us
                </h2>
                <p className="mt-3 text-lg leading-6 text-gray-500">
                  Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                  volutpat massa dictumst amet. Sapien tortor lacus arcu.
                </p>
                <dl className="mt-8 text-base leading-6 text-gray-500">
                  <div>
                    <dt className="sr-only">Postal address</dt>
                    <dd>
                      <p>811 Barton Springs Rd. Ste. 750</p>
                      <p>Austin, TX 78704</p>
                    </dd>
                  </div>
                  <div className="mt-6">
                    <dd className="pb-4">Have Questions?</dd>
                    <dt className="sr-only">Phone number</dt>
                    <dd className="flex">
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span className="ml-3">(877) 545-4188</span>
                    </dd>
                  </div>
                </dl>

              </div>
            </div>
            <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
              <div className="max-w-lg mx-auto lg:max-w-none">
                <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
                  <div>
                    <label for="full_name" className="sr-only">
                      Full name
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <input
                        id="full_name"
                        className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
                        placeholder="Full name"
                      />
                    </div>
                  </div>
                  <div>
                    <label for="email" className="sr-only">
                      Email
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <input
                        id="email"
                        type="email"
                        className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div>
                    <label for="phone" className="sr-only">
                      Phone
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <input
                        id="phone"
                        className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div>
                    <label for="message" className="sr-only">
                      Message
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <textarea
                        id="message"
                        rows="4"
                        className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="">
                    <span className="inline-flex rounded-md shadow-sm">
                      <button
                        type="submit"
                        className="inline-flex justify-center py-3 px-6 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-400 focus:shadow-outline-green active:bg-green-400 transition duration-150 ease-in-out"
                      >
                        Submit
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </Layout>
  );
}
