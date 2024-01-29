import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "",
  description: "",
  // other metadata
};

const GeneralDetails = () => {
  return (
    <>
      <Breadcrumb pageName="General Details" />

      <div className="flex justify-center items-center h-screen">
        <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-80 dark:border-strokedark">
            
          </div>
          <form action="#" className="p-6.5">
            <div className="mb-4.5">
             
              <input
                type="text"
                id="fullName"
                placeholder="Full  Name"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                
              />
            </div>

            <div className="mb-4.5">
              
              <input
                type="email"
                id="email"
                placeholder=" Email "
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                
              />
            </div>

            <div className="mb-4.5">
              
              <input
                type="number"
                id="phoneNumber"
                placeholder="Phone Number"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
               
              />
            </div>

            <div className="mb-4.5">
             
              <input
                
                id="ieeeMemberNumber"
                placeholder="IEEE Member Number"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                
              />
            </div>

            <div className="mb-4.5">
              <fieldset>
                <legend className="block text-black dark:text-white mb-2.5">Role</legend>
                <div className="flex items-center">
                  <input type="radio" id="chair" name="role" value="chair" className="mr-2.5" />
                  <label htmlFor="chair" className="mr-5 cursor-pointer">Chair</label>
                  <input type="radio" id="treasurer" name="role" value="treasurer" className="mr-2.5" />
                  <label htmlFor="treasurer" className="cursor-pointer">Treasurer</label>
                </div>
              </fieldset>
            </div>

            <div className="flex justify-center">
              <button className="flex justify-center rounded bg-primary p-3 font-medium text-white mr-2.5">
                Proceed to Reimbursement
              </button>
              <button className="flex justify-center rounded bg-primary p-3 font-medium text-white ml-2.5">
              Proceed to Payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default GeneralDetails;
