"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { site } from "@/site.config";
import Reveal from "@/app/components/primitives/Reveal";

const schema = yup.object({
  name: yup.string().required("Nama wajib diisi"),
  email: yup.string().email("Format email belum benar").required("Email wajib diisi"),
  company: yup.string().required("Nama usaha wajib diisi"),
  city: yup.string().required("Kota wajib diisi"),
  message: yup.string(),
});

type FormValues = yup.InferType<typeof schema>;

export default function ContactClient() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const onSubmit = (values: FormValues) => {
    const subject = `Cek gratis Google Maps — ${values.company}`;
    const body = [
      `Nama: ${values.name}`,
      `Usaha: ${values.company}`,
      `Kota: ${values.city}`,
      `Email: ${values.email}`,
      ...(values.message ? ["", `Catatan: ${values.message}`] : []),
    ].join("\n");
    window.open(`mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, "_self");
  };

  return (
    <section className="pb-[var(--section-gap)] pt-36">
      <div className="site-shell grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="label">( _06 ) Contact</span>
            <h1 className="display-section mt-6">Cek gratis.</h1>
            <p className="mt-8 max-w-[31ch] text-lg leading-relaxed text-muted">Isi nama usaha dan kota Anda. Usaha Anda akan dicek apakah sudah muncul di Google Maps, lalu dibalas lewat email.</p>
          </Reveal>
          <Reveal delay={0.08}>
            <dl className="mt-14 space-y-6 border-t border-line pt-8">
              <div><dt className="label">Email</dt><dd className="mt-2 text-xl"><a href={`mailto:${site.contact.email}`} className="line-hover">{site.contact.email}</a></dd></div>
              <div><dt className="label">WhatsApp</dt><dd className="mt-2 text-xl">{site.contact.phone}</dd></div>
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
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <Field label="Nama usaha" error={errors.company?.message}><input {...register("company")} placeholder="Nama usaha" /></Field>
              <Field label="Kota" error={errors.city?.message}><input {...register("city")} placeholder="Kota / kecamatan" /></Field>
            </div>
            <Field label="Catatan (opsional)" error={errors.message?.message}><textarea {...register("message")} rows={3} placeholder="Alamat, tautan Instagram, atau hal lain yang perlu dicek" /></Field>
            <button type="submit" className="border border-fg px-7 py-4 text-lg transition-colors hover:bg-fg hover:text-bg" data-cursor="hover">Kirim permintaan cek ↗</button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return <label className="block"><span className="label text-muted-2">{label}</span><div className="mt-2 [&_input]:w-full [&_input]:border-b [&_input]:border-line [&_input]:bg-transparent [&_input]:py-3 [&_input]:outline-none [&_input]:placeholder:text-muted [&_select]:w-full [&_select]:border-b [&_select]:border-line [&_select]:bg-transparent [&_select]:py-3 [&_select]:outline-none [&_textarea]:w-full [&_textarea]:resize-none [&_textarea]:border-b [&_textarea]:border-line [&_textarea]:bg-transparent [&_textarea]:py-3 [&_textarea]:outline-none [&_textarea]:placeholder:text-muted">{children}</div>{error ? <span className="mt-2 block text-xs text-red-600">{error}</span> : null}</label>;
}
