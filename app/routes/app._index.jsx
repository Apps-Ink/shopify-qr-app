import { useLoaderData, useNavigate } from "@remix-run/react";
import {
  Page,
  Layout,
  Card,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { authenticate } from "../shopify.server";
import { getQRCodes } from "../data/QRCode.server";
import EmptyQRCodeState from "../components/EmptyQRCodeState";
import QRTable from "../components/QRTable";

export const loader = async ({ request }) => {
  const { admin, session } = await authenticate.admin(request);
  const qrCodes = await getQRCodes(session.shop, admin.graphql);

  return { qrCodes };
};

export default function Index() {
  const { qrCodes } = useLoaderData();
  const navigate = useNavigate();

  return (
    <Page>
      <TitleBar title="QR Codes">
        <button variant="primary" onClick={() => navigate("/app/qrcodes/new")}>Create QR Code</button>
      </TitleBar>
      <Layout>
        <Layout.Section>
          <Card padding="0">
            {qrCodes.length === 0 ? (
              <EmptyQRCodeState onAction={() => navigate("qrcodes/new")} />
            ) : (
              <QRTable qrCodes={qrCodes} />
            )}
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
