"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true); // Ensure this runs only on the client
  }, []);

  if(!isMounted)return null

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
