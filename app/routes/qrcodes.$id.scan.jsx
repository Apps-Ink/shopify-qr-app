import { redirect } from "@remix-run/node";
import invariant from "tiny-invariant"

export const loader = async ({ params }) => {
  invariant(params.id, "Could not find QR code destination");

  const { prisma } = await import('../data/db.server.js');
  const { getDestinationUrl } = await import("../data/QRCode.server");

  const id = Number(params.id);
  const qrCode = await prisma.qRCode.findFirst({ where: { id } });
  invariant(qrCode, "Could not find QR code destination");

  await prisma.qRCode.update({
    where: { id },
    data: { scans: { increment: 1 } }
  });

  return redirect(getDestinationUrl(qrCode));
}