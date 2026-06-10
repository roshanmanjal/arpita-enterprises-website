import { useState } from "react";
import { motion } from "framer-motion";
import { company } from "../data/company";

const infoItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Our Address",
    value: company.address,
    href: company.mapsLink,
    color: "bg-green-950/60 text-green-400 border border-green-500/20",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: company.phones.join("\n"),
    href: `tel:${company.phones[0]}`,
    color: "bg-amber-950/60 text-amber-400 border border-amber-500/20",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Business Hours",
    value: company.hours,
    href: null,
    color: "bg-blue-50 text-sky-700 border border-blue-500/20",
  },
];

const whoCanContact = [
  "Retailers",
  "Wholesalers",
  "Distributors",
  "FMCG Brands",
  "Institutional Buyers",
  "Distribution Partners",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    business: "",
    expectedMonthly: "",
    message: "",
    inquiryType: "Retail Product Inquiry",
    businessType: "Retail Store",
    contactMethod: "WhatsApp",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const waText = `*New B2B Business Inquiry - Arpita Enterprises*
----------------------------------------
â€¢ *Name:* ${form.name}
â€¢ *Phone:* ${form.phone}
â€¢ *Business/Shop:* ${form.business || "Not Provided"}
â€¢ *Business Type:* ${form.businessType}
â€¢ *Expected Monthly Requirement:* ${form.expectedMonthly || "Not Provided"}
â€¢ *Preferred Contact:* ${form.contactMethod}

*Message / Request:*
${form.message}
----------------------------------------`;

    const waUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-blue-50">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-b from-sky-100 via-sky-50 to-white border-b border-sky-200 pt-28 pb-10">
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-sky-500/5 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="text-sky-700 text-xs font-bold uppercase tracking-[0.28em] mb-3 block">
              Contact
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Let's Work <span className="text-gradient">Together</span>
            </h1>
            <p className="text-slate-600 mt-2.5 text-sm leading-relaxed max-w-lg">
              Reach out via WhatsApp, phone, or the form below. We respond to all B2B inquiries during business hours.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-2 gap-14">

          {/* LEFT â€” Info */}
          <div className="space-y-6">
            {/* Info cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid sm:grid-cols-2 gap-4 lg:grid-cols-1"
            >
              {infoItems.map((card) => (
                <motion.div
                  key={card.label}
                  variants={itemVariants}
                  className="group flex items-start gap-4 rounded-2xl border border-sky-200 bg-white text-slate-900 p-5 shadow-card-md transition-all hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(14,165,233,0.15)] hover:border-sky-400"
                >
                  <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${card.color}`}>
                    {card.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600 mb-1">{card.label}</p>
                    {card.href ? (
                      <a
                        href={card.href}
                        target={card.href.startsWith("http") ? "_blank" : undefined}
                        rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                        className="transition text-slate-900 hover:text-sky-700 font-semibold"
                      >
                        {card.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-slate-900 whitespace-pre-line">{card.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Who Can Contact Us */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl border border-sky-200 bg-gradient-to-br from-white via-sky-50 to-blue-50 p-6 shadow-card-md"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white">
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Who Can Contact Us</h3>
                  <p className="text-xs text-sky-700">We serve all FMCG trade partners</p>
                </div>
              </div>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {whoCanContact.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl border border-sky-200 bg-white px-3.5 py-2.5 transition hover:border-sky-500/30 hover:bg-sky-50"
                  >
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-700 text-[10px] font-bold text-white">âœ“</span>
                    <span className="text-xs font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.42 }}
              className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/20 to-teal-950/10 p-6"
            >
              <h3 className="font-bold text-slate-900 mb-1">Fastest response via WhatsApp</h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                Our team responds within business hours. WhatsApp is the quickest way to reach us for urgent inquiries.
              </p>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-emerald-600 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.874L0 24l6.335-1.514A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.493-5.183-1.357l-.371-.221-3.762.899.934-3.665-.242-.383A9.944 9.944 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                </svg>
                Open WhatsApp
              </a>
            </motion.div>

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.54 }}
              className="overflow-hidden rounded-2xl border border-sky-200 shadow-card-md"
            >
              <iframe
                title="Arpita Enterprises location"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(company.address)}&output=embed`}
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>

          {/* RIGHT â€” Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-green-950 flex items-center justify-center mx-auto mb-5 border border-green-500/30">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Enquiry Sent!</h3>
                  <p className="text-slate-600 mt-2 text-sm max-w-xs mx-auto">
                    WhatsApp has opened with your message. Our team will respond during business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", phone: "", business: "", expectedMonthly: "", message: "", inquiryType: "Retail Product Inquiry", businessType: "Retail Store", contactMethod: "WhatsApp" });
                    }}
                    className="mt-6 text-sky-700 text-sm font-semibold hover:underline"
                  >
                    Send another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <div className="rounded-[28px] border border-sky-200 bg-white p-8 shadow-card-xl backdrop-blur-md">
                <h2 className="text-xl font-black text-slate-900 mb-1">Send an Enquiry</h2>
                <p className="text-sm text-slate-600 mb-7">Fill in your details and we'll get back to you.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-[0.18em]">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-white text-slate-800 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none text-sm placeholder:text-slate-500 transition-all animate-fade-in"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-[0.18em]">
                        Phone Number *
                      </label>
                      <input
                        type="text"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-white text-slate-800 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none text-sm placeholder:text-slate-500 transition-all animate-fade-in"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-[0.18em]">
                      Business / Shop Name
                    </label>
                    <input
                      type="text"
                      name="business"
                      value={form.business}
                      onChange={handleChange}
                      placeholder="Sharma General Store"
                      className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-white text-slate-800 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none text-sm placeholder:text-slate-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-[0.18em]">
                      Expected Monthly Requirement
                    </label>
                    <input
                      type="text"
                      name="expectedMonthly"
                      value={form.expectedMonthly}
                      onChange={handleChange}
                      placeholder="10 cartons, 50 cartons, 100 cartons"
                      className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-white text-slate-800 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none text-sm placeholder:text-slate-500 transition-all"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-[0.18em]">
                        Inquiry Type *
                      </label>
                      <select
                        name="inquiryType"
                        required
                        value={form.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-white text-slate-700 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none text-sm font-medium transition-all"
                      >
                        <option value="Retail Product Inquiry" className="bg-white text-slate-700">Retail Product Inquiry</option>
                        <option value="Product Availability" className="bg-white text-slate-700">Product Availability</option>
                        <option value="Bulk Purchase Inquiry" className="bg-white text-slate-700">Bulk Purchase Inquiry</option>
                        <option value="Brand Partnership Inquiry" className="bg-white text-slate-700">Brand Partnership Inquiry</option>
                        <option value="Distribution Inquiry" className="bg-white text-slate-700">Distribution Inquiry</option>
                        <option value="Other" className="bg-white text-slate-700">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-[0.18em]">
                        Business Type *
                      </label>
                      <select
                        name="businessType"
                        required
                        value={form.businessType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-white text-slate-700 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none text-sm font-medium transition-all"
                      >
                        <option value="Retail Store" className="bg-white text-slate-700">Retail Store</option>
                        <option value="Wholesaler" className="bg-white text-slate-700">Wholesaler</option>
                        <option value="Distributor" className="bg-white text-slate-700">Distributor</option>
                        <option value="FMCG Brand" className="bg-white text-slate-700">FMCG Brand</option>
                        <option value="Institution" className="bg-white text-slate-700">Institution</option>
                        <option value="Other" className="bg-white text-slate-700">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-[0.18em]">
                      Preferred Contact Method *
                    </label>
                    <div className="flex gap-5">
                      {["WhatsApp", "Phone Call"].map((method) => (
                        <label key={method} className="flex items-center gap-2 text-sm text-slate-700 font-medium cursor-pointer">
                          <input
                            type="radio"
                            name="contactMethod"
                            value={method}
                            checked={form.contactMethod === method}
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 border-sky-300 bg-white focus:ring-blue-500 cursor-pointer"
                          />
                          {method}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-[0.18em]">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="I'm interested in EatBit Chikki and Craveto Makhana. Please share trade pricing and MOQ details."
                      className="w-full px-4 py-3 rounded-xl border border-sky-200 bg-white text-slate-800 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none text-sm placeholder:text-slate-500 resize-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-emerald-600 text-white font-bold text-sm transition-all hover:bg-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] active:scale-[0.99]"
                  >
                    Send Enquiry via WhatsApp
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    This opens WhatsApp with your message pre-filled.
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

