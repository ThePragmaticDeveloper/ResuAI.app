"use client";

import { UserButton } from "@clerk/nextjs";
import { CreditCard } from "lucide-react";
import { useTheme } from "next-themes";
import { dark } from '@clerk/themes';

export default function ClerkUserButton() {
  const {theme} = useTheme();

  return (
    <UserButton
    appearance={{
      baseTheme: theme === "dark" ? dark : undefined,
      elements: {
        avatarBox: {
          width: 28,
          height: 28,
        },
      },
    }}
  >
    <UserButton.MenuItems>
      <UserButton.Link
        label="Billing"
        labelIcon={<CreditCard className="size-4" />}
        href="/billing"
      />
    </UserButton.MenuItems>
  </UserButton>
  )
}
