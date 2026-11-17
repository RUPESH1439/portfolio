import { NavBar } from '@/components/NavBar';
import { SocialMediaLinks } from '@/components/SocialMediaLinks';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative flex min-h-svh w-full flex-col overflow-x-clip bg-background text-slate">
            <div
                aria-hidden
                className="ambient-glow pointer-events-none absolute top-[-446px] left-1/2 h-[912px] w-[912px] -translate-x-1/2 md:top-[-662px] md:h-[1324px] md:w-[1654px]"
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
