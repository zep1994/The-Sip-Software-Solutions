import ServicePage, { serviceMetadata } from "../ServicePage";

export const metadata = serviceMetadata("essential-care");

export default function Page() {
  return <ServicePage slug="essential-care" />;
}
