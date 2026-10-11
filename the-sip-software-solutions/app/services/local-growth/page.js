import ServicePage, { serviceMetadata } from "../ServicePage";

export const metadata = serviceMetadata("local-growth");

export default function Page() {
  return <ServicePage slug="local-growth" />;
}
