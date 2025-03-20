import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-grid border-t py-6 md:py-0">
      <div className="container-wrapper">
        <div className="flex justify-between container py-4">
          <div className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            The source code is available on{" "}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </div>
          <div className="flex flex-col text-balance text-center text-sm leading-loose text-muted-foreground md:text-right">
            <a
              href="/contact"
              className="font-medium underline underline-offset-4"
            >
              Contact Us
            </a>{" "}
            <a
              href="/terms"
              className="font-medium underline underline-offset-4"
            >
              Terms of Service
            </a>{" "}
            <a
              href="/privacy"
              className="font-medium underline underline-offset-4"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
