import type { Metadata } from "next";
import "../globals.css";
import { Locale } from "@/i18n";
import Link from "next/link";
import { getDictionary } from "@/i18n";

export const metadata: Metadata = {
  title: "نواة - Nawa",
  description: "التطبيق الأول لرواد الأعمال. احصل على دراسة جدوى احترافية، تحليل مالي دقيق، ومستشار ذكي مدعوم بالذكاء الاصطناعي.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const lang = params.lang;
  const dict = await getDictionary(lang);
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <html lang={lang} dir={dir}>
      <body className="min-h-screen flex flex-col bg-white">
        {/* Header / Nav */}
        <header className="w-full p-6 flex justify-between items-center max-w-7xl mx-auto border-b border-gray-100 bg-white/50 backdrop-blur-md sticky top-0 z-50">
          <Link href={`/${lang}`} className="text-3xl font-bold text-primary flex items-center gap-2">
            🌱 نواة
          </Link>
          <nav className="flex items-center gap-6 text-sm font-semibold text-gray-700">
            <Link href={`/${lang}#features`} className="hover:text-primary transition">{dict.nav.features}</Link>
            <Link href={`/${lang}/privacy`} className="hover:text-primary transition">{dict.nav.privacy}</Link>
            <Link href={`/${lang}/terms`} className="hover:text-primary transition">{dict.nav.terms}</Link>
            {/* Language Switcher */}
            <div className="h-6 w-px bg-gray-200 mx-2"></div>
            <Link 
                href={lang === 'ar' ? '/en' : '/ar'} 
                className="bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full text-xs font-bold transition text-gray-800"
            >
                {lang === 'ar' ? 'English' : 'عربي'}
            </Link>
          </nav>
        </header>

        {children}

        {/* Footer */}
        <footer className="w-full p-8 text-center text-gray-500 border-t mt-auto bg-gray-50">
            <p>{dict.footer.rights}</p>
            <div className="flex justify-center gap-6 mt-4 text-sm font-medium">
            <Link href={`/${lang}/privacy`} className="hover:text-primary transition">{dict.nav.privacy}</Link>
            <Link href={`/${lang}/terms`} className="hover:text-primary transition">{dict.nav.terms}</Link>
            </div>
        </footer>
      </body>
    </html>
  );
}
