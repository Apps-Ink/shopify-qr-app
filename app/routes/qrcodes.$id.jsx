import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

export async function loader({ params }) {
  invariant(params.id, "Could not find QR code destination");

  const { prisma } = await import('../data/db.server.js');
  const { getQRCodeImage } = await import("../data/QRCode.server");

  const id = Number(params.id);
  const qrCodes = await prisma.qRCode.findFirst({ where: { id } });
  invariant(qrCodes, "Could not find QR code destination");

  return {
    title: qrCodes.title,
    image: await getQRCodeImage(id),
  }
}

export default function QRCode() {
  const { image, title } = useLoaderData();

  return (
    <>
      <h1>{title}</h1>
      <img src={image} alt={`QR Code for product`} />
    </>
  );
}