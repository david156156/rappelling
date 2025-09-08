import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col overflow-hidden bg-white">
      {/* Navbar */}
      <nav className="w-full sticky top-0 z-30 bg-white/90 border-b border-[#e6f6f2] shadow-sm backdrop-blur flex items-center justify-center py-4">
        <div className="flex gap-8">
          <Link
            href="/"
            className="font-bold text-[#059669] text-lg hover:underline underline-offset-8 transition"
          >
            דף הבית
          </Link>
          <Link
            href="/about"
            className="text-[#059669] hover:underline underline-offset-8 transition"
          >
            אודות
          </Link>
          <Link
            href="/trips"
            className="text-[#059669] hover:underline underline-offset-8 transition"
          >
            טיולים
          </Link>
          <Link
            href="/course"
            className="text-[#059669] hover:underline underline-offset-8 transition"
          >
            קורס גולש עצמאי
          </Link>
          <Link
            href="/contact"
            className="text-[#059669] hover:underline underline-offset-8 transition"
          >
            צור קשר
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[300px] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/mapal.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10" />
        {/* Content */}
        <div className="relative z-20 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            חווה את הרפתקת ה<span className="text-[#059669] mx-2">סנפלינג</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            מדריך מוסמך עם מעל 10 שנות ניסיון בהדרכת סנפלינג בטוח ומקצועי. בואו
            לחוות יחד את יופיי הטבע הישראלי מזווית חדשה לגמרי.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/trips">
              <span className="inline-block bg-[#059669] hover:bg-[#047857] text-white text-lg px-8 py-3 rounded-full font-semibold shadow transition">
                הטיולים שלנו
              </span>
            </Link>
            <Link href="/contact">
              <span className="inline-block border border-white text-white text-lg px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#059669] transition">
                צור קשר
              </span>
            </Link>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              למה לבחור בנו?
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              ביטחון, מקצועיות וחוויה בלתי נשכחת - זה מה שמבדיל אותנו
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 text-blue-700 rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">בטיחות מירבית</h3>
              <p className="text-stone-600 leading-relaxed">
                ציוד מתקדם וסטנדרטים בינלאומיים לבטיחות
              </p>
            </div>
            <div className="bg-[#e6f6f2] text-[#059669] rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 bg-[#baf2e5] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.75l-6.172 3.245 1.179-6.873L2 9.505l6.914-1.004L12 2.75l3.086 5.751L22 9.505l-5.007 4.617 1.179 6.873z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">ניסיון מוכח</h3>
              <p className="text-stone-600 leading-relaxed">
                מעל 10 שנות ניסיון בהדרכת סנפלינג מקצועית
              </p>
            </div>
            <div className="bg-amber-50 text-amber-700 rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 20h5v-2a4 4 0 0 0-3-3.87M9 20H4v-2a4 4 0 0 1 3-3.87m9-4.13a4 4 0 1 0-8 0 4 4 0 0 0 8 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">הדרכה אישית</h3>
              <p className="text-stone-600 leading-relaxed">
                קבוצות קטנות לחוויה אישית ובטוחה יותר
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gradient-to-b from-stone-50 to-[#e6f6f2]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">
                חוויה שלא תשכחו
              </h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                סנפלינג הוא לא רק ספורט - זו חוויה שמחברת אתכם לטבע ומעניקה
                תחושת הישג ייחודית. עם הציוד הטוב ביותר וההדרכה המקצועית, תוכלו
                להנות מכל רגע בבטחה מלאה.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "ציוד מקצועי וחדיש",
                  "מדריכים מוסמכים",
                  "מסלולים מגוונים לכל הרמות",
                  "קבוצות קטנות - עד 6 משתתפים",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-[#059669]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-stone-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/about">
                <span className="inline-block border border-[#059669] text-[#059669] px-8 py-3 rounded-full font-semibold hover:bg-[#e6f6f2] transition">
                  למד עליי יותר
                </span>
              </Link>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/rappelling-hero.jpg"
                  alt="סנפלינג בטבע"
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#059669] rounded-2xl opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-amber-500 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            מוכנים להרפתקה?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            הזמינו את הטיול הבא שלכם עוד היום וחוו את הסנפלינג הטוב ביותר בישראל
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/trips">
              <span className="inline-block bg-[#059669] hover:bg-[#047857] text-white text-lg px-8 py-3 rounded-full font-semibold shadow transition">
                בחר טיול
              </span>
            </Link>
            <Link href="/contact">
              <span className="inline-block border border-white text-white text-lg px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-stone-800 transition">
                שאלות? צור קשר
              </span>
            </Link>
          </div>
        </div>
      </section>

      <footer className="text-center py-6 text-[#059669] bg-white border-t font-medium mt-8 shadow-inner">
        © {new Date().getFullYear()} יוסי מדריך סנפלינג | כל הזכויות שמורות
      </footer>
    </div>
  );
}
