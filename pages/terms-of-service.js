import Link from "next/link";
import { Layout } from "../components/layout/layout";
import Head from 'next/head';
import { Image, Transformation } from 'cloudinary-react';

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Head>
        <title>Terms of Service | VantageOne</title>
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
              Terms of Service
            </h2>
          </div>
        </div>

      </section>




      <div className="mx-auto max-w-7xl lg:max-w-none lg:w-3/4 3xl:w-3/5 py-12">

        <p>
          1. <strong>Terms.</strong> These Terms of Service (“TOS”) constitute a
          legally binding agreement between you and Membersy LLC (“Membersy”),
          concerning your access to and use of this website, as well as any
          other media form, media channel, mobile website or mobile application
          related, linked or otherwise connected thereto (collectively, the
          “Site”). By accessing the Site, you are agreeing to be bound by these
          TOS, all applicable laws and regulations, and agree that you are
          responsible for compliance with any applicable local laws.{" "}
          <strong>
            If you do not agree with any or all of these terms, you are
            expressly prohibited from using or accessing this Site and must
            discontinue use immediately.
          </strong>{" "}
          Membersy may terminate access to this Site at any time without notice
          in its sole discretion.
        </p>

        <p>
          2. <strong>Intellectual Property Rights.</strong> Unless otherwise
          indicated, the Site is the proprietary property of Membersy and all
          source code, databases, functionality, software, website designs,
          audio, video, text, photographs, and graphics on the Site
          (collectively, the “Content”), and the trademarks, service marks and
          logos contained therein (collectively, the “Marks”) are owned and
          controlled by Membersy or licensed to Membersy and are protected by
          applicable copyright and trademark law. Other product and company
          names mentioned herein may be the trademarks of their respective
          owners. Except as expressly provided in these TOS, no part of the
          Site, including the Content or Marks, may be copied, reproduced,
          aggregated, republished, sold, licensed or otherwise exploited for any
          commercial purposes whatsoever without the express written permission
          of Membersy.
        </p>

        <p>
          3. <strong>Use License.</strong> Permission is granted to temporarily
          download one copy of the materials (information or software) on the
          Site for personal, non-commercial transitory viewing only. This is the
          grant of a license, not a transfer of title, and this license shall
          automatically terminate if you violate these TOS, including any of the
          following restrictions:
        </p>

        <ol>
          <li>modify or copy the materials;</li>
          <li>
            use the materials for any commercial purpose, or for any public
            display (commercial or non-commercial);
          </li>
          <li>
            attempt to decompile or reverse engineer any software contained on
            the Site;
          </li>
          <li>
            attempt to bypass any measures of the Site designed to prevent or
            restrict access to the Site, or any portion of the Site;
          </li>
          <li>
            make any unauthorized use of the Site including collecting usernames
            and/or email addresses of users by electronic or other means for the
            purpose of sending unsolicited email, or creating user accounts by
            automated means or under false pretenses;
          </li>
          <li>
            attempt to impersonate another user or person or use the username of
            another user;
          </li>
          <li>
            remove any copyright or other proprietary notations from the
            materials; or
          </li>
          <li>
            transfer the materials to another person or “mirror” the materials
            on any other server.
          </li>
        </ol>

        <p>
          4. <strong>User Representations.</strong> By using the Site, you
          represent and warrant that (i) all registration information that you
          submit will be true, accurate, current and complete; (ii) you will
          maintain the accuracy of such information and promptly update it as
          necessary; (iii) you are not a minor in the jurisdiction in which you
          reside and you have the legal capacity to comply with these TOS; (iv)
          you will not access the Site through automated or non-human means,
          whether through a bot, script or otherwise; (v) you will not use the
          Site for any illegal or unauthorized purpose; (vi) your use of the
          Site will not violate any applicable law or regulation; if you
          register with the Site, you will keep your password confidential and
          will be responsible for all use of your account and password.
        </p>

        <p>
          5. <strong>Submissions.</strong> You acknowledge and agree that any
          questions, comments, suggestions, ideas, feedback or other information
          regarding the Site (“Submissions”) provided by you to us are
          non-confidential and shall become our sole property. We shall own
          exclusive rights, including all intellectual property rights, and
          shall be entitled to unrestricted use and dissemination of these
          Submissions for any lawful purpose, commercial or otherwise, without
          acknowledgement or compensation to you. You hereby waive all moral
          rights to such Submissions and you hereby warrant that such
          Submissions are original with you or that you have the right to submit
          such Submissions. You agree there shall be no recourse against us for
          any alleged or actual infringement or misappropriation of any
          proprietary right in your Submissions.
        </p>

        <p>
          6.{" "}
          <strong>
            Disclaimer. The materials on the Site are provided on an ‘as is’
            basis. Membersy makes no warranties, expressed or implied, and
            hereby disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </strong>{" "}
          Further, Membersy does not warrant or make any representations
          concerning the accuracy, likely results, or reliability of the use of
          the materials on this Site or otherwise relating to such materials or
          on any sites linked to this Site.
        </p>

        <p>
          7. <strong>Limitations.</strong> You use this Site at your own risk,
          and you agree that Membersy, its representatives, employees, partners
          and affiliates shall have no liability for direct, indirect,
          incidental, punitive or consequential damages with respect to your use
          of this Site. Because some jurisdictions do not allow limitations on
          implied warranties, or limitations of liability for consequential or
          incidental damages, these limitations may not apply to you.
        </p>

        <p>
          8. <strong>Accuracy of Materials.</strong> The materials appearing on
          this Site could include technical, typographical, or photographic
          errors. Membersy does not warrant that any of the materials on this
          Site are accurate, complete or current. Membersy may make changes to
          the materials contained on this Site at any time without notice;
          however, Membersy does not make any commitment to update the
          materials.
        </p>

        <p>
          9. <strong>Links.</strong> Membersy has not reviewed the websites
          linked to this Site and is not responsible for the contents of any
          such linked site. The inclusion of any link does not imply endorsement
          by Membersy of the linked site. Use of any such linked website is at
          the user’s own risk. Membersy does not assume and expressly disclaims
          any responsibility or liability for any information, content,
          communications, web services, goods or other materials available on
          such linked sites or for any changes or updates to such sites.
        </p>

        <p>
          10. <strong>Modifications.</strong> Membersy may revise the TOS for
          this Site at any time without notice. By using this Site, you are
          agreeing to be bound by the then-current version of the TOS. These TOS
          may be assigned by Membersy at any time to a subsidiary or parent in
          connection with any asset or stock sale, merger, consolidation,
          operation of law event, or other change of control event.
        </p>

        <p>
          11. <strong>Indemnification.</strong> You agree to indemnify and hold
          harmless Membersy, its parents, subsidiaries, affiliates, and entities
          under common ownership, and their respective members, shareholders,
          employees, officers, directors, agents, successors and assigns (the
          “Indemnified Parties”), from and against all claims, asserted and
          assertable, and losses to persons or property to which the Indemnified
          Parties may be exposed by reason of any act, action, negligence,
          omission or default in connection with your use of the Site or any
          breach of these TOS.
        </p>

        <p>
          12. <strong>Governing Law.</strong> These terms and conditions are
          governed by and construed in accordance with the laws of the State of
          Texas, without regard to its conflict of laws principles.
        </p>

        <p>
          13. <strong>Dispute Resolution.</strong> Any controversy or claim
          arising out of or relating to this contract, or the breach thereof,
          shall be settled by binding arbitration administered by the American
          Arbitration Association in accordance with its Commercial Arbitration
          Rules. The arbitration hearing shall take place in Travis County,
          Texas before a single arbitrator. Each party shall bear its own costs,
          fees and expenses of arbitration. Judgment on the award rendered by
          the arbitrator may be entered in any court having jurisdiction
          thereof. No demand for arbitration may be made after the date when the
          institution of legal or equitable proceedings based on such claim or
          dispute would be barred by the applicable statute of limitation. The
          arbitrator is not authorized to award punitive or other damages not
          measured by the prevailing party’s actual damages. The parties agree
          that any arbitration shall be limited to the dispute between the
          parties individually, and to the fullest extent permitted by law: (i)
          no arbitration shall be joined with any proceeding; (ii) there is no
          right or authority for any dispute to be arbitrated on a class-action
          basis or to utilize class-action procedures, and (iii) there is no
          right or authority for any dispute to be brought in a purported
          representative capacity on behalf of the general public or any other
          persons.
        </p>

        <p>
          14. <strong>Miscellaneous.</strong> These TOS represents the entire
          agreement of the Parties with respect to the subject matter herein.
          These TOS may only be modified, amended, or changed by an agreement in
          writing signed by the parties. If any court determines that any
          portion of these TOS is unenforceable, it shall be deleted from these
          TOS and the TOS shall otherwise remain in effect.
        </p>

        <p>
          15. <strong>Contact Us.</strong> If you have questions or concerns
          regarding the Site or these TOS, or wish to resolve a complaint or
          provide notice, please contact us at info@membersy.com
        </p>
      </div>
    </Layout>
  );
}
