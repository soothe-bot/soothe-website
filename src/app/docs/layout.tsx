import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Documentation · Soothe",
  description: "Browse the official documentation for Soothe, Let SootheBot Bring Calm to Your Discord!",
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}
