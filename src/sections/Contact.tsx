import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaFacebook,
  FaLinkedin,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

// Environment variables for EmailJS
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "+251930412310"; // Default number if not set

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
      className="bg-gray-900 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
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

    const templateParams = {
      from_name: form.name,
      to_name: import.meta.env.VITE_RECEIVER_NAME,
      from_email: form.email,
      to_email: import.meta.env.VITE_RECEIVER_EMAIL,
      message: form.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
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
          className="bg-gray-800 p-8 rounded-2xl w-full max-w-3xl mx-auto"
        >
          <div
            className="flex-1 flex flex-col items-end gap-3 mt-2 
                 text-gray-300 text-[17px] ring-1 ring-gray-600 
                 rounded-md p-4 leading-[30px]"
          >
            <div className="flex flex-row gap-5">
              <p className="font-semibold">Contact me with:</p>
              {/* WhatsApp Chat Link */}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Chat on WhatsApp" // This is the tooltip
                className="text-gray-300 hover:text-green-500 transition-colors duration-300"
              >
                <FaWhatsapp size={28} />
              </a>
              {/* Telegram */}
              <a
                href="https://t.me/Tsega_get"
                target="_blank"
                rel="noopener noreferrer"
                title="Telegram" // This creates the tooltip on hover
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                <FaTelegramPlane size={28} />
              </a>
              {/* Facebook */}
              <a
                href="https://web.facebook.com/tsega.getnet.77/"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook" // Tooltip text
                className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
              >
                <FaFacebook size={28} />
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/tsega-getnet-235908233/" // Replace with your link
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn" // Tooltip text
                className="text-gray-300 hover:text-blue-600 transition-colors duration-300"
              >
                <FaLinkedin size={28} />
              </a>
            </div>
          </div>

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
