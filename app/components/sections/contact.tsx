
"use client";

import { ArrowUpRight } from "lucide-react";
import { socials } from "../../data/contacts";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};



export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  const form = e.currentTarget;
  setStatus('loading')  

  const formData = new FormData(form)
  
   const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
   };

   try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

  console.log("API response:", result);
  console.log("API status:", res.status);

      if (!res.ok) {
  throw new Error(result.error || "Failed to send message");
}

      setStatus("success");
      form.reset();
    } catch(error) {
      console.log("frontend contact error:", error);
      
      setStatus("error");
    }
  };


  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Section label */}
          <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-border-strong" />
            <span className="font-[Manrope] text-xs font-medium uppercase tracking-[0.2em] text-text-secondary">
              04 — Contact
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            id="contact-heading"
            className="max-w-2xl font-syne text-4xl font-medium leading-[1.05] tracking-tight text-text-primary sm:text-5xl md:text-6xl"
          >
            Let&apos;s build{" "}
            <span className="text-text-secondary">something together.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl font-[Manrope] text-sm leading-7 text-text-secondary md:text-base"
          >
            Got a project, an idea, or just want to talk shop — my inbox is
            open. I usually reply within a day or two.
          </motion.p>

          {/* Two-column: socials + form */}
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 ">
            {/* Left — socials grid */}
            <motion.div
              variants={container}
              className="grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {socials.map(({ label, href, icon: Icon }) => {
                const isExternal = href.startsWith("http");
                return (
                  <motion.a
                    key={label}
                    variants={fadeUp}
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between rounded-2xl border border-border bg-background/40 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-border-strong"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-text-primary">
                        <Icon size={15} />
                      </div>
                      <p className="font-[Manrope] text-sm font-medium text-text-primary">
                        {label}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-text-secondary transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-text-primary"
                    />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Right — form */}
            <motion.div variants={fadeUp}>
              <Card className="border-border bg-background/40 backdrop-blur-sm">
                <CardContent className="p-6">
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block font-[Manrope] text-xs uppercase tracking-wider text-text-secondary"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        className="border-border bg-background/40"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block font-[Manrope] text-xs uppercase tracking-wider text-text-secondary"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        className="border-border bg-background/40"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block font-[Manrope] text-xs uppercase tracking-wider text-text-secondary"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="What's on your mind?"
                        rows={5}
                        className="border-border bg-background/40"
                        required
                      />
                    </div>

     <Button type="submit" className="w-full rounded-full" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>

      {status === "success" && (
        <p className="text-center text-sm text-green-500">
          Message sent — I&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-sm text-red-500">
          Something went wrong — try emailing me directly instead.
        </p>
      )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}