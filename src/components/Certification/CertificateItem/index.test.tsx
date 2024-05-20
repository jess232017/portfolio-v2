import { render, screen } from "@testing-library/react";

import CertificateItem from "./index";

describe("CertificateItem", () => {
  const certificate = {
    id: "123",
    createdAt: "2021-10-19T00:00:00.000Z",
    appLanguageId: "en",
    certificationId: "123",
    image: "https://example.com/certificate.png",
    title: "Certificate Title",
    issuedDate: 1634567890000,
    url: "https://example.com/certificate",
    company: "Certificate Company",
    idCredential: "ABC123",
    type: ["type1", "type2"],
  };

  test("renders certificate image", () => {
    render(<CertificateItem {...certificate} />);
    const imageElement = screen.getByAltText(certificate.title);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", certificate.image);
  });

  test("renders certificate title", () => {
    render(<CertificateItem {...certificate} />);
    const titleElement = screen.getByText(certificate.title);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders issued date", () => {
    render(<CertificateItem {...certificate} />);
    const issuedDateElement = screen.getByText("October, 2021");
    expect(issuedDateElement).toBeInTheDocument();
  });

  test("renders company name", () => {
    render(<CertificateItem {...certificate} />);
    const companyElement = screen.getByText(certificate.company);
    expect(companyElement).toBeInTheDocument();
  });

  test("renders id credential", () => {
    render(<CertificateItem {...certificate} />);
    const idCredentialElement = screen.getByText(certificate.idCredential);
    expect(idCredentialElement).toBeInTheDocument();
  });

  test("renders see certificate button", () => {
    render(<CertificateItem {...certificate} />);
    const seeCertificateButton = screen.getByText("See Certificate");
    expect(seeCertificateButton).toBeInTheDocument();
    expect(seeCertificateButton).toHaveAttribute("href", certificate.url);
  });
});
