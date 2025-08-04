import { IndexTable } from "@shopify/polaris";
import QRTableRow from "./QRTableRow";

export default function QRTable({ qrCodes }) {
  return (
    <IndexTable
      resourceName={{
        singular: "QR code",
        plural: "QR codes",
      }}
      itemCount={qrCodes.length}
      headings
      ={[
        { title: "Thumbnail", hidden: true },
        { title: "Title" },
        { title: "Product" },
        { title: "Date created" },
        { title: "Scans" },
      ]}
      selectable={false}
    >
      {qrCodes.map((qrCode) => (
        <QRTableRow key={qrCode.id} qrCode={qrCode} />
      ))}
    </IndexTable>
  );
}