import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IEEE Overview",
  description: "Overview of the Institute of Electrical and Electronics Engineers (IEEE).",
  // other metadata
};

const IEEEOverview = () => {
  return (
    <>
      <Breadcrumb pageName="IEEE Overview" />

      <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-9">
        <div className="flex flex-col gap-7.5">
          <h1>
            <strong>IEEE Overview</strong>
          </h1>
          <p>
            The Institute of Electrical and Electronics Engineers (IEEE) is a global professional organization dedicated to advancing technology for the benefit of humanity. With over 400,000 members in more than 160 countries, IEEE is a leading authority in various fields, including electrical engineering, computer science, and electronics.
          </p>
          <p>
            IEEE provides a wide range of resources, including publications, conferences, and educational programs, to support its members and advance the field of technology. It fosters collaboration and innovation among professionals and researchers worldwide.
          </p>
          <p>
            Through its diverse membership and comprehensive initiatives, IEEE plays a crucial role in shaping the future of technology and addressing global challenges.
          </p>
        </div>
      </div>
    </>
  );
};

export default IEEEOverview;
