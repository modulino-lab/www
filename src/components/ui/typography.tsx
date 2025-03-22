import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

function TypographyH1({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"h1"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "h1";

  return (
    <Comp
      data-slot="typography-h1"
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
      {...props}
    />
  );
}

function TypographyH2({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"h2"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "h2";

  return (
    <Comp
      data-slot="typography-h2"
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
      {...props}
    />
  );
}

function TypographyH3({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"h3"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "h3";

  return (
    <Comp
      data-slot="typography-h3"
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

function TypographyH4({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"h4"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "h4";

  return (
    <Comp
      data-slot="typography-h4"
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

function TypographyP({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"p"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "p";

  return (
    <Comp
      data-slot="typography-p"
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  );
}

function TypographyBlockquote({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"blockquote"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "blockquote";

  return (
    <Comp
      data-slot="typography-blockquote"
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    />
  );
}

function TypographyList({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"ul"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "ul";

  return (
    <Comp
      data-slot="typography-list"
      className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}
      {...props}
    />
  );
}

function TypographyLead({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"p"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "p";

  return (
    <Comp
      data-slot="typography-lead"
      className={cn("text-xl text-muted-foreground", className)}
      {...props}
    />
  );
}

function TypographyLarge({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      data-slot="typography-large"
      className={cn("text-lg font-semibold", className)}
      {...props}
    />
  );
}

function TypographySmall({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"small"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "small";

  return (
    <Comp
      data-slot="typography-small"
      className={cn("text-sm font-medium leading-none", className)}
      {...props}
    />
  );
}

function TypographyMuted({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"p"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "p";

  return (
    <Comp
      data-slot="typography-muted"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

export {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyBlockquote,
  TypographyList,
  TypographyLead,
  TypographyLarge,
  TypographySmall,
  TypographyMuted,
};
