import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-stone-50 to-white flex flex-col">
      {/* Navbar */}
      <nav className="w-full sticky top-0 z-30 bg-white/90 border-b border-[#e6f6f2] shadow-sm backdrop-blur flex items-center justify-center py-4">
        <div className="flex gap-8">
          <Link
            href="/"
            className="text-[#059669] hover:underline underline-offset-8 transition font-bold text-lg"
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
            href="/contact"
            className="text-[#059669] hover:underline underline-offset-8 transition"
          >
            צור קשר
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/aviel.jpg"
                alt="המדריך"
                width={600}
                height={400}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#059669] rounded-full opacity-20"></div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#059669] rounded-xl flex items-center justify-center">
                  {/* Mountain Icon */}
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 20l7-12 4 7 5-9 5 14H2z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-stone-800">
                    אביאל שמש
                  </h1>
                  <p className="text-[#059669] font-medium">
                    מדריך סנפלינג מוסמך
                  </p>
                </div>
              </div>
              <p className="text-lg text-stone-600 leading-relaxed mb-8">
                שלום! אני יוסי, מדריך סנפלינג עם יותר מעשור של ניסיון בתחום.
                התחלתי את הדרך שלי כמטפס הרים ובמהלך השנים התמחיתי בסנפלינג
                ובהדרכה בטוחה ומקצועית.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-[#059669]">10+</div>
                  <div className="text-sm text-stone-600">שנות ניסיון</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-[#059669]">500+</div>
                  <div className="text-sm text-stone-600">טיולים הושלמו</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-[#059669]">0</div>
                  <div className="text-sm text-stone-600">תאונות</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-[#059669]">4.9★</div>
                  <div className="text-sm text-stone-600">דירוג ממוצע</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">
              כישורים והסמכות
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              רקע מקצועי מוצק המבוסס על הכשרה יסודית וניסיון רב
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* הסמכת מדריך סנפלינג */}
            <div className="h-full hover:shadow-lg transition-all duration-300 bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <div className="w-12 h-12 bg-[#baf2e5] text-[#059669] rounded-xl flex items-center justify-center mb-4">
                {/* Award Icon */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.75l-6.172 3.245 1.179-6.873L2 9.505l6.914-1.004L12 2.75l3.086 5.751L22 9.505l-5.007 4.617 1.179 6.873z" />
                </svg>
              </div>
              <h3 className="font-bold text-stone-800 mb-2">
                הסמכת מדריך סנפלינג
              </h3>
              <p className="text-sm text-stone-600 mb-1">
                האגודה הישראלית לטיפוס
              </p>
              <span className="inline-block bg-[#e6f6f2] text-[#059669] text-xs px-2 py-0.5 rounded">
                2014
              </span>
            </div>
            {/* בטיחות בגובה */}
            <div className="h-full hover:shadow-lg transition-all duration-300 bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                {/* Shield Icon */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="font-bold text-stone-800 mb-2">בטיחות בגובה</h3>
              <p className="text-sm text-stone-600 mb-1">מכון התקנים הישראלי</p>
              <span className="inline-block bg-blue-50 text-blue-600 text-xs px-2 py-0.5 rounded">
                2015
              </span>
            </div>
            {/* עזרה ראשונה מתקדמת */}
            <div className="h-full hover:shadow-lg transition-all duration-300 bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-4">
                {/* Users Icon */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 20h5v-2a4 4 0 0 0-3-3.87M9 20H4v-2a4 4 0 0 1 3-3.87m9-4.13a4 4 0 1 0-8 0 4 4 0 0 0 8 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-stone-800 mb-2">
                עזרה ראשונה מתקדמת
              </h3>
              <p className="text-sm text-stone-600 mb-1">מגן דוד אדום</p>
              <span className="inline-block bg-red-50 text-red-600 text-xs px-2 py-0.5 rounded">
                2023
              </span>
            </div>
            {/* מדריך טיולים בטבע */}
            <div className="h-full hover:shadow-lg transition-all duration-300 bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4">
                {/* Mountain Icon */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 20l7-12 4 7 5-9 5 14H2z" />
                </svg>
              </div>
              <h3 className="font-bold text-stone-800 mb-2">
                מדריך טיולים בטבע
              </h3>
              <p className="text-sm text-stone-600 mb-1">רשות הטבע והגנים</p>
              <span className="inline-block bg-green-50 text-green-600 text-xs px-2 py-0.5 rounded">
                2016
              </span>
            </div>
            {/* החייאה ודפיברילטור */}
            <div className="h-full hover:shadow-lg transition-all duration-300 bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center mb-4">
                {/* Heart Icon */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21C12 21 4 13.36 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.36 16 21 16 21H12Z" />
                </svg>
              </div>
              <h3 className="font-bold text-stone-800 mb-2">
                החייאה ודפיברילטור
              </h3>
              <p className="text-sm text-stone-600 mb-1">איחוד הצלה</p>
              <span className="inline-block bg-pink-50 text-pink-600 text-xs px-2 py-0.5 rounded">
                2023
              </span>
            </div>
            {/* הדרכה מתקדמת */}
            <div className="h-full hover:shadow-lg transition-all duration-300 bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                {/* Star Icon */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.75l-6.172 3.245 1.179-6.873L2 9.505l6.914-1.004L12 2.75l3.086 5.751L22 9.505l-5.007 4.617 1.179 6.873z" />
                </svg>
              </div>
              <h3 className="font-bold text-stone-800 mb-2">הדרכה מתקדמת</h3>
              <p className="text-sm text-stone-600 mb-1">מכללת פת</p>
              <span className="inline-block bg-amber-50 text-amber-600 text-xs px-2 py-0.5 rounded">
                2017
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-gradient-to-r from-[#e6f6f2] to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-stone-800 mb-8">
            הפילוסופיה שלי
          </h2>
          <div className="relative">
            <div className="text-8xl text-[#baf2e5] absolute -top-4 -right-4">
              "
            </div>
            <blockquote className="text-xl text-stone-700 font-medium leading-relaxed relative z-10">
              בטיחות היא תמיד במקום הראשון. רק כשאנחנו מרגישים בטוחים לחלוטין,
              אנחנו יכולים להנות מהיופי והרגש שהטבע מציע לנו. כל טיול הוא
              הזדמנות ליצור זיכרונות בלתי נשכחים תוך שמירה על בטיחות מירבית.
            </blockquote>
            <div className="text-8xl text-[#baf2e5] absolute -bottom-8 -left-4">
              "
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-12 h-12 bg-[#059669] rounded-full flex items-center justify-center">
              {/* Mountain Icon */}
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M3 20l7-12 4 7 5-9 5 14H2z" />
              </svg>
            </div>
            <div className="text-right">
              <div className="font-bold text-stone-800">יוסי לוי</div>
              <div className="text-sm text-stone-600">מדריך סנפלינג מוסמך</div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-800 text-center mb-12">
            הסיפור שלי
          </h2>
          <div className="prose prose-lg max-w-none text-stone-700 leading-relaxed">
            <p className="mb-6">
              הכל התחיל בטיול עם חברים בצפון הארץ. ראיתי לראשונה אנשים יורדים
              במדרונות תלולים בעזרת חבלים, ומיד הבנתי שזה מה שאני רוצה לעשות.
              התחושה של חופש, השילוב של טכניקה ואומץ, והקשר העמוק עם הטבע - הכל
              פשוט "קלק" לי.
            </p>
            <p className="mb-6">
              אחרי כמה חודשים של לימוד עצמאי וחבילות הכשרה, קיבלתי את ההסמכה
              הראשונה שלי. אבל הבנתי מהר מאוד שהטכניקה זה רק חלק מהסיפור. החלק
              החשוב באמת הוא הבטיחות והיכולת להעביר את הידע הזה לאחרים בצורה
              בטוחה ומהנה.
            </p>
            <p className="mb-6">
              במהלך השנים הדרכתי מאות אנשים - מתחילים מוחלטים ועד מטפסים מנוסים
              שרצו להתנסות בסנפלינג. כל אחד מביא את הסיפור שלו, את הפחדים שלו
              ואת החלומות שלו. תפקידי הוא ליצור סביבה בטוחה שבה כל אחד יכול
              לגדול ולהתפתח בקצב שלו.
            </p>
            <p>
              היום, אחרי עשרות אלפי ירידות בחבל ומאות טיולים מוצלחים, אני עדיין
              מתרגש כמו בפעם הראשונה כשאני רואה את הביטחון והשמחה בעיניים של
              מישהו שמתגבר על עצמו ומגשים משהו שחשב שהוא בלתי אפשרי עבורו.
            </p>
          </div>
        </div>
      </section>

      <footer className="text-center py-6 text-[#059669] bg-white border-t font-medium mt-8 shadow-inner">
        © {new Date().getFullYear()} יוסי מדריך סנפלינג | כל הזכויות שמורות
      </footer>
    </div>
  );
}
