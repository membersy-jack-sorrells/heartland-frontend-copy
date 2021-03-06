import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Image } from 'cloudinary-react';
import Head from 'next/head';
import GoogleMapReact from "google-map-react";
import { Layout } from "../components/layout/layout";
import { Toggle } from "../components/toggle";
import { offices } from '../data/find-a-dentist';
import { useInput } from '../hooks/useInput';


const ListItem = (props) => (
  <li className="border-b border-gray-200">
    <a
      className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
      onClick={props.handleListItemClick}
    >
      <div className="flex items-center px-4 py-4">
        <div className="min-w-0 flex-1 flex items-center">
          <div className="flex-shrink-0">
            <Image publicId="/vantageone/office-logo" height="70" width="70" />
          </div>
          <div className="min-w-0 flex-1 pl-4 md:grid md:grid-cols-4 md:gap-4">
            <div className="col-span-3">
              <div className="text-md leading-5 font-medium text-blue-600 truncate">
                {props.office.name}
              </div>
              <div className="mt-2 flex flex-col text-sm leading-5 text-gray-500">
                <span className="truncate">
                  {props.office.address}
                </span>
                <span className="truncate">
                  {props.office.city}, {props.office.state}  {props.office.zip}
                </span>
              </div>
            </div>
            <div className="flex items-end justify-end">
              <div className="text-sm leading-5 text-gray-900">
                <button 
                  type="button" 
                  class="inline-flex items-center px-1 py-1 border border-transparent text-xs leading-5 font-medium rounded-full text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-400 focus:shadow-outline-green active:bg-green-400 transition ease-in-out duration-150"
                >
                  <Link href="/individual-dentist">
                    <a>More Details</a>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  </li>
);

const MapMarker = ({ id, selectedOffice }) => (
  <div className="fill-current text-teal-600 text-lg" >
    <Image 
      publicId="vantageone/icons/map-marker-solid"
      className={`transform transition ease-in-out duration-500   ${ id === selectedOffice.name ? 'w-8' : 'w-4' }`}
    />
  </div>  
  );

