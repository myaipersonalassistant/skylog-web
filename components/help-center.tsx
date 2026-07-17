"use client";

import { useMemo, useState } from "react";
import {
  BedDouble,
  ChevronDown,
  CircleUserRound,
  CreditCard,
  Luggage,
  PlaneTakeoff,
  Search,
} from "lucide-react";

const categories = [
  { label: "Flights & trips", icon: PlaneTakeoff },
  { label: "Stays & cars", icon: BedDouble },
  { label: "Account", icon: CircleUserRound },
  { label: "Payments", icon: CreditCard },
] as const;

const articles = [
  {
    category: "Flights & trips",
    question: "Where can I find my booking?",
    answer:
      "Sign in and open Manage trips. Your confirmed SkyLog bookings appear there with the itinerary, booking reference, traveler details, and available management options.",
  },
  {
    category: "Flights & trips",
    question: "How do I change or cancel a flight?",
    answer:
      "Open the booking in Manage trips and review the change or cancellation options. Availability and fees depend on the airline's fare rules. If no online action appears, contact SkyLog support with your booking reference.",
  },
  {
    category: "Flights & trips",
    question: "How do I add bags, seats, or other flight extras?",
    answer:
      "Open Flight extras and enter your booking details, or select the relevant trip from Manage trips. Extras are subject to airline availability and may vary by route and fare.",
  },
  {
    category: "Stays & cars",
    question: "Where are my hotel and car-rental confirmations?",
    answer:
      "Confirmed stays and car rentals appear alongside your other bookings in Manage trips. We also send confirmation details to the email address used at checkout.",
  },
  {
    category: "Stays & cars",
    question: "What do I need when collecting a rental car?",
    answer:
      "The main driver typically needs the booking confirmation, a valid driving licence, identification, and a payment card in their name. Check the supplier terms for age and deposit requirements.",
  },
  {
    category: "Account",
    question: "I cannot sign in to my SkyLog account.",
    answer:
      "Confirm that you are using the same sign-in method used to create the account. For email sign-in, request a password reset. If access still fails, contact support from the email address associated with your account.",
  },
  {
    category: "Account",
    question: "How do I manage or delete my account?",
    answer:
      "Account and profile controls are available after sign-in. You can update personal details and request account deletion from your profile settings.",
  },
  {
    category: "Payments",
    question: "When will I be charged for a booking?",
    answer:
      "The payment timing is shown before confirmation and can vary by product or supplier. Some stays or rentals are paid later. Always review the displayed payment schedule and cancellation terms.",
  },
  {
    category: "Payments",
    question: "How does the SkyLog Pro 7-day free trial work?",
    answer:
      "Your selected SkyLog Pro plan starts with seven free days. You are charged the displayed billing total when the trial ends unless you cancel before then.",
  },
  {
    category: "Payments",
    question: "Can I change from monthly to quarterly or yearly billing?",
    answer:
      "Yes. You can change your SkyLog Pro billing period from your account. Your account will show the timing and any billing adjustment before you confirm.",
  },
  {
    category: "Payments",
    question: "What currency are SkyLog Pro prices shown in?",
    answer:
      "SkyLog Pro prices are shown in US dollars. Taxes may apply based on your billing location and the payment platform used.",
  },
  {
    category: "Payments",
    question: "Does changing billing periods affect my travel data?",
    answer:
      "No. Changing how often you are billed does not remove your flight logs, journey history, or account data.",
  },
  {
    category: "Payments",
    question: "Can I cancel SkyLog Pro?",
    answer:
      "Yes. You can cancel renewal from your account. Pro access continues through the end of the billing period already paid for.",
  },
  {
    category: "Payments",
    question: "Why is my refund not showing yet?",
    answer:
      "After a refund is approved, banks and payment providers may take several business days to post it. The exact timing depends on the supplier, payment method, and card issuer.",
  },
] as const;

export function HelpCenter() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return articles;

    return articles.filter((article) =>
      [article.category, article.question, article.answer]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [query]);

  return (
    <div className="font-header text-left">
      <div className="relative mx-auto mt-8 max-w-2xl">
        <Search
          className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
          strokeWidth={1.8}
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search bookings, accounts, plans, payments..."
          aria-label="Search the help centre"
          className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-13 pr-5 text-[0.86rem] font-medium text-[#253f47] shadow-[0_14px_40px_rgba(42,112,126,0.1)] outline-none transition placeholder:font-normal placeholder:text-slate-400 focus:border-skylog-teal focus:ring-4 focus:ring-skylog-teal/10"
        />
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.label}
              type="button"
              onClick={() => setQuery(category.label)}
              className="group flex flex-col items-start rounded-2xl border border-slate-200 bg-white p-4 text-left transition-all hover:-translate-y-0.5 hover:border-skylog-mint hover:shadow-[0_12px_35px_rgba(42,112,126,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-skylog-teal/40 sm:flex-row sm:items-center sm:gap-3"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-skylog-teal/[0.08] text-skylog-teal transition-colors group-hover:bg-skylog-teal group-hover:text-white">
                <Icon className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <span className="mt-3 text-[0.82rem] font-bold text-[#253f47] sm:mt-0">
                {category.label}
              </span>
            </button>
          );
        })}
      </div>

      <section className="mt-14" aria-labelledby="help-articles-title">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-skylog-teal">
              Helpful answers
            </p>
            <h2 id="help-articles-title" className="mt-2 text-2xl font-[760] tracking-[-0.025em] text-[#193f48]">
              {query ? "Search results" : "Frequently asked questions"}
            </h2>
          </div>
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="text-[0.78rem] font-bold text-skylog-teal hover:text-skylog-teal-deep"
            >
              Clear search
            </button>
          )}
        </div>

        <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-5 sm:px-7">
          {results.map((article) => (
            <details key={article.question} className="group py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-left text-[0.86rem] font-bold text-[#253f47] outline-none [&::-webkit-details-marker]:hidden">
                <span>
                  <span className="mb-1 block text-[0.62rem] font-extrabold uppercase tracking-[0.14em] text-skylog-teal">
                    {article.category}
                  </span>
                  {article.question}
                </span>
                <ChevronDown
                  className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="max-w-3xl pb-5 pr-8 text-[0.84rem] leading-7 text-[#5a7077]">
                {article.answer}
              </p>
            </details>
          ))}

          {results.length === 0 && (
            <div className="py-12 text-center" aria-live="polite">
              <Luggage className="mx-auto h-6 w-6 text-skylog-teal" strokeWidth={1.6} aria-hidden="true" />
              <p className="mt-3 text-[0.86rem] font-bold text-[#253f47]">No answer found</p>
              <p className="mt-1 text-[0.82rem] text-slate-500">Try a different search or contact our team.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
