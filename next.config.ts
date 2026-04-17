import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B8", destination: "/uslugi" },
      { source: "/%D0%BE%D0%B7%D0%B2%D1%83%D1%87%D0%B0%D0%B2%D0%B0%D0%BD%D0%B5", destination: "/ozvuchavane" },
      { source: "/%D1%81%D0%B8%D0%BC%D1%83%D0%BB%D1%82%D0%B0%D0%BD%D0%B5%D0%BD-%D0%BF%D1%80%D0%B5%D0%B2%D0%BE%D0%B4", destination: "/simultaneen-prevod" },
      { source: "/%D0%BC%D1%83%D0%BB%D1%82%D0%B8%D0%BC%D0%B5%D0%B4%D0%B8%D1%8F", destination: "/multimedia" },
      { source: "/%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%B8-%D0%BE%D1%81%D0%B2%D0%B5%D1%82%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5", destination: "/dizain-i-osvetlenie" },
      { source: "/%D1%82%D1%83%D1%80-%D0%B3%D0%B0%D0%B9%D0%B4-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0", destination: "/tur-gaid-sistema" },
      { source: "/%D0%B7%D0%B0%D0%BF%D0%B8%D1%81-%D0%B8-%D1%81%D1%82%D1%80%D0%B8%D0%B9%D0%BC%D0%B8%D0%BD%D0%B3", destination: "/zapis-i-striiming" },
      { source: "/%D0%B7%D0%B0-%D0%BD%D0%B0%D1%81", destination: "/za-nas" },
      { source: "/%D0%BA%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D0%B8", destination: "/klienti" },
      { source: "/%D0%BA%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D0%B8", destination: "/kontakti" },
    ];
  },
};

export default nextConfig;
