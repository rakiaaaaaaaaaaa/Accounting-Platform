import IEEEOverview from "./overview/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
  // other metadata
};

export default function Home() {
  return (
    <>
      <IEEEOverview />
    </>
  );
}
