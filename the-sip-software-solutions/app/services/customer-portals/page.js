import ServicePage, { serviceMetadata } from "../ServicePage";

export const metadata = serviceMetadata("customer-portals");

export default function Page() {
  return <ServicePage slug="customer-portals" />;
}