export default function FindADentist() {
  const [showMap, setShowMap] = useState(true);
  const [zipInput, bindZipInput, resetZipInput] = useInput('');
  const [nameInput, bindNameInput, resetNameInput] = useInput('');
  const [mapCenter, setMapCenter] = useState({ lat: 27.6100487, lng: -83.0007337 });
  const [mapZoom, setMapZoom] = useState(7);
  const [numOffices, setNumOffices] = useState(offices.length);
  const [selectedOffice, setSelectedOffice] = useState(offices[0]);
  const [activeOffices, setActiveOffices] = useState(offices);

  const location = {
    address: "811 Barton Springs Rd. Suite 750 Austin, TX 78756",
    lat: 27.6100487,
    lng: -83.0007337
  };
  const defaultMapCenter = { lat: 27.6100487, lng: -83.0007337 };

  const handleClearSearches = () => {
    setMapCenter(defaultMapCenter);
    setActiveOffices(offices);
    setNumOffices(offices.length);
    resetZipInput();
    resetNameInput();
  }

  useEffect(() => {
    const filteredZipOffices = offices.filter((office) => office.zip.toString().indexOf(zipInput.toString()) > -1);
    setActiveOffices(filteredZipOffices);
    setNumOffices(filteredZipOffices.length);
  }, [zipInput])

  useEffect(() => {
    const filteredOffices = offices.filter((office) => office.name.toLowerCase().indexOf(nameInput.toLowerCase()) > -1);
    setActiveOffices(filteredOffices);
    setNumOffices(filteredOffices.length);
  }, [nameInput]);

  const handleListItemClick = (office) => {
    console.log('handle list item click');
    console.log('office -> ', office);

    setMapCenter({ lat: office.lat, lng: office.lng });
    setSelectedOffice(office);
  }


  return (
    <Layout>
      <Head>
        <title>Find a Dentist | VantageOne Dental Plan</title>
      </Head>


      <div className="relative py-20">
        <div className="mx-auto max-w-7xl lg:max-w-none lg:w-3/4 3xl:w-3/5">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-3xl py-8 font-black leading-7 text-white sm:text-6xl sm:leading-9">
                Find a Dentist
              </h2>
              <p className="text-white">
                Search by zip code or office name to find a participating
                VantageOne office near you.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute inset-y-0 right-0 w-full -z-10">
            <div className="bg-white h-auto w-full">
              <Image publicId="/vantageone/backgrounds/faq-hero-background-3x1" className="hidden lg:block 3xl:hidden w-full" />
              <Image publicId="/vantageone/backgrounds/faq-hero-background-5x1" className="hidden 3xl:block w-full" />
            </div>
          </div>
      </div>



      <div className="pb-20 mx-auto max-w-7xl lg:max-w-none lg:w-3/4 3xl:w-3/5">

        <div className="bg-white overflow-hidden shadow-md sm:rounded-lg">
          <div className={`px-4 py-5 sm:p-6 gap-6 grid ${showMap ? 'grid-cols-2': 'grid-cols-1'}`}>



            {/* List of Offices */}
            <div className="flex flex-col">

              {/* Top Search Section */}
              <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                  <div>
                    <label for="zipCode" className="sr-only">
                      Zip Code
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <input
                        id="zipCode"
                        className="form-input block w-full sm:text-sm sm:leading-5"
                        placeholder="Zip Code"
                        {...bindZipInput}
                      />
                    </div>
                  </div>
                  <div>
                    <label for="zipCode" className="sr-only">
                      Office Name
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <input
                        id="officeName"
                        className="form-input block w-full sm:text-sm sm:leading-5"
                        placeholder="Office Name"
                        {...bindNameInput}
                      />
                    </div>
                  </div>

                  <span className="inline-flex rounded-md shadow-sm">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition ease-in-out duration-150"
                      onClick={handleClearSearches}
                    >
                      Clear
                    </button>
                  </span>
                </div>

                <div className="flex flex-row justify-between py-4">
                  <span class="relative z-0 inline-flex shadow-sm rounded-md">
                    <button
                      type="button"
                      class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-blue-600 text-sm leading-5 font-medium text-white hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                    >
                      5 Miles
                    </button>
                    <button
                      type="button"
                      class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-600 text-sm leading-5 font-medium text-white hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                    >
                      10 Miles
                    </button>
                    <button
                      type="button"
                      class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-600 text-sm leading-5 font-medium text-white hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                    >
                      25 Miles
                    </button>
                    <button
                      type="button"
                      class="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-blue-600 text-sm leading-5 font-medium text-white hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                    >
                      50 Miles
                    </button>
                  </span>

                  <div className="flex items-center">
                    <span className="text-blue-600 text-sm pr-2">{showMap ? 'Hide map' : 'Show map'}</span>
                    <Toggle isChecked={showMap} setIsChecked={setShowMap} />
                  </div>
                </div>
              </div>

              {/* results section */}
              <div>
                <div className="flex pb-4">
                  <h3 className="text-blue-600 text-xl font-bold">Locations</h3>
                  <span className="pt-1 pl-4 text-gray-500">{numOffices} results</span>
                </div>

                <div className="bg-white shadow overflow-y-scroll sm:rounded-md" style={{ maxHeight: '50vh' }}>
                  <ul>

                    {activeOffices.map(office => (
                      <ListItem office={office} key={office.id} handleListItemClick={() => handleListItemClick(office)} />
                    ))}

                  </ul>
                </div>
              </div>
            </div>



            {/* Google Map */}
            {showMap && (
              <div style={{ height: "100%", width: "100%" }}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: "AIzaSyD_bBaGS6Hk_QgBQQxIwa8td2eU9sbOUtA" }}
                  defaultCenter={defaultMapCenter}
                  center={mapCenter}
                  defaultZoom={ 7 }
                  zoom={mapZoom}
                >

                  {activeOffices.map(office => (
                    <MapMarker 
                      lat={office.lat}
                      lng={office.lng}
                      key={office.name}
                      id={office.name}
                      selectedOffice={selectedOffice}
                    />
                  ))}
                </GoogleMapReact>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </Layout>
  );
}
