import { getDictionary, Locale } from "@/i18n";
import Link from "next/link";

export default async function TermsOfService({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang);

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-6 py-16">
      <Link href={`/${params.lang}`} className="text-primary font-bold mb-8 inline-block hover:underline transition">
        ← {dict.terms.back}
      </Link>
      
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-900">{dict.terms.title}</h1>
        <p className="text-gray-500 mb-10 pb-6 border-b border-gray-100">{dict.terms.lastUpdated}</p>

        <div className="space-y-8 text-gray-700 leading-relaxed text-lg">
            <section>
                <h2 className="text-2xl font-bold mb-3 text-gray-900">{dict.terms.s1_title}</h2>
                <p>{dict.terms.s1_desc}</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-3 text-gray-900">{dict.terms.s2_title}</h2>
                <p>{dict.terms.s2_desc}</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-3 text-gray-900">{dict.terms.s3_title}</h2>
                <p>{dict.terms.s3_desc}</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-3 text-gray-900">{dict.terms.s4_title}</h2>
                <p>{dict.terms.s4_desc}</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-3 text-gray-900">{dict.terms.s5_title}</h2>
                <p>{dict.terms.s5_desc}</p>
            </section>
        </div>
      </div>
    </div>
  );
}
