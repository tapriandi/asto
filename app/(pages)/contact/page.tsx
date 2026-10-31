"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { site } from "@/site.config";
import Reveal from "@/app/components/primitives/Reveal";

const schema = yup.object({
  name: yup.string().required("Nama wajib diisi"),
  email: yup.string().email("Format email belum benar").required("Email wajib diisi"),
  company: yup.string().required("Nama bisnis wajib diisi"),
  budget: yup.string().required("Pilih kisaran budget"),
  message: yup.string().required("Ceritakan kebutuhan Anda"),
});

type FormValues = yup.InferType<typeof schema>;
const budgets = ["Di bawah Rp 5jt", "Rp 5–15jt", "Rp 15–50jt", "Di atas Rp 50jt"];

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const onSubmit = (values: FormValues) => {
    const text = [
      `Halo AstoDigi, saya ${values.name} dari ${values.company}.`,
      `Email: ${values.email}`,
      `Budget: ${values.budget}`,
      `Kebutuhan: ${values.message}`,
    ].join("\n");
    window.open(`https://wa.me/${site.brand.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="pb-[var(--section-gap)] pt-36">
      <div className="site-shell grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="label">( _05 ) Contact</span>
            <h1 className="display-section mt-6">Mari ngobrol.</h1>
            <p className="mt-8 max-w-[31ch] text-lg leading-relaxed text-muted">Ceritakan bisnis dan kebutuhan Anda. Form ini akan membuka draft WhatsApp untuk dikirim manual.</p>
          </Reveal>
          <Reveal delay={0.08}>
            <dl className="mt-14 space-y-6 border-t border-line pt-8">
              <div><dt className="label">Email</dt><dd className="mt-2 text-xl"><a href={`mailto:${site.contact.email}`} className="line-hover">{site.contact.email}</a></dd></div>
              <div><dt className="label">WhatsApp</dt><dd className="mt-2 text-xl">{site.brand.whatsapp}</dd></div>
              <div><dt className="label">Studio</dt><dd className="mt-2 text-xl">{site.contact.address}</dd></div>
            </dl>
          </Reveal>
        </div>
        <Reveal delay={0.05}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 rounded-[2rem] border border-line bg-white p-8 text-fg shadow-sm md:p-10" noValidate>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <Field label="Nama" error={errors.name?.message}><input {...register("name")} placeholder="Nama Anda" /></Field>
              <Field label="Email" error={errors.email?.message}><input {...register("email")} type="email" placeholder="you@company.com" /></Field>
            </div>
            <Field label="Nama bisnis" error={errors.company?.message}><input {...register("company")} placeholder="Nama bisnis" /></Field>
            <Field label="Budget" error={errors.budget?.message}>
              <select {...register("budget")} defaultValue=""><option value="" disabled>Pilih kisaran</option>{budgets.map((budget) => <option key={budget} value={budget}>{budget}</option>)}</select>
            </Field>
            <Field label="Kebutuhan" error={errors.message?.message}><textarea {...register("message")} rows={5} placeholder="Website seperti apa yang Anda butuhkan?" /></Field>
            <button type="submit" className="border border-fg px-7 py-4 text-lg transition-colors hover:bg-fg hover:text-bg" data-cursor="hover">Buka WhatsApp ↗</button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return <label className="block"><span className="label text-muted-2">{label}</span><div className="mt-2 [&_input]:w-full [&_input]:border-b [&_input]:border-line [&_input]:bg-transparent [&_input]:py-3 [&_input]:outline-none [&_input]:placeholder:text-muted [&_select]:w-full [&_select]:border-b [&_select]:border-line [&_select]:bg-transparent [&_select]:py-3 [&_select]:outline-none [&_textarea]:w-full [&_textarea]:resize-none [&_textarea]:border-b [&_textarea]:border-line [&_textarea]:bg-transparent [&_textarea]:py-3 [&_textarea]:outline-none [&_textarea]:placeholder:text-muted">{children}</div>{error ? <span className="mt-2 block text-xs text-red-600">{error}</span> : null}</label>;
}
