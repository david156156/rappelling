import Link from "next/link";

export default function Course() {
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

      <section className="py-20 bg-gradient-to-l from-[#059669] to-teal-700 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">קורס גולש עצמאי</h1>
        <p className="text-xl max-w-2xl mx-auto leading-relaxed">
          קורס גולש עצמאי מעניק למשתתפים את הכלים והידע הדרושים לצאת לשטח באופן
          עצמאי ולהשתמש בסנפלינג ככלי לטיול, הנאה ואתגר, תוך שמירה על בטיחות
          ומסודרות מלאה.
          <br />
          הקורס משלב לימוד עיוני והתנסות מעשית במצוקים ונחלים, ומקנה מיומנויות
          בסיסיות בסנפלינג וקניונינג.
          <br />
          הקורס מהווה גם הכנה למי שמעוניין בהמשך להשתתף בקורסי מדריכים מוסמכים,
          אך אינו מקנה אישור להדרכה או להובלת קבוצות.
        </p>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#059669] mb-4 text-right">
            פרטי הקורס
          </h2>
          <ul className="list-disc pr-6 text-right text-stone-700 text-lg space-y-2 mb-6">
            <li>משך הקורס: 3 ימים מלאים</li>
            <li>
              <b>ימי הלימוד:</b>
              <ul className="list-disc pr-6 text-base mt-1 space-y-1">
                <li>
                  יומיים ראשונים – במצוק, כולל לימוד עיוני ותרגולים מעשיים.
                </li>
                <li>
                  יום שלישי – מעבר נחל, תרגול מעשי בבניית עמדות גלישה, שילוח,
                  גלישה עם אבטחה עצמית, פתרון תקלות ולימוד שימוש בבולטים.
                </li>
              </ul>
            </li>
            <li>
              רמת קושי: למי שכבר התנסה בסנפלינג ורוצה לפתח מיומנות עצמאית; למי
              שטרם התנסה מומלץ קודם להשתתף בטיול סנפלינג מודרך
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#059669] mb-4 text-right">
            תוכן הלימוד
          </h2>
          <ul className="list-disc pr-6 text-right text-stone-700 text-lg space-y-2 mb-6">
            <li>היכרות עם ציוד סנפלינג, סוגי קשרים, חלוקת משקל ועגינות</li>
            <li>הרצאות בטיחות</li>
            <li>בניית עמדות גלישה וגלישה עם אבטחה עצמית</li>
            <li>טיפוס פרוסיקים על חבל</li>
            <li>פתרון תקלות ובעיות בזמן אמת</li>
            <li>מעבר נחל עם שילוח וגלישה באבטחה מלמעלה</li>
            <li>תרגול כל המיומנויות שנלמדו לאורך הקורס</li>
          </ul>

          <div className="bg-[#e6f6f2] rounded-xl p-6 mb-6 text-[#059669] font-semibold text-lg shadow text-right">
            <b>הדגשת בטיחות ומומחיות:</b> כל החברות מדגישות את הבטיחות, הציוד
            התקני, והמדריכים המנוסים שלהן. זהו גורם קריטי בתחום כמו סנפלינג,
            והוא בונה אמון עם הלקוח הפוטנציאלי.
          </div>
          <div className="bg-[#f0fdfa] rounded-xl p-6 text-[#047857] font-semibold text-lg shadow text-right">
            <b>פנייה רגשית והרפתקנית:</b> חוויות מלאות הרפתקאות, נופים ותחושות
            חזקות. יצירת תחושת חיבור לטבע והעצמה אישית – כל ירידה היא צעד של
            התגברות וצמיחה.
          </div>
        </div>
      </section>

      <footer className="text-center py-6 text-[#059669] bg-white border-t font-medium mt-8 shadow-inner">
        © {new Date().getFullYear()} אביאל שמש | מדריך סנפלינג | כל הזכויות
        שמורות
      </footer>
    </div>
  );
}
