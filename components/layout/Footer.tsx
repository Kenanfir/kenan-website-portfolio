export function Footer() {
    return (
        <footer className="w-full border-t border-border/40 py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row lg:px-48 px-4">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    © {new Date().getFullYear()} Kenan Firmansyah. Built with Next.js & Three.js.
                </p>
            </div>
        </footer>
    );
}
