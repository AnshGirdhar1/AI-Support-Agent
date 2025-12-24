import { Knex } from "knex";

export async function seed(knex: Knex) {
  await knex("knowledge_base").del();

  await knex("knowledge_base").insert([
    // SHIPPING
    {
      category: "Shipping",
      question: "How long does shipping take?",
      answer:
        "Orders are processed within 1–3 business days. Standard shipping takes 5–7 business days, while express shipping takes 2–3 business days.",
      keywords: ["shipping time", "delivery time", "order delivery"],
    },
    {
      category: "Shipping",
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship internationally. Shipping times and charges vary depending on the destination country.",
      keywords: ["international shipping", "global delivery"],
    },
    {
      category: "Shipping",
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive an email with a tracking number and a tracking link.",
      keywords: ["track order", "tracking number"],
    },

    // ORDERS
    {
      category: "Orders",
      question: "How can I place an order?",
      answer:
        "Simply browse our products, add items to your cart, and proceed to checkout. Follow the instructions to complete your purchase.",
      keywords: ["place order", "buy product"],
    },
    {
      category: "Orders",
      question: "Can I modify or cancel my order?",
      answer:
        "Orders can be modified or canceled within 2 hours of placement. Please contact support as soon as possible.",
      keywords: ["cancel order", "modify order"],
    },
    {
      category: "Orders",
      question: "I did not receive an order confirmation email.",
      answer:
        "Please check your spam folder. If you still haven't received it, contact our support team.",
      keywords: ["order confirmation", "email not received"],
    },

    // PAYMENTS
    {
      category: "Payments",
      question: "What payment methods do you accept?",
      answer:
        "We accept credit/debit cards, UPI, net banking, wallets, and select international payment methods.",
      keywords: ["payment methods", "credit card", "UPI"],
    },
    {
      category: "Payments",
      question: "Is it safe to pay on your website?",
      answer:
        "Yes, all payments are processed through secure, encrypted payment gateways.",
      keywords: ["secure payment", "safe payment"],
    },
    {
      category: "Payments",
      question: "My payment was deducted but the order failed.",
      answer:
        "If the amount was deducted, it will be automatically refunded within 5–7 business days.",
      keywords: ["payment failed", "refund pending"],
    },

    // RETURNS & REFUNDS
    {
      category: "Returns",
      question: "What is your return policy?",
      answer:
        "Products can be returned within 7 days of delivery if they are unused and in original packaging.",
      keywords: ["return policy", "returns"],
    },
    {
      category: "Returns",
      question: "How do I initiate a return?",
      answer:
          "Log in to your account, go to Orders, select the item, and click on 'Request Return'.",
      keywords: ["initiate return", "return item"],
    },
    {
      category: "Refunds",
      question: "When will I receive my refund?",
      answer:
        "Refunds are processed within 5–7 business days after the returned item is received and inspected.",
      keywords: ["refund time", "refund status"],
    },

    // ACCOUNT
    {
      category: "Account",
      question: "Do I need an account to place an order?",
      answer:
        "No, you can place an order as a guest. However, creating an account allows easier tracking and faster checkout.",
      keywords: ["guest checkout", "account required"],
    },
    {
      category: "Account",
      question: "I forgot my password. What should I do?",
      answer:
        "Click on 'Forgot Password' on the login page and follow the instructions to reset your password.",
      keywords: ["forgot password", "reset password"],
    },

    // SUPPORT
    {
      category: "Support",
      question: "How can I contact customer support?",
      answer:
        "You can reach us via live chat, email, or by submitting a support ticket through our website.",
      keywords: ["customer support", "contact support"],
    },
    {
      category: "Support",
      question: "What are your customer support hours?",
      answer:
        "Our support team is available Monday to Friday, 9 AM to 6 PM IST.",
      keywords: ["support hours", "customer care timing"],
    },
  ]);
}
