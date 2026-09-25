"use client";

import { useState, type FormEvent } from "react";

export type InquiryField =
  | { type: "text"; name: string; label: string }
  | { type: "select"; name: string; label: string; options: string[] }
  | { type: "textarea"; name: string; label: string };

export function InquiryForm({
  fields,
  submitLabel,
  note,
  light = false,
}: {
  fields: InquiryField[];
  submitLabel: string;
  note?: string;
  light?: boolean;
}) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  const fieldClasses = `w-full rounded-lg border px-4 py-3 text-sm transition-colors focus:outline-none ${
    light
      ? "border-cream/15 bg-cream/5 placeholder:text-cream/40 focus:border-gold focus:bg-cream/10"
      : "border-charcoal/15 bg-charcoal/[0.03] placeholder:text-charcoal/40 focus:border-forest focus:bg-charcoal/5"
  }`;

  if (submitted) {
    return (
      <p className={light ? "text-cream" : "text-charcoal"}>
        Thank you — we&apos;ve received your message and will be in touch
        shortly.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {fields.map((field) => (
        <label key={field.name} className="flex flex-col gap-2 text-sm">
          <span
            className={`text-xs tracking-widest uppercase ${
              light ? "text-cream/60" : "text-charcoal/50"
            }`}
          >
            {field.label}
          </span>
          {field.type === "textarea" ? (
            <textarea
              name={field.name}
              required
              rows={4}
              className={fieldClasses}
            />
          ) : field.type === "select" ? (
            <select
              name={field.name}
              required
              defaultValue=""
              className={fieldClasses}
            >
              <option value="" disabled>
                Select an option
              </option>
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.name === "email" ? "email" : "text"}
              name={field.name}
              required
              className={fieldClasses}
            />
          )}
        </label>
      ))}

      <button
        type="submit"
        className={`mt-2 w-fit rounded-full px-7 py-3 text-sm font-medium transition-opacity hover:opacity-90 ${
          light ? "bg-gold text-charcoal" : "bg-forest text-cream"
        }`}
      >
        {submitLabel}
      </button>

      {note && (
        <p className={`text-xs ${light ? "text-cream/50" : "text-charcoal/50"}`}>
          {note}
        </p>
      )}
    </form>
  );
}
