import { cn } from "@/lib/utils";

export function Tabs({
  defaultValue: _defaultValue,
  className,
  children,
}: {
  defaultValue?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("w-full", className)}>
      {children}
    </div>
  );
}

export function TabsList({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

export function TabsTrigger({
  value: _value,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }) {
  return (
    <button
      role="tab"
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        "text-muted-foreground hover:text-foreground",
        className
      )}
      {...props}
    />
  );
}

export function TabsContent({
  value: _value,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { value: string }) {
  return <div className={cn("mt-3", className)} {...props} />;
}


