"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const trips = [
  {
    title: "נחל רחף",
    desc: "קניון מרהיב בדרום מדבר יהודה, כולל 9 מפלים, הליכה אתגרית וגלישות ישירות לגבים. חוויה עוצמתית למנוסים.",
    img: "/trips/rahaf.jpg",
    difficulty: "מתקדם",
    location: "דרום מדבר יהודה (ליד מצדה)",
    duration: "6–9 שעות",
    price: 400,
    highlights: [
      "9 מפלים עד 40 מטר",
      "בריכות מים טבעיות (בעונה)",
      "מסלול מעגלי מאתגר",
    ],
    equipment_provided: true,
  },
  {
    title: "נחל קומראן",
    desc: "מסלול סנפלינג אידיאלי למתחילים בצפון מדבר יהודה, 6 מפלים, נוף לים המלח, סמוך לאתר הארכיאולוגי קומראן.",
    img: "/trips/qumran.jpg",
    difficulty: "קל",
    location: "צפון מדבר יהודה (ליד קיבוץ קליה)",
    duration: "3–6 שעות",
    price: 320,
    highlights: [
      "6 מפלים עד 40 מטר",
      "נוף לים המלח",
      "מתאים למשפחות ולמתחילים",
    ],
    equipment_provided: true,
  },
  {
    title: "נחל טור",
    desc: "קניון תלול במרכז מדבר יהודה, 3 מפלים עצומים (עד 80 מטר), נוף עוצר נשימה לים המלח. מתאים למנוסים בלבד.",
    img: "/trips/tur.jpg",
    difficulty: "קשה",
    location: "מרכז מדבר יהודה (ליד מצוקי דרגות)",
    duration: "7–8 שעות",
    price: 450,
    highlights: ["3 מפלים גבוהים (עד 80 מטר)", "נוף לים המלח", "מסלול למנוסים"],
    equipment_provided: true,
  },
  {
    title: "נחל תמרים",
    desc: "מסלול אתגרי בצפון מדבר יהודה, 4 מפלים גבוהים, נוף מרהיב לים המלח. חוויה למיטיבי לכת וחובבי סנפלינג.",
    img: "/trips/tmarim.jpg",
    difficulty: "מתקדם",
    location: "צפון מדבר יהודה",
    duration: "7–8 שעות",
    price: 350,
    highlights: ["4 מפלים עד 60 מטר", "נוף לים המלח", "מסלול קווי למנוסים"],
    equipment_provided: true,
  },
  {
    title: "מצוק שילת",
    desc: "אתר סנפלינג פופולרי במרכז, מצוק בגובה 40 מטר, מתאים למתחילים ולמשפחות. נוף פנורמי ונגישות גבוהה.",
    img: "/trips/shilat.jpg",
    difficulty: "קל",
    location: "אזור מודיעין (ליד ירושלים)",
    duration: "1–3 שעות",
    price: 220,
    highlights: ["מצוק יחיד 40 מטר", "מתאים לכל הגילאים", "גישה נוחה"],
    equipment_provided: true,
  },
  {
    title: "ויה פרטה רביד",
    desc: "מסלול ויה פרטה בגליל התחתון, כולל קטעי טיפוס קלים, נופים לכנרת והגולן. חוויה מגוונת למתחילים.",
    img: "/trips/viaferrata_ravid.jpg",
    difficulty: "קל",
    location: "גליל תחתון (ליד קיבוץ רביד)",
    duration: "3 שעות",
    price: 250,
    highlights: ["קטעי טיפוס קלים", "נוף לכנרת", "מתאים למתחילים"],
    equipment_provided: true,
  },
  {
    title: "נחל ג'ילבון",
    desc: "מסלול סנפלינג רטוב ברמת הגולן, גלישה בשני מפלים (17 ו-40 מטר), הליכה ושחייה בבריכות מים.",
    img: "/trips/gilbon.jpg",
    difficulty: "בינוני",
    location: "רמת הגולן (ליד קצרין)",
    duration: "4 שעות",
    price: 320,
    highlights: ["2 מפלים (עד 40 מטר)", "מסלול רטוב ושחייה", "מתאים לכל הרמות"],
    equipment_provided: true,
  },
  {
    title: "מחצבות קדומים",
    desc: "אתר סנפלינג בכרמל, מצוק 20 מטר בלב חורש טבעי, מתאים למתחילים ולמשפחות. גישה קלה מהחניה.",
    img: "/trips/kedumim.jpg",
    difficulty: "קל",
    location: "כרמל (ליד קיבוץ בית אורן)",
    duration: "שעתיים ומעלה",
    price: 180,
    highlights: ["מצוק 20 מטר", "מתאים למשפחות", "גישה נוחה"],
    equipment_provided: true,
  },
  {
    title: "מערת קשת",
    desc: "סנפלינג בגליל העליון, ירידה מהקשת המפורסמת (35 מטר), נוף לים ולגליל. מסלול קצר ונגיש למתחילים.",
    img: "/trips/keshet.jpg",
    difficulty: "קל",
    location: "גליל עליון (ליד ראש הנקרה)",
    duration: "שעתיים ומעלה",
    price: 280,
    highlights: ["גלישה מהקשת (35 מטר)", "נוף לים", "מתאים למתחילים"],
    equipment_provided: true,
  },
  {
    title: "מצוק דלתון",
    desc: "מצוק קטן בגליל העליון, גובה 20 מטר, מתאים במיוחד למתחילים ולמשפחות. נוף לחרמון ולעמק החולה.",
    img: "/trips/dalton.jpg",
    difficulty: "קל",
    location: "גליל עליון (יער ביריה)",
    duration: "שעתיים ומעלה",
    price: 180,
    highlights: ["מצוק 20 מטר", "נוף לחרמון", "מתאים למשפחות"],
    equipment_provided: true,
  },
  {
    title: "נקיק השחור (זויתן תיכון)",
    desc: "מסלול קניונינג בצפון, גלישה במפלים עד 40 מטר, שחייה בבריכות מים, חוויה למיטיבי לכת וליודעי שחייה.",
    img: "/trips/blackcanyon.jpg",
    difficulty: "קשה",
    location: "שמורת יהודיה, רמת הגולן",
    duration: "7–8 שעות",
    price: 420,
    highlights: ["מפלים עד 40 מטר", "מסלול רטוב", "למיטיבי לכת"],
    equipment_provided: true,
  },
  {
    title: "ויה פרטה רכס רמים",
    desc: "מסלול ויה פרטה בגליל העליון, כולל קטעי טיפוס, סנפלינג ונופים מרהיבים. מתאים למשפחות ולמתחילים.",
    img: "/trips/viaferrata_ramim.jpg",
    difficulty: "קל",
    location: "גליל עליון (ליד קיבוץ מנרה)",
    duration: "4 שעות",
    price: 250,
    highlights: ["קטעי טיפוס וסנפלינג", "נוף לחרמון", "מתאים למשפחות"],
    equipment_provided: true,
  },
  {
    title: "נחל חצצון",
    desc: "אחד ממסלולי הסנפלינג האתגריים בארץ, 5 מפלים (עד 120 מטר), קניון עמוק ומרשים. למנוסים בלבד.",
    img: "/trips/hatzezon.jpg",
    difficulty: "מתקדם",
    location: "צפון מדבר יהודה",
    duration: "12 שעות",
    price: 600,
    highlights: ["5 מפלים (עד 120 מטר)", "קניון עמוק", "למיטיבי לכת"],
    equipment_provided: true,
  },
  {
    title: "נחל חלמיש – סנפלינג ליל ירח",
    desc: "סנפלינג לילי בדרום מדבר יהודה, 3 מפלים (עד 45 מטר), חוויה ייחודית לאור ירח מלא. למנוסים.",
    img: "/trips/halamish.jpg",
    difficulty: "קשה",
    location: "דרום מדבר יהודה (ליד ערד)",
    duration: "5 שעות (18:00–23:00)",
    price: 300,
    highlights: ["3 מפלים עד 45 מטר", "סנפלינג לילי", "חוויה ייחודית"],
    equipment_provided: true,
  },
];

