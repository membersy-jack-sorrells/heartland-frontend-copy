import Link from "next/link";
import { Layout } from "../components/layout/layout";
import Head from 'next/head';
import { Image, Transformation } from 'cloudinary-react';

export default function FAQ() {
  return (
    <Layout>
      <Head>
        <title>FAQ | VantageOne Dental Plan</title>
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
              Frequently Asked Questions
            </h2>
            <p className="text-white text-xl">
              Would we like to have a subtitle?
            </p>
          </div>
        </div>

      </section>






     





      <div className="pb-20 px-10">
        <div className="bg-white">
          <div className="max-w-screen-xl mx-auto md:py-4 px-4 sm:px-6 xl:py-20 lg:px-8">
            <div className="">
              <div className="mt-12 w-2/3 lg:mt-0 mx-auto">
                <dl className="space-y-12">
                  <div className="space-y-2">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      1. What is Perfect Teeth Dental Plan?
                    </dt>
                    <dd className="text-base leading-6 text-gray-700">
                      Perfect Teeth Dental Plan is NOT INSURANCE, but rather a
                      licensed dental savings plan. Unlike traditional dental
                      insurance that’s filled with red-tape, Perfect Teeth
                      Dental Plan features no waiting periods, maximums,
                      exclusions, or claims process. In exchange for a low
                      annual membership fee starting at only $95.00 per year,
                      members will receive immediate access to free exams and
                      x-rays, free oral cancer screening, plus 20-60% off most
                      other dental services at a growing community of 60+
                      Perfect Teeth locations across Arizona, Colorado, and New
                      Mexico.
                    </dd>
                  </div>

                  <div className="space-y-2">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      2. How much does membership cost?
                    </dt>
                    <dd className="text-base leading-6 text-gray-700">
                      Membership is very affordable and will always pay for
                      itself in just 1 visit to a participating dental office.
                      <br />
                      Individual: $95.00 year
                      <br />
                      Additional Member(s): + $30.00 year (per person)
                      <br />
                      Note: Your membership will auto-renews every 12 months
                      unless you notify your participating dental office or
                      membersy (plan administrator) that you would like to
                      discontinue your annual membership payments. Each year
                      prior to your account’s annual renewal date we’ll send you
                      a renewal notification letter in the mail (30 days prior)
                      and a renewal reminder email (7 days prior).
                    </dd>
                  </div>

                  <div className="space-y-2">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      3. Which dental offices can I use my membership at?
                    </dt>
                    <dd className="text-base leading-6 text-gray-700">
                      Perfect Teeth Dental Plan is accepted at a growing
                      community of 60+ Perfect Teeth locations located across
                      Arizona, Colorado, and New Mexico.
                      <br />A list of participating dental offices can be found{" "}
                      <Link href="/find-a-dentist">
                        <a>online</a>
                      </Link>{" "}
                      or by calling (877) 545-4188, Monday through Friday, from
                      8:00 am to 6:00 pm CST.
                    </dd>
                  </div>

                  <div className="space-y-2">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      4. How soon can I use my membership?
                    </dt>
                    <dd className="text-base leading-6 text-gray-700">
                      Perfect Teeth Dental Plan has no waiting periods,
                      exclusions or maximums. All members can utilize their
                      membership immediately upon enrolling and as much as
                      needed while a member.
                    </dd>
                  </div>

                  <div className="space-y-2">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      5. How frequently can I use my membership?
                    </dt>
                    <dd className="text-base leading-6 text-gray-700">
                      Unlike traditional dental insurance plans that are filled
                      with red-tape, Perfect Teeth Dental Plan has no maximums.
                      You can utilize your membership savings and perks as much
                      as needed while you are a member.
                      <br />
                      To maintain optimal oral health, the American Dental
                      Association (ADA) recommends regular dental visits, at
                      intervals determined by your dentist. The frequency of
                      your regular dental visits should be tailored by your
                      dentist to accommodate for your current oral health status
                      and health history.
                    </dd>
                  </div>

                  <div className="space-y-2">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      6. How long is my membership term?
                    </dt>
                    <dd className="text-base leading-6 text-gray-700">
                      Perfect Teeth Dental Plan features an annual membership
                      term. Your membership will auto-renew at the end of its
                      respective term unless you notify your participating
                      dental office or membersy (administrator) that you would
                      like to discontinue your membership prior to it’s renewal
                      date.
                    </dd>
                  </div>

                  <div className="space-y-2">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      7. Can I add dependents to my membership?
                    </dt>
                    <dd className="text-base leading-6 text-gray-700">
                      Yes, you can add dependents to your membership within our{" "}
                      <Link href="/login">
                        <a>online member</a>
                      </Link>{" "}
                      portal or by calling (877) 545-4188, Monday through
                      Friday, from 8:00 am to 6:00 pm CST to speak with a
                      dedicated member support specialist.
                    </dd>
                  </div>

                  <div className="space-y-2">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      8. When will I receive my member ID card?
                    </dt>
                    <dd className="text-base leading-6 text-gray-700">
                      By default, all members are provided with a digital copy
                      of their member ID card. Your member ID card is available
                      to view and/or print within our{" "}
                      <Link href="/login">
                        <a>online member portal</a>
                      </Link>
                      . You can request to have your member ID cards sent to you
                      in the mail by calling (877) 545-4188 to speak with a
                      dedicated member support specialist.
                      <br />
                      Note: You are not required to present your member ID card
                      when visiting a participating dental office. You can
                      simply notify the front desk that you are a Perfect Teeth
                      Dental Plan member and they will verify your eligibility
                      real-time.
                    </dd>
                  </div>

                  <div className="space-y-2">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      9. Who do I contact for additional support?
                    </dt>
                    <dd className="text-base leading-6 text-gray-700">
                      Please call (877) 545-4188, Monday through Friday, from
                      8:00 to 6:00 pm CST, to speak with a dedicated member
                      support specialist. We’re always happy to assist our
                      valued members.
                      <br />
                      Note: Perfect Teeth Dental Plan is powered by membersy, an
                      Austin-based digital health company that provides dental
                      service organizations of all sizes—from small startups to
                      large enterprises—with thoughtfully designed membership
                      programs to make dentistry more approachable.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
