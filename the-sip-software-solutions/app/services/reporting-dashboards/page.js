import ServicePage, { serviceMetadata } from "../ServicePage";

export const metadata = serviceMetadata("reporting-dashboards");

export default function Page() {
  return <ServicePage slug="reporting-dashboards" />;
}
