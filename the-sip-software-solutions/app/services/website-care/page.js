import ServicePage, { serviceMetadata } from "../ServicePage";

export const metadata = serviceMetadata("website-care");

export default function Page() {
  return <ServicePage slug="website-care" />;
}
