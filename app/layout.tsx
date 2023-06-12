import Image from 'next/image';
import Link from 'next/link';
import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center p-8 my-6">
        <Image
          src="/flag.png"
          width={40}
          height={40}
          className="mx-auto"
          alt={'logo'}
        />
        <Link href="/">
          <h1 className="text-3xl text-gray-600 font-bold mt-4">
            Leben wie Julia in Frankreich
          </h1>
        </Link>
        <p className="text-xl text-rose-400">Ein Fotografie-Reiseblog</p>
      </div>
    </header>
  );

  const footer = (
    <footer className="mt-auto">
      <div className="border-t border-slate-400 py-6 text-center text-slate-400">
        <h3>Leben wie Julia in Frankreich</h3>
      </div>
    </footer>
  );

  return (
    <div className="flex flex-col min-h-screen">
      {header}
      <div className="flex-grow mx-auto px-6">{children}</div>
      {footer}
    </div>
  );
}
