import { EmptyState } from "@shopify/polaris";
import { useEffect } from "react";

export default function EmptyQRCodeState({ onAction }) {
  return (
    <EmptyState
      heading="Create unique QR codes for your product"
      action={{
        content: "Create QR code",
        onAction,
      }}
      image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
    >
      <p>Allow customers to scan codes and buy products using their phones.</p>
    </EmptyState>
  );
}