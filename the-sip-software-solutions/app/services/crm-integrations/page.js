import ServicePage, { serviceMetadata } from "../ServicePage";

export const metadata = serviceMetadata("crm-integrations");

export default function Page() {
  return <ServicePage slug="crm-integrations" />;
}
