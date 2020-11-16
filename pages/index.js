import { Layout } from "../components/layout/layout";
import Link from 'next/link';
import { Image, Transformation } from "cloudinary-react";
import Head from 'next/head';
import { membershipFeaturesData } from '../data/homePage';

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Dental Membership Plan | VantageOne</title>
      </Head>






        <section className="relative">
          <div className="hidden sm:hidden relative pb-full bg-red-400 -z-10" >
            <Image 
              publicId="/vantageone/backgrounds/home-hero-background-1x1.png" 
              className="w-full h-auto object-cover absolute"
            >
              <Transformation height="auto" width="auto" />
            </Image>
          </div>
          <div className="hidden sm:hidden md:hidden relative bg-red-400 pb-14/16 -z-10">
            <Image 
              publicId="/vantageone/backgrounds/home-hero-background-14x16.png" 
              className="w-full h-auto object-cover absolute"
            >
              <Transformation height="auto" width="auto" />
            </Image>

          </div>
          <div className="hidden md:block lg:hidden pb-3/4 relative -z-10">
            <Image 
              publicId="/vantageone/backgrounds/home-hero-background-4x3" 
              className="w-full h-auto object-cover absolute"
            >
              <Transformation height="auto" width="auto" />
            </Image>
          </div>
          <div className="hidden lg:block pb-9/16 relative -z-10">
            <Image 
              publicId="/vantageone/backgrounds/home-hero-background-16x9" 
              className="w-full h-auto object-cover absolute"
            >
              <Transformation height="auto" width="auto" />
            </Image>
          </div>

          <div className="relatve bg-blue-600 md:bg-transparent  md:absolute top-0 w-full md:pt-12 xl:pt-20">
            <div className="w-4/5 md:w-11/12 xl:w-4/5 xl:w-2/3 mx-auto">
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-white sm:leading-none md:text-5xl lg:text-6xl pt-8 lg:pt-12 3xl:pt-32 3xl:pb-12 3xl:text-8xl">
                Your smile.
                <br />
                Your choice.
              </h2>
              <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:mx-auto md:max-w-1/2 md:ml-0 md:mr-auto md:mt-5 lg:text-xl lg:mx-0 3xl:text-2xl 3xl:pb-8">
                VantageOne Dental Savings Plan members experience a different
                approach to traditional and outdated dental insurance. All members
                receive INCREDIBLE SAVINGS on their dental care, tons of perks and
                members-only exclusives - all starting on day one.{" "}
                <a className="text-green-600" href="/join-now">
                  JOIN TODAY!
                </a>
              </p>
              <div className="mt-5 sm:mt-8 sm:flex justify-center sm:justify-start 3xl:pb-12">
                <div className="rounded-md shadow">
                  <a
                    href="/"
                    className="w-full flex items-center justify-center px-10 py-3 border border-transparent text-base leading-6 font-medium rounded-full text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10 3xl:text-xl"
                  >
                    Join now
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/"
                    className="w-full flex items-center justify-center px-10 py-3 border border-transparent text-base leading-6 font-medium rounded-full text-white bg-teal-600 hover:text-white hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10 3xl:text-xl"
                  >
                    Learn more
                  </a>
                </div>
              </div>


              <div className="pt-4 pb-12 md:pb-32">
                <div className="mt-2 flex rounded-full bg-white shadow-sm sm:w-2/3 lg:w-1/2 3xl:w-2/5 py-1 px-2 3xl:py-3 3xl:px-3 justify-between">
                  <div className="relative flex items-stretch focus-within:z-10 w-5/6">
                    <input 
                      id="email" 
                      className="form-input block w-full rounded-none rounded-l-full pl-10 transition ease-in-out duration-150 sm:text-md sm:leading-5 border-none" 
                      placeholder="Enter Your Zip Code" 
                    />
                  </div>
                  <button 
                    className="mr-1 relative inline-flex items-center px-4 py-2 border border-gray-300 text-md leading-5 font-medium rounded-full text-white bg-green-600 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                  >
                    <span className="ml-2">
                      Sort
                    </span>
                  </button>
                </div>
              </div>
            </div>


            {/* <div className="absolute top-0 pb-full">
              <Image 
                publicId="/vantageone/backgrounds/home-hero-background-1x1.png" 
                className="w-full h-auto object-cover absolute"
              >
                <Transformation height="auto" width="auto" />
              </Image>
            </div> */}

            


            
          </div>


        </section>











        {/* <div className="mx-auto max-w-7xl lg:max-w-none lg:w-3/4 3xl:w-3/5 h-4/5 lg:min-h-full 3xl:h-2/3 pb-20 pt-20 sm:text-center md:text-left lg:text-left">
          <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl lg:pt-12 3xl:py-24">
            Your smile.
            <br />
            Your choice.
          </h2>
          <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            VantageOne Dental Savings Plan members experience a different
            approach to traditional and outdated dental insurance. All members
            receive INCREDIBLE SAVINGS on their dental care, tons of perks and
            members-only exclusives - all starting on day one.{" "}
            <a className="text-green-600" href="/join-now">
              JOIN TODAY!
            </a>
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="/"
                className="w-full flex items-center justify-center px-10 py-3 border border-transparent text-base leading-6 font-medium rounded-full text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Join now
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="/"
                className="w-full flex items-center justify-center px-10 py-3 border border-transparent text-base leading-6 font-medium rounded-full text-white bg-teal-600 hover:text-white hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Learn more
              </a>
            </div>
          </div>

          <div className="pt-4 pb-32">
            <div className="mt-2 flex rounded-full bg-white shadow-sm w-2/5 py-1 px-2 3xl:py-3 3xl:px-3 justify-between">
              <div className="relative flex items-stretch focus-within:z-10 w-5/6">
                <input id="email" className="form-input block w-full rounded-none rounded-l-full pl-10 transition ease-in-out duration-150 sm:text-md sm:leading-5 border-none" placeholder="Enter Your Zip Code" />
              </div>
              <button className="mr-1 relative inline-flex items-center px-4 py-2 border border-gray-300 text-md leading-5 font-medium rounded-full text-white bg-green-600 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
                <span className="ml-2">Sort</span>
              </button>
            </div>
          </div>





          <div className="absolute inset-y-0 right-0 w-full h-full -z-10">
            <Image
              publicId="/vantageone/home/hero-background-3200x1600"
              className="hidden 3xl:block h-auto w-full object-cover"
            >
              <Transformation width="auto" height="auto" />
            </Image>
            <Image
              publicId="/vantageone/home/hero-background-1920x1080"
              className="h-auto w-full object-cover hidden xl:block 3xl:hidden"
            >
              <Transformation width="auto" height="auto" />
            </Image>
            <Image
              publicId="/vantageone/home/hero-background"
              className="h-auto w-full object-cover sm:w-full md:w-full lg:w-full lg:h-auto"
            />
            <Image 
              publicId="/vantageone/home/hero-background-500x805
              className="h-auto w-full object-cover sm:w-full md:w-full lg:w-full lg:h-auto"
            /> "
          </div>
        </div> */}












        {/* membership features section */}
        <div className="py-32 bg-white 3xl:pb-64 3xl:py-24">
          <div className="mx-auto max-w-7xl lg:max-w-none lg:w-3/4 3xl:w-3/5 px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-4 lg:gap-8">
     
              {membershipFeaturesData.map(item => (
                <div className="mt-10 lg:mt-0">
                  <div className="flex items-center justify-center h-12 w-12 text-white">
                    <Image publicId={item.iconHref} />
                  </div>
                  <div className="mt-5">
                    <h5 className="py-2 text-2xl leading-6 font-bold text-blue-600 3xl:text-4xl 3xl:font-semibold 3xl:py-4">{item.title}</h5>
                    <p className="mt-2 text-lg leading-6 text-gray-500 3xl:text-2xl ">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>




        {/* how it works section */}
        

        <section className="relative bg-blue-600 lg:bg-transparent lg:pb-1/16">
          <div className="relative hidden 3xl:block pb-5/16">
            <Image 
              publicId="/vantageone/backgrounds/home-midpage-hero-background-5x16" 
              className="w-full h-auto object-cover absolute" 
            />
          </div>
          <div className="relative hidden lg:block 3xl:hidden pb-5/12">
            <Image 
              publicId="/vantageone/backgrounds/home-midpage-hero-background-5x12" 
              className="w-full h-auto object-cover absolute" 
            />
          </div>

          <div className=" lg:absolute top-0 w-full">
            <div className="mx-auto max-w-7xl lg:max-w-none lg:w-3/4 3xl:w-3/5">



              <div className="w-3/5 2x:w-1/2 lg:ml-auto 3xl:mx-auto lg:pt-20 3xl:pt-32 pb-12">
                <h2 className="text-4xl leading-9 tracking-wider font-extrabold text-white sm:text-6xl sm:leading-10 3xl:text-8xl">
                  How It Works
                </h2>
                <p className="py-2 3xl:py-4 mt-3 text-xl tracking-wide leading-7 text-teal-600 sm:mt-4 3xl:text-2xl 3xl:leading-9 3xl:py-12">
                  VantageOne Dental Savings Plan provides you and your family with access to quality dental care at an affordable price. It enables you to get the services you need, exactly when you need them.
                </p>
                <span className="inline-flex rounded-md py-4">
                  <button 
                    type="button" 
                    className="inline-flex items-center px-12 py-4 border border-transparent text-lg leading-5 font-medium rounded-full text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-400 focus:shadow-outline-green active:bg-green-400 transition ease-in-out duration-150 3xl:text-2xl"
                  >
                    Get Started
                  </button>
                </span>

              </div>


              <div className="grid lg:grid-cols-3 gap-8 3xl:gap-32">

                <div className="w-5/6 mx-auto lg:w-full relative shadow-md rounded-md">
                  <div className="relative pb-full">
                    <Image 
                      publicId="vantageone/home/card1" 
                      className="w-full h-auto object-cover absolute"
                    >
                      <Transformation height="auto" width="auto" />
                    </Image>
                  </div>

                  <div className="absolute top-0 w-full text-center py-8 px-4 3xl:py-28">
                    <Image 
                      publicId="vantageone/home/map-marker-icon.png" 
                      className="inline-flex" 
                    />
                    <h3 className="mt-6 text-3xl leading-7 font-semibold text-blue-600 3xl:text-4xl 3xl:py-4">
                      <Link href="/find-a-dentist">
                        <a>Pick Your Office</a>
                      </Link>
                    </h3>
                    <p className="mt-6 text-xl tracking-wide leading-8 text-gray-500 3xl:px-24">
                      Use Your membership right away at a growing community of XX+ VantageOne participating offices located across Florida.
                    </p>
                  </div>
                </div>

                <div className="w-5/6 mx-auto lg:w-full relative shadow-md rounded-md">
                  <div className="relative pb-full">
                    <Image 
                      publicId="vantageone/home/card2" 
                      className="w-full h-auto object-cover absolute"
                    >
                      <Transformation height="auto" width="auto" />
                    </Image>
                  </div>

                  <div className="absolute top-0 w-full text-center py-8 px-4 3xl:py-28">
                    <Image 
                      publicId="vantageone/home/check-list-icon.png" 
                      className="inline-flex" 
                    />
                    <h3 className="mt-6 text-3xl leading-7 font-semibold text-white 3xl:text-4xl 3xl:py-4">
                      Select Membership
                    </h3>
                    <p className="mt-6 text-xl tracking-wide leading-8 text-gray-500 3xl:px-24">
                      Whether you need a membership for just you or the entire family, we've got options. Simply select the plan type that works best for you.
                    </p>
                  </div>
                </div>

                <div className="w-5/6 mx-auto lg:w-full relative shadow-md rounded-md">
                  <div className="relative pb-full">
                    <Image 
                      publicId="vantageone/home/card3" 
                      className="w-full h-auto object-cover absolute"
                    >
                      <Transformation height="auto" width="auto" />
                    </Image>
                  </div>

                  <div className="absolute top-0 w-full text-center py-8 px-4 3xl:py-28">
                    <Image 
                      publicId="vantageone/home/money-sun-icon.png" 
                      className="inline-flex" 
                    />
                    <h3 className="mt-6 text-3xl leading-7 font-semibold text-blue-600 3xl:text-4xl 3xl:py-4">
                      Save and Smile
                    </h3>
                    <p className="mt-6 text-xl tracking-wide leading-8 text-gray-500 3xl:px-24">
                      Your annual membership grants you immeadiate access to discounts on your dental care including up to 50% off most services.
                    </p>
                  </div>
                </div>



              </div>


            </div>

            
          </div>

        </section>













        {/* call to action */}
        <div className="bg-white">
          <div className="mx-auto max-w-7xl lg:max-w-none lg:w-3/4 3xl:w-3/5 py-16">
            <div className="rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4 bg-no-repeat bg-cover" style={{ backgroundImage: "url(https://res.cloudinary.com/membersy/image/upload/v1603913703/vantageone/home/cta-background.png)"}}>
              <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                <div className="lg:self-center">
                  <h2 className="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10">
                    <span className="block">Need more information?</span>
                  </h2>
                  <p className="mt-4 text-lg leading-6 text-white">We should put some more content here.</p>
                  <p className="mt-4 text-lg leading-6 text-white">You should give us a call.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

    
    </Layout>
  );
}
