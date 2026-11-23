import ServicePage, { serviceMetadata } from "../ServicePage";

const title = "CRM Integration Services in Jackson, MS | The Sip Web Studio";
const pageMetadata = serviceMetadata("crm-integrations");

export const metadata = {
  ...pageMetadata,
  title: { absolute: title },
  openGraph: { ...pageMetadata.openGraph, title },
  twitter: { ...pageMetadata.twitter, title },
};

export default function Page() {
  return <ServicePage slug="crm-integrations" />;
}
