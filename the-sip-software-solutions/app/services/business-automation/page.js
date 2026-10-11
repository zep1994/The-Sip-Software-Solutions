import ServicePage, { serviceMetadata } from "../ServicePage";

export const metadata = serviceMetadata("business-automation");

export default function Page() {
  return <ServicePage slug="business-automation" />;
}
