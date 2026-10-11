import ServicePage, { serviceMetadata } from "../ServicePage";

export const metadata = serviceMetadata("custom-business-systems");

export default function Page() {
  return <ServicePage slug="custom-business-systems" />;
}
