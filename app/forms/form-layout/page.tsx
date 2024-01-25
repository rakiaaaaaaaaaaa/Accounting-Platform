import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "",
  description: "",
  // other metadata
};


import React from "react";

const EventDetailsForm = () => {
  return (
    <>
    <Breadcrumb pageName="Event Details" />
      <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark">
        <h3 className="font-medium text-black dark:text-white mb-4">Event Détailsé</h3>
        <form>
          <div className="mb-4">
            <label htmlFor="eventUrl" className="block text-black dark:text-white mb-2.5">Event URL</label>
            <input
              type="text"
              id="eventUrl"
              placeholder="Event URL"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
<p className="text-black text-sm mt-1">Exemple: <a href="#">https://loly.com</a></p>
          </div>

          <table className="mb-4 w-full">
  <tbody>
    <tr>
      <td>Event Title</td>
      <td>Event Type</td>
      <td>Event Date</td>
    </tr>
    <tr>
      <td><input type="text" id="label1" placeholder="Label" className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" /></td>
      <td><input type="text" id="label2" placeholder="Label" className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" /></td>
      <td><input type="text" id="label3" placeholder="Label" className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" /></td>
    </tr>
  </tbody>
</table>


          <div className="mb-4">
            <label className="block text-black dark:text-white mb-2.5">Does the event have attendees?</label>
            <div>
              <input type="radio" id="attendeesYes" name="attendees" value="yes" />
              <label htmlFor="attendeesYes" className="mr-5 cursor-pointer">Yes</label>
              <input type="radio" id="attendeesNo" name="attendees" value="no" />
              <label htmlFor="attendeesNo" className="cursor-pointer">No</label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-black dark:text-white mb-2.5">Currency</label>
            <div>
              <input type="radio" id="currencyUSD" name="currency" value="USD" />
              <label htmlFor="currencyUSD" className="mr-5 cursor-pointer">USD</label>
              <input type="radio" id="currencyTND" name="currency" value="TND" />
              <label htmlFor="currencyTND" className="cursor-pointer">TND</label>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="salesQuotation1" className="block text-black dark:text-white mb-2.5">Sales Quotation 1</label>
            <input
              type="text"
              id="salesQuotation1"
              placeholder="Sales Quotation #1"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
            <button type="button" className="ml-2.5 text-red-600">Delete</button>
          </div>

          <div className="mb-4">
            <label htmlFor="salesQuotation1" className="block text-black dark:text-white mb-2.5">Sales Quotation 2</label>
            <input
              type="text"
              id="salesQuotation2"
              placeholder="Sales Quotation #2"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
            <button type="button" className="ml-2.5 text-red-600">Delete</button>
          </div>
          <div className="mb-4">
            <label htmlFor="salesQuotation1" className="block text-black dark:text-white mb-2.5">Sales Quotation 3</label>
            <input
              type="text"
              id="salesQuotation3"
              placeholder="Sales Quotation #3"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
            <button type="button" className="ml-2.5 text-red-600">Delete</button>
          </div>
          
          <textarea
            placeholder="Justification"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary mb-4"
          ></textarea>

<table className="mb-4 w-full">
  <tbody>
    <tr>
      <td>Tot.REquested Amount</td>
      <td>OLD Balance </td>
      <td>New balance</td>
    </tr>
    <tr>
      <td><input type="text" id="label1" placeholder="$598.24" className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" /></td>
      <td><input type="text" id="label2" placeholder="£6.598" className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" /></td>
      <td><input type="text" id="label3" placeholder="£6.00" className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" /></td>
    </tr>
  </tbody>
</table>

          
          <div className="mb-4"><tr>
<td  className="font-bold">Sales Quotations</td>
</tr></div>

          <div className="mb-4">
  <label htmlFor="additionalInfo" className="block text-black dark:text-white mb-2.5">Additional Information</label>
  <div className="flex items-center">
    <input
      type="file"
      id="additionalInfo"
      accept=".pdf,.doc,.docx" 
      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
    />
    <p className="text-gray text-sm mt-1 ml-3">you have requested an amount over $150, please upload a detailed event agenda</p>
  </div>
</div>


          <div className="flex justify-center">
            <button type="button" className="flex justify-center rounded bg-primary p-3 font-medium text-white mr-2.5">Save Draft</button>
            <button type="submit" className="flex justify-center rounded bg-primary p-3 font-medium text-white">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EventDetailsForm;

