import { NavBar } from '@/components/NavBar';
import { SocialMediaLinks } from '@/components/SocialMediaLinks';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative flex min-h-svh w-full flex-col overflow-x-clip bg-background text-gray">
            <div
                aria-hidden
                className="pointer-events-none absolute top-[-120px] left-1/2 h-[260px] w-[320px] -translate-x-1/2 rounded-full bg-blue-gradient opacity-60 blur-[140px] md:h-[240px] md:w-[760px] md:blur-[220px]"
            />
            <NavBar />
            <main className="relative z-5 flex flex-1 flex-col overflow-clip">
                {children}
            </main>
            <div className="fixed right-6 bottom-0 z-10 hidden lg:block 2xl:right-12">
                <SocialMediaLinks variant="rail" />
            </div>
        </div>
    );
}
