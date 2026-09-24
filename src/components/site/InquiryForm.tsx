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

  const fieldClasses = `w-full border-b bg-transparent py-2 text-sm focus:outline-none ${
    light
      ? "border-cream/30 placeholder:text-cream/40 focus:border-cream"
      : "border-charcoal/30 placeholder:text-charcoal/40 focus:border-charcoal"
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {fields.map((field) => (
        <label key={field.name} className="flex flex-col gap-2 text-sm">
          <span className={light ? "text-cream/70" : "text-charcoal/70"}>
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
        className={`mt-2 w-fit rounded-full px-6 py-3 text-sm ${
          light ? "bg-cream text-charcoal" : "bg-forest text-cream"
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
