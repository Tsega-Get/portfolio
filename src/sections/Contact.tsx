import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// --- TYPE DEFINITIONS ---
interface FormState {
  name: string;
  email: string;
  message: string;
}
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}
type InputFieldProps = {
  label: string;
  name: keyof FormState;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: string;
  as?: "input" | "textarea";
};

// --- UI COMPONENTS ---
const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  as: Component = "input",
}: InputFieldProps) => (
  <label className="flex flex-col">
    <span className="text-white font-medium mb-4">{label}</span>
    <Component
      id={name}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
      rows={Component === "textarea" ? 7 : undefined}
    />
  </label>
);

// --- MAIN CONTACT COMPONENT ---
const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [confirmation, setConfirmation] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(form.email))
      newErrors.email = "Please enter a valid email address.";
    if (!form.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Tsega", // Change this to your name
          from_email: form.email,
          to_email: "tsega.get.grace@gmail.com", // Change this to your email
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setConfirmation(
          "Thank you! I will get back to you as soon as possible."
        );
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error("EmailJS Error:", error);
        setConfirmation("Something went wrong. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex items-center justify-center py-16"
    >
      <div className="container mx-auto px-4">
        {/* The form is now centered */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 0.8, ease: "easeOut" }}
          className="bg-black-100 p-8 rounded-2xl w-full max-w-3xl mx-auto"
        >
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            Get in touch
          </p>
          <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Contact Me.
          </h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-6"
          >
            <InputField
              label="Your Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
            />
            {errors.name && (
              <span className="text-red-500 text-sm -mt-4">{errors.name}</span>
            )}

            <InputField
              label="Email Address"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
            />
            {errors.email && (
              <span className="text-red-500 text-sm -mt-4">{errors.email}</span>
            )}

            <InputField
              as="textarea"
              label="Your Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
            />
            {errors.message && (
              <span className="text-red-500 text-sm -mt-4">
                {errors.message}
              </span>
            )}

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
            {confirmation && (
              <p className="text-green-500 mt-4">{confirmation}</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
