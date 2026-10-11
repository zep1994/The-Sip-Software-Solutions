import ServicePage, { serviceMetadata } from "../ServicePage";

export const metadata = serviceMetadata("business-care");

export default function Page() {
  return <ServicePage slug="business-care" />;
}
