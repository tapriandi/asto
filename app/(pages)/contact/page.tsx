"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { site } from "@/site.config";
import Reveal from "@/app/components/primitives/Reveal";

const schema = yup.object({
  name: yup.string().required("Tell us your name"),
  email: yup.string().email("That email doesn't look right").required("We need an email"),
  company: yup.string().required("Which company are you with?"),
  budget: yup.string().required("Pick a range"),
  message: yup.string().required("Tell us about the project"),
});

type FormValues = yup.InferType<typeof schema>;

const budgets = ["< Rp 5jt", "Rp 5–15jt", "Rp 15–50jt", "Rp 50jt+"];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const onSubmit = async () => {
    // ponytail: no backend yet — wire this to the client's inbox/CRM.
    await new Promise((r) => setTimeout(r, 500));
    setSent(true);
    reset();
  };

  return (
    <section className="container-edge pb-[var(--spacing-section)] pt-40">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div>
          <Reveal>
            <span className="label">( _05 ) Contact</span>
            <h1 className="display-xl mt-6 font-display">Say hello.</h1>
            <p className="mt-8 max-w-[34ch] text-lg leading-relaxed text-muted">
              Tell us what you are building. We reply within two working days.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <dl className="mt-14 space-y-6 border-t border-line pt-8">
              <div>
                <dt className="label">Email</dt>
                <dd className="mt-2 font-display text-xl tracking-tight">
                  <a href={`mailto:${site.contact.email}`} className="line-hover">
                    {site.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label">Phone</dt>
                <dd className="mt-2 font-display text-xl tracking-tight">
                  {site.contact.phone}
                </dd>
              </div>
              <div>
                <dt className="label">Studio</dt>
                <dd className="mt-2 font-display text-xl tracking-tight">
                  {site.contact.address}
                </dd>
              </div>
              <div>
                <dt className="label">Hours</dt>
                <dd className="mt-2 font-display text-xl tracking-tight">
                  {site.contact.hours}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8 border border-line bg-surface p-8 md:p-10"
            noValidate
          >
            {sent ? (
              <div className="flex min-h-[24rem] flex-col items-start justify-center gap-4">
                <span className="label">Sent</span>
                <p className="display-md font-display">
                  Thanks — we&apos;ll be in touch within two working days.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <Field label="Name" error={errors.name?.message}>
                    <input
                      {...register("name")}
                      className="w-full border-b border-line bg-transparent py-3 outline-none focus:border-bone"
                      placeholder="Your name"
                    />
                  </Field>
                  <Field label="Email" error={errors.email?.message}>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full border-b border-line bg-transparent py-3 outline-none focus:border-bone"
                      placeholder="you@company.com"
                    />
                  </Field>
                </div>

                <Field label="Company" error={errors.company?.message}>
                  <input
                    {...register("company")}
                    className="w-full border-b border-line bg-transparent py-3 outline-none focus:border-bone"
                    placeholder="Company name"
                  />
                </Field>

                <Field label="Budget" error={errors.budget?.message}>
                  <select
                    {...register("budget")}
                    defaultValue=""
                    className="w-full border-b border-line bg-transparent py-3 outline-none focus:border-bone"
                  >
                    <option value="" disabled className="bg-ink">
                      Select a range
                    </option>
                    {budgets.map((b) => (
                      <option key={b} value={b} className="bg-ink">
                        {b}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Project" error={errors.message?.message}>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className="w-full resize-none border-b border-line bg-transparent py-3 outline-none focus:border-bone"
                    placeholder="What are you building?"
                  />
                </Field>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-4 self-start border border-bone px-8 py-4 text-lg tracking-tight transition-colors duration-300 hover:bg-bone hover:text-ink disabled:opacity-50"
                  data-cursor="hover"
                >
                  {isSubmitting ? "Sending…" : "Send message"}
                </button>
              </>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="label">{label}</span>
      <div className="mt-2">{children}</div>
      {error ? <span className="mt-2 block text-xs text-red-400">{error}</span> : null}
    </label>
  );
}
