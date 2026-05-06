import { getDictionary, Locale } from "@/i18n";
import Image from "next/image";

export default async function Home({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang);

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-start">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900 leading-tight tracking-tight">
            {dict.hero.title1}<br/>
            <span className="text-primary bg-green-50 px-2 rounded-lg">{dict.hero.title2}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
            {dict.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-800 transition shadow-xl transform hover:-translate-y-1">
              {dict.hero.appStore}
            </button>
            <button className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#00c970] transition shadow-xl shadow-green-200 transform hover:-translate-y-1">
              {dict.hero.googlePlay}
            </button>
          </div>
        </div>

        <div className="flex-1 relative flex justify-center items-center">
            {/* Mascot Image with glowing background effect */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full w-3/4 h-3/4 mx-auto -z-10"></div>
            <Image 
                src="/mascot.png" 
                alt="Nawa Mascot" 
                width={500} 
                height={500} 
                className="object-contain drop-shadow-2xl hover:scale-105 transition duration-500"
                priority
            />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-24 w-full">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">{dict.features.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100">
                    <div className="text-4xl mb-4">🤖</div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{dict.features.f1_title}</h3>
                    <p className="text-gray-600 leading-relaxed">{dict.features.f1_desc}</p>
                </div>
                {/* Feature 2 */}
                <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100">
                    <div className="text-4xl mb-4">📊</div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{dict.features.f2_title}</h3>
                    <p className="text-gray-600 leading-relaxed">{dict.features.f2_desc}</p>
                </div>
                {/* Feature 3 */}
                <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100">
                    <div className="text-4xl mb-4">📄</div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{dict.features.f3_title}</h3>
                    <p className="text-gray-600 leading-relaxed">{dict.features.f3_desc}</p>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
}
