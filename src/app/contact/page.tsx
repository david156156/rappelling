"use client";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    tourType: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        tourType: "",
      });
    }, 3000);
  };

  return (
    <div className="font-sans min-h-screen flex flex-col bg-gradient-to-b from-stone-50 to-white">
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
            בוא נתכנן את הטיול שלך
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed z-10 relative">
            יש לך שאלות? רוצה להזמין טיול? או פשוט סקרן לדעת יותר? אני כאן לענות
            על כל שאלה ולעזור לך לתכנן את החוויה המושלמת.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-stone-800 mb-6">
                  בוא נהיה בקשר
                </h2>
                <p className="text-lg text-stone-600 leading-relaxed mb-8">
                  אני זמין בכל זמן לשאלות, הזמנות וייעוץ מקצועי. אשמח לעזור לך
                  לבחור את הטיול המתאים ולהכין אותך לחוויה בטוחה ומהנה.
                </p>
              </div>
              <div className="space-y-6">
                {/* Phone */}
                <div className="bg-emerald-100 text-emerald-600 rounded-xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow">
                    {/* Phone Icon */}
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-stone-800 mb-1">טלפון</div>
                    <div className="font-medium mb-1">050-123-4567</div>
                    <div className="text-sm text-stone-500">
                      זמין 24/7 למקרי חירום
                    </div>
                  </div>
                </div>
                {/* Email */}
                <div className="bg-blue-100 text-blue-600 rounded-xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow">
                    {/* Mail Icon */}
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 4h16v16H4z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-stone-800 mb-1">אימייל</div>
                    <div className="font-medium mb-1">
                      yossi@rappeling-israel.com
                    </div>
                    <div className="text-sm text-stone-500">
                      מענה תוך 24 שעות
                    </div>
                  </div>
                </div>
                {/* Location */}
                <div className="bg-purple-100 text-purple-600 rounded-xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow">
                    {/* MapPin Icon */}
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21s-6-5.686-6-10A6 6 0 1 1 18 11c0 4.314-6 10-6 10z" />
                      <circle cx="12" cy="11" r="2.5" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-stone-800 mb-1">מיקום</div>
                    <div className="font-medium mb-1">ירושלים, ישראל</div>
                    <div className="text-sm text-stone-500">
                      טיולים בכל הארץ
                    </div>
                  </div>
                </div>
                {/* Availability */}
                <div className="bg-orange-100 text-orange-600 rounded-xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow">
                    {/* Clock Icon */}
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-stone-800 mb-1">זמינות</div>
                    <div className="font-medium mb-1">
                      ראשון - חמישי: 7:00-22:00
                    </div>
                    <div className="text-sm text-stone-500">
                      שישי - שבת: 8:00-20:00
                    </div>
                  </div>
                </div>
              </div>
              {/* Quick Tips */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-6 mt-8">
                <div className="flex items-center gap-3 mb-4">
                  {/* MessageCircle Icon */}
                  <svg
                    className="w-6 h-6 text-[#059669]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-1.9 5.4A8.5 8.5 0 1 1 12 3.5a8.38 8.38 0 0 1 5.4 1.9L23 3v6h-6l2.29-2.29" />
                  </svg>
                  <div className="font-bold text-stone-800">
                    טיפים לקשר מהיר
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-stone-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#059669] rounded-full mt-2 flex-shrink-0" />
                    ציינו את רמת הניסיון שלכם בסנפלינג או טיפוס
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#059669] rounded-full mt-2 flex-shrink-0" />
                    הזכירו כמה משתתפים צפויים בקבוצה
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#059669] rounded-full mt-2 flex-shrink-0" />
                    אם יש לכם העדפה לאזור גיאוגרפי מסוים
                  </li>
                </ul>
              </div>
            </div>
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl shadow-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  {/* Send Icon */}
                  <svg
                    className="w-6 h-6 text-[#059669]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  <div className="text-2xl text-stone-800 font-bold">
                    שלח הודעה
                  </div>
                </div>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      {/* CheckCircle Icon */}
                      <svg
                        className="w-8 h-8 text-[#059669]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 12l2 2l4-4" />
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-stone-800 mb-2">
                      ההודעה נשלחה בהצלחה!
                    </h3>
                    <p className="text-stone-600">
                      אחזור אליך תוך 24 שעות. תודה על הפנייה!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2 text-right">
                        <label
                          htmlFor="name"
                          className="font-medium text-stone-700"
                        >
                          שם מלא *
                        </label>
                        <input
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          placeholder="השם שלך"
                          required
                          className="w-full border border-stone-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#059669]"
                        />
                      </div>
                      <div className="space-y-2 text-right">
                        <label
                          htmlFor="phone"
                          className="font-medium text-stone-700"
                        >
                          טלפון *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          placeholder="050-123-4567"
                          required
                          className="w-full border border-stone-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#059669]"
                        />
                      </div>
                    </div>
                    <div className="space-y-2 text-right">
                      <label
                        htmlFor="email"
                        className="font-medium text-stone-700"
                      >
                        אימייל
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="your@email.com"
                        className="w-full border border-stone-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#059669]"
                      />
                    </div>
                    <div className="space-y-2 text-right">
                      <label
                        htmlFor="tourType"
                        className="font-medium text-stone-700"
                      >
                        סוג הטיול המעניין אותך
                      </label>
                      <select
                        id="tourType"
                        className="w-full px-3 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#059669]"
                        value={formData.tourType}
                        onChange={(e) =>
                          handleInputChange("tourType", e.target.value)
                        }
                      >
                        <option value="">בחר סוג טיול</option>
                        <option value="beginner">טיול היכרות (מתחילים)</option>
                        <option value="intermediate">טיול בינוני</option>
                        <option value="advanced">טיול מתקדמים</option>
                        <option value="private">טיול פרטי</option>
                        <option value="group">טיול קבוצתי</option>
                        <option value="other">אחר</option>
                      </select>
                    </div>
                    <div className="space-y-2 text-right">
                      <label
                        htmlFor="message"
                        className="font-medium text-stone-700"
                      >
                        הודעה *
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        placeholder="ספר לי על רמת הניסיון שלך, כמה משתתפים, מתי היית רוצה לצאת לטיול, ועוד כל מידע שחשוב לך שאדע..."
                        rows={5}
                        required
                        className="w-full border border-stone-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#059669]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#059669] hover:bg-[#047857] text-white text-lg font-semibold rounded-full py-3 transition flex items-center justify-center gap-2"
                    >
                      {/* Send Icon */}
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                      שלח הודעה
                    </button>
                    <p className="text-sm text-stone-500 text-center">
                      * שדות חובה. המידע שלך מוגן ולא יועבר לצדדים שלישיים.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-6 text-[#059669] bg-white border-t font-medium mt-8 shadow-inner">
        © {new Date().getFullYear()} יוסי מדריך סנפלינג | כל הזכויות שמורות
      </footer>
    </div>
  );
}
