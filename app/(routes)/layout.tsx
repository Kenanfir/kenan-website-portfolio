import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function InnerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 container lg:px-48 px-4 py-8">{children}</main>
            <Footer />
        </div>
    );
}
