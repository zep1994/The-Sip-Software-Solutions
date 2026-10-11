import ServicePage, { serviceMetadata } from "../ServicePage";

export const metadata = serviceMetadata("review-request-system");

export default function Page() {
  return <ServicePage slug="review-request-system" />;
}