const difficultyColors: Record<string, string> = {
  קל: "bg-green-100 text-green-800 border-green-200",
  בינוני: "bg-yellow-100 text-yellow-800 border-yellow-200",
  קשה: "bg-orange-100 text-orange-800 border-orange-200",
  מתקדם: "bg-red-100 text-red-800 border-red-200",
};

const difficulties = ["כל הרמות", "קל", "בינוני", "קשה", "מתקדם"];

export default function Trips() {
  const [selectedDifficulty, setSelectedDifficulty] = useState("כל הרמות");

  const filteredTrips =
    selectedDifficulty === "כל הרמות"
      ? trips
      : trips.filter((t) => t.difficulty === selectedDifficulty);

  return (
    <div className="font-sans min-h-screen flex flex-col bg-gradient-to-b from-[#e6f6f2] to-white">
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
      <section className="relative py-20 bg-gradient-to-l from-[#059669] to-teal-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 z-10 relative">
            הטיולים שלנו
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed z-10 relative">
            מגוון מסלולי סנפלינג מרהיבים לכל הרמות - מטיולי היכרות ועד אתגרים
            מתקדמים. כל טיול כולל הדרכה מקצועית וציוד איכותי.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {difficulties.map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => setSelectedDifficulty(difficulty)}
                className={`px-5 py-2 rounded-full border font-semibold transition
                  ${
                    selectedDifficulty === difficulty
                      ? "bg-[#059669] text-white border-[#059669] shadow"
                      : "bg-white text-[#059669] border-[#e6f6f2] hover:bg-[#e6f6f2]"
                  }
                `}
              >
                {difficulty}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Trips Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          {filteredTrips.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-stone-100 rounded-full flex items-center justify-center">
                {/* MapPin Icon */}
                <svg
                  className="w-12 h-12 text-stone-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21s-6-5.686-6-10A6 6 0 1 1 18 11c0 4.314-6 10-6 10z" />
                  <circle cx="12" cy="11" r="2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">
                {selectedDifficulty === "כל הרמות"
                  ? "אין טיולים זמינים"
                  : `אין טיולים ברמת ${selectedDifficulty}`}
              </h3>
              <p className="text-stone-600 mb-6">
                נוספים יתווספו בקרוב. בינתיים ניתן ליצור קשר לפרטים נוספים.
              </p>
              <Link href="/contact">
                <span className="inline-block bg-[#059669] hover:bg-[#047857] text-white px-6 py-2 rounded-full font-semibold transition">
                  צור קשר
                </span>
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTrips.map((trip, idx) => (
                <div
                  key={trip.title}
                  className="bg-white rounded-xl shadow-lg flex flex-col border-2 border-[#059669]/10 hover:scale-105 transition overflow-hidden"
                >
                  <div className="relative">
                    <Image
                      src={trip.img}
                      alt={trip.title}
                      width={400}
                      height={220}
                      className="w-full h-48 object-cover"
                    />
                    <div
                      className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold border ${
                        difficultyColors[trip.difficulty] ||
                        "bg-gray-100 text-gray-700 border-gray-200"
                      }`}
                    >
                      {trip.difficulty}
                    </div>
                    {trip.equipment_provided && (
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-[#059669] border border-[#e6f6f2] flex items-center gap-1">
                        {/* Shield Icon */}
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                        כולל ציוד
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold text-[#059669] mb-2">
                      {trip.title}
                    </h3>
                    <p className="text-gray-700 mb-4 flex-1">{trip.desc}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-stone-600">
                        {/* MapPin Icon */}
                        <svg
                          className="w-4 h-4 text-[#059669]"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 21s-6-5.686-6-10A6 6 0 1 1 18 11c0 4.314-6 10-6 10z" />
                          <circle cx="12" cy="11" r="2.5" />
                        </svg>
                        {trip.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-stone-600">
                        {/* Clock Icon */}
                        <svg
                          className="w-4 h-4 text-[#059669]"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                        </svg>
                        {trip.duration}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-stone-600">
                        {/* Users Icon */}
                        <svg
                          className="w-4 h-4 text-[#059669]"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17 20h5v-2a4 4 0 0 0-3-3.87M9 20H4v-2a4 4 0 0 1 3-3.87m9-4.13a4 4 0 1 0-8 0 4 4 0 0 0 8 0z" />
                        </svg>
                        קבוצות קטנות (עד 6 משתתפים)
                      </div>
                    </div>
                    {trip.highlights && (
                      <div className="mb-4">
                        <h4 className="font-medium text-stone-800 mb-1 text-sm">
                          מה כלול:
                        </h4>
                        <ul className="text-sm text-stone-600 space-y-1">
                          {trip.highlights.slice(0, 3).map((h, i) => (
                            <li key={i} className="flex items-center gap-2">
                              {/* Star Icon */}
                              <svg
                                className="w-3 h-3 text-[#059669]"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 17.75l-6.172 3.245 1.179-6.873L2 9.505l6.914-1.004L12 2.75l3.086 5.751L22 9.505l-5.007 4.617 1.179 6.873z" />
                              </svg>
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="flex items-center justify-between pt-4 border-t border-stone-100 mt-auto">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-[#059669]">
                          ₪{trip.price}
                        </div>
                        <div className="text-xs text-stone-500">למשתתף</div>
                      </div>
                      <Link href="/contact">
                        <span className="inline-block bg-[#059669] hover:bg-[#047857] text-white px-5 py-2 rounded-full font-semibold transition">
                          הזמן עכשיו
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-l from-stone-800 to-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">לא מוצא את הטיול המושלם?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            אנחנו יכולים להתאים טיול בהתאם לרמה שלכם ולהעדפות האישיות. צרו קשר
            ונבנה יחד את החוויה המושלמת עבורכם.
          </p>
          <Link href="/contact">
            <span className="inline-block bg-[#059669] hover:bg-[#047857] text-white text-lg px-8 py-3 rounded-full font-semibold transition">
              בוא נתכנן יחד
            </span>
          </Link>
        </div>
      </section>

      <footer className="text-center py-6 text-[#059669] bg-white border-t font-medium mt-8 shadow-inner">
        © {new Date().getFullYear()} יוסי מדריך סנפלינג | כל הזכויות שמורות
      </footer>
    </div>
  );
}
