"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StepsForm({ prefillProduct }: any) {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    propertyType: "",
    location: "Mpumalanga",
    systemSize: "",
    finance: "no",
    name: "",
    phone: "",
    email: "",
    product: prefillProduct || ""
  });

  useEffect(() => {
    if (prefillProduct) setForm(f => ({ ...f, product: prefillProduct }));
  }, [prefillProduct]);

  function update(partial: any) { setForm(f => ({ ...f, ...partial })); }

  async function submit() {
    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, regionFocus: "Mpumalanga" })
      });
      const json = await res.json();
      if (json.success) setStep(4);
      else alert("Submission failed");
    } catch (e) {
      alert("Network error");
    } finally { setLoading(false); }
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <div className="mb-4">
        <div className="text-sm text-gray-500">Step {Math.min(step + 1, 4)} of 4</div>
        <div className="w-full bg-gray-200 h-2 rounded mt-2">
          <motion.div className="h-2 bg-[var(--soft-gold)] rounded" animate={{ width: `${((step + 1) / 4) * 100}%` }} transition={{ duration: 0.4 }} />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step < 4 ? (
          <motion.div key={step} initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }} transition={{ duration: 0.4 }}>
            {step === 0 && <ServiceStep data={form} onChange={update} next={() => setStep(1)} />}
            {step === 1 && <LocationStep data={form} onChange={update} back={() => setStep(0)} next={() => setStep(2)} />}
            {step === 2 && <SystemStep data={form} onChange={update} back={() => setStep(1)} next={() => setStep(3)} />}
            {step === 3 && <ContactStep data={form} onChange={update} back={() => setStep(2)} submit={submit} loading={loading} />}
          </motion.div>
        ) : (
          <motion.div key="done" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="text-center py-8">
              <h3 className="text-xl font-bold mb-2">Thanks {form.name || ""}!</h3>
              <p className="text-sm text-gray-600">Your request has been submitted. Suppliers in Mpumalanga will contact you soon.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* Step components */
function ServiceStep({ data, onChange, next }: any) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">What do you need?</h3>
      <div className="space-y-2">
        {["Home", "Business", "Farm"].map((opt) => (
          <button key={opt} onClick={() => { onChange({ propertyType: opt }); next(); }} className="w-full text-left p-3 border rounded-lg hover:bg-gray-50">{opt}</button>
        ))}
        <div className="mt-3">
          <label className="text-sm text-gray-500">Or pick a product</label>
          <input value={data.product || ""} onChange={(e) => onChange({ product: e.target.value })} placeholder="Optional product name" className="w-full p-3 border rounded mt-2" />
        </div>
      </div>
    </div>
  );
}

