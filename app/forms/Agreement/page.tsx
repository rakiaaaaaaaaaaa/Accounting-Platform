import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
  // other metadata
};

const Agreement = () => {
  return (
    <>
      <Breadcrumb pageName="Rules Agreement" />

      <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-9">
        <div className="flex flex-col gap-7.5">
          <h1>
            <strong>Rules and Acknowledgement</strong>
          </h1>
          <div>
            <p>
              Your 10 keys to receive funds:
            </p>
            <ol>
              <li>1.The unit's treasurer and chair should keep their own financial report (incomes & expenses) and verify that they have sufficient funds before submitting the payment / reimbursement request. The unit's treasurer and chair should give their financial report to the next officers of their unit.</li>
              <li>2.In case of reimbursement request (reimbursement means that the services were already payed and the event was organized), a report with photos and the list of participants (name, IEEE member (yes/no), email) must be uploaded in the request. Otherwise, the reimbursement will not be done.</li>
              <li>3.In case of payment request (payment means a direct money transfer from the Tunisia section to the provider bank account), a report with photos and the list of participants (name, IEEE member (yes/no). email) must be sent to tunisia-officers@ieee.org within 7 days after the event. Otherwise, the section will not be able to help the unit in the future, even if they have sufficient funds in the section bank account.</li>
              <li>4.The Tunisia section needs at the minimum 15 days to complete your request. No urgent payments could be done. All requests should be submitted well in advance.</li>
              <li>5.In case of invoices with an amount over 100 TND, the forum must include 3 quotes (devis) from different providers. Please clarify if you are not selecting the lowest price, in the description of expenses field above. You should ask for payment option in order to pay directly the provider and avoid the reimbursement option.</li>
              <li>6.No clear invoices will not be paid or reimbursed. All invoices must be billed to "IEEE Tunisia section" (and clearly include section's tax id 1496298 TPN 000), including the word "Facture", clear details of the provider, stamp, and signature. Otherwise, the payment/reimbursement can't be done.</li>
              <li>7.The unit's chair/treasurer should collect all original invoices and give them to the section treasurer by 31 December every year. Otherwise, the section will not be able to help the unit in the future.</li>
              <li>8.If the expenses includes a restaurant invoice, the request should includes ALL the names, IEEE id, and emails of the beneficiary persons.</li>
              <li>9.The request will be automatically declined if one of the emails of the officers are wrong.</li>
              <li>10.The unit's website should be updated and includes the call for participation to the related event. Furthermore, an e-notice call for participation should be sent via enotice.vtools.ieee.org.</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agreement;
