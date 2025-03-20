import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";

import { ClerkProvider } from "@clerk/nextjs";

import { Geist, Geist_Mono } from "next/font/google";
import { META_THEME_COLORS } from "@/config/site";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/common/site-header";
import { SiteFooter } from "@/components/common/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "3DPA",
  description:
    "Plug-and-play 3D printer accessories, designed for seamless performance and built with passion.",
};

export const viewport: Viewport = {
  themeColor: META_THEME_COLORS.light,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                    try {
                      if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                        document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                      }
                    } catch (_) {}
                  `,
            }}
          />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div vaul-drawer-wrapper="">
              <div className="relative flex min-h-svh flex-col bg-background">
                <div
                  data-wrapper=""
                  className="border-grid flex flex-1 flex-col"
                >
                  <SiteHeader />
                  <main className="flex flex-1 flex-col">{children}</main>
                  <SiteFooter />
                </div>
              </div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