function LocationStep({ data, onChange, back, next }: any) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Where is the project located?</h3>
      <select
        value={data.location}
        onChange={(e) => onChange({ location: e.target.value })}
        className="w-full p-3 border rounded mb-4"
      >
        <option value="">Select Location</option>
        <option value="Mbombela">Mbombela (Nelspruit)</option>
        <option value="White River">White River</option>
        <option value="Hazyview">Hazyview</option>
        <option value="Sabie">Sabie</option>
        <option value="Graskop">Graskop</option>
        <option value="Thaba Chweu">Thaba Chweu</option>
        <option value="Lydenburg">Lydenburg</option>
        <option value="Mashishing">Mashishing</option>
        <option value="Ermelo">Ermelo</option>
        <option value="Secunda">Secunda</option>
        <option value="Evander">Evander</option>
        <option value="Bethal">Bethal</option>
        <option value="Trichardt">Trichardt</option>
        <option value="Standerton">Standerton</option>
        <option value="Delmas">Delmas</option>
        <option value="Emalahleni">Emalahleni (Witbank)</option>
        <option value="Kriel">Kriel</option>
        <option value="Ogies">Ogies</option>
        <option value="Hendrina">Hendrina</option>
        <option value="Middelburg">Middelburg</option>
        <option value="Carolina">Carolina</option>
        <option value="Chrissiesmeer">Chrissiesmeer</option>
        <option value="Badplaas">Badplaas</option>
        <option value="Amsterdam">Amsterdam</option>
        <option value="Piet Retief">Piet Retief (Mkhondo)</option>
        <option value="Volksrust">Volksrust</option>
        <option value="Wakkerstroom">Wakkerstroom</option>
        <option value="Barberton">Barberton</option>
        <option value="Kaapmuiden">Kaapmuiden</option>
        <option value="Malelane">Malelane</option>
        <option value="Komatipoort">Komatipoort</option>
        <option value="Skukuza">Skukuza</option>
        <option value="Bushbuckridge">Bushbuckridge</option>
        <option value="Acornhoek">Acornhoek</option>
        <option value="Dwarsloop">Dwarsloop</option>
        <option value="Thulamahashe">Thulamahashe</option>
        <option value="Matibidi">Matibidi</option>
        <option value="Ekulindeni">Ekulindeni</option>
        <option value="Elukwatini">Elukwatini</option>
        <option value="Badplaas">Badplaas</option>
        <option value="Ngodwana">Ngodwana</option>
        <option value="Machadodorp">Machadodorp (eNtokozweni)</option>
        <option value="Waterval Boven">Waterval Boven</option>
        <option value="Waterval Onder">Waterval Onder</option>
        <option value="KaNyamazane">KaNyamazane</option>
        <option value="Matsulu">Matsulu</option>
        <option value="Other">Other</option>
      </select>

      <div className="flex justify-between">
        <button onClick={back} className="px-4 py-2 border rounded">Back</button>
        <button onClick={next} className="px-4 py-2 bg-[var(--warm-terracotta)] text-white rounded">Next</button>
      </div>
    </div>
  );
}

function SystemStep({ data, onChange, back, next }: any) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Estimated system size</h3>
      <select value={data.systemSize} onChange={(e) => onChange({ systemSize: e.target.value })} className="w-full p-3 border rounded mb-4">
        <option value="">Select size</option>
        <option value="1-3kW">Small — 1–3 kW</option>
        <option value="4-6kW">Medium — 4–6 kW</option>
        <option value="7-10kW">Large — 7–10 kW</option>
        <option value="custom">Custom</option>
      </select>

      <div className="mb-4">
        <label className="flex items-center gap-2">
          <input type="radio" name="finance" checked={data.finance === "no"} onChange={() => onChange({ finance: "no" })} /> No finance
        </label>
        <label className="flex items-center gap-2 mt-2">
          <input type="radio" name="finance" checked={data.finance === "yes"} onChange={() => onChange({ finance: "yes" })} /> Interested in finance
        </label>
      </div>

      <div className="flex justify-between">
        <button onClick={back} className="px-4 py-2 border rounded">Back</button>
        <button onClick={next} className="px-4 py-2 bg-[var(--warm-terracotta)] text-white rounded">Next</button>
      </div>
    </div>
  );
}

function ContactStep({ data, onChange, back, submit, loading }: any) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Your contact details</h3>
      <input value={data.name} onChange={(e) => onChange({ name: e.target.value })} placeholder="Full name" className="w-full p-3 border rounded mb-3" />
      <input value={data.phone} onChange={(e) => onChange({ phone: e.target.value })} placeholder="Phone or WhatsApp" className="w-full p-3 border rounded mb-3" />
      <input value={data.email} onChange={(e) => onChange({ email: e.target.value })} placeholder="Email (optional)" className="w-full p-3 border rounded mb-3" />
      <div className="flex justify-between">
        <button onClick={back} className="px-4 py-2 border rounded">Back</button>
        <button onClick={submit} disabled={loading} className="px-4 py-2 bg-[var(--soft-gold)] text-[var(--deep-slate)] rounded">
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
}
