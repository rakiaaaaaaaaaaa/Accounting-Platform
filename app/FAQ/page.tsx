import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - IEEE Accounting Platforms",
  description: "Frequently Asked Questions about IEEE accounting platforms.",
  // other metadata
};

const FAQ = () => {
  return (
    <>
      <Breadcrumb pageName="FAQ - IEEE Accounting Platforms" />

      <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-9">
        <div className="flex flex-col gap-7.5">
          <h1>
            <strong>FAQ - IEEE Accounting Platforms</strong>
          </h1>
          <div>
            <h2>Q: What are the available accounting platforms offered by IEEE?</h2>
            <p>A: IEEE offers various accounting platforms, including Platform A, Platform B, and Platform C.</p>
          </div>
          <div>
            <h2>Q: How can I access IEEE accounting platforms?</h2>
            <p>A: To access IEEE accounting platforms, you need to log in to your IEEE account and navigate to the accounting section.</p>
          </div>
          <div>
            <h2>Q: Are IEEE accounting platforms free to use?</h2>
            <p>A: Yes, IEEE accounting platforms are free to use for IEEE members.</p>
          </div>
          <div>
            <h2>Q: Can I integrate IEEE accounting platforms with other financial tools?</h2>
            <p>A: Yes, IEEE accounting platforms offer integration capabilities with popular financial tools for seamless management.</p>
          </div>
          <div>
            <h2>Q: How secure are IEEE accounting platforms?</h2>
            <p>A: IEEE accounting platforms adhere to strict security measures to ensure the safety and confidentiality of financial data.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
