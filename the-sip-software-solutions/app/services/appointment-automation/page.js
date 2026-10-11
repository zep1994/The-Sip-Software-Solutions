import ServicePage, { serviceMetadata } from "../ServicePage";

export const metadata = serviceMetadata("appointment-automation");

export default function Page() {
  return <ServicePage slug="appointment-automation" />;
}
