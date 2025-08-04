import { Icon, IndexTable, Thumbnail } from "@shopify/polaris";
import { AlertDiamondIcon, ImageIcon } from "@shopify/polaris-icons";
import { truncate } from "../util";
import { Link } from "@remix-run/react";

export default function QRTableRow({ qrCode }) {
  return (
    <IndexTable.Row id={qrCode.id} position={qrCode.id}>
      <IndexTable.Cell>
        <Thumbnail
          source={qrCode.productImage || ImageIcon}
          alt={qrCode.productTitle}
          size="small"
        />
      </IndexTable.Cell>
      <IndexTable.Cell>
        <Link to={`qrcodes/${qrCode.id}`}>{truncate(qrCode.title)}</Link>
      </IndexTable.Cell>
      <IndexTable.Cell>
        {qrCode.productDeleted ? (
          <InlineStack align="start" gap="200">
            <span style={{ width: "20px" }}>
              <Icon source={AlertDiamondIcon} tone="critical" />
            </span>
            <Text tone="critical" as="span">
              product has been deleted
            </Text>
          </InlineStack>
        ) : (
          truncate(qrCode.productTitle)
        )}
      </IndexTable.Cell>
      <IndexTable.Cell>
        {new Date(qrCode.createdAt).toDateString()}
      </IndexTable.Cell>
      <IndexTable.Cell>{qrCode.scans}</IndexTable.Cell>
    </IndexTable.Row>
  );
}