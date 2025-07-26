import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaTags,
  FaGift,
  FaHeart,
  FaChartPie,
  FaClock,
  FaUsers,
} from "react-icons/fa";
import { WebsiteImages } from "../../../common/BindImages";
import FormPage from "../../../common/FormPage";
import WhatsAppButton from "../../../common/WhatsApp/WhatsAppButton";

const loyaltySteps = [
  {
    icon: <FaTags className="text-white text-2xl" />,
    title: "Smart Coupons",
    desc: "AI-driven, personalized discounts delivered at the right time to maximize engagement.",
  },
  {
    icon: <FaGift className="text-white text-2xl" />,
    title: "Reward System",
    desc: "Earn points on purchases and redeem them for rewards or exclusive offers.",
  },
  {
    icon: <FaHeart className="text-white text-2xl" />,
    title: "Customer Delight",
    desc: "Build brand loyalty through recognition, surprises, and thank-you bonuses.",
  },
];
export default function CustomerLoyalty() {
  return (
    <>
      {/*======================= Banner Section ==============================*/}
      <section className="bg-gradient-to-b from-blue-50 via-white to-blue-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            The Power of <span className="text-blue-600">Customer Loyalty</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A strategic loyalty system that turns your customers into your
            biggest promoters — automated, intelligent, and beautifully
            designed.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="border-l-4 border-blue-500 absolute h-full left-6 top-0 z-0" />

          <div className="flex flex-col gap-16 relative z-10">
            {loyaltySteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative pl-20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                <div className="absolute left-0 top-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  {step.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-1">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-base">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Card */}
        <div className="mt-20 max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-8 border-l-4 border-green-500">
          <h4 className="text-green-700 font-bold text-2xl mb-4">
            Key Metrics
          </h4>
          <ul className="grid md:grid-cols-3 gap-6 text-center text-gray-700 text-lg font-medium">
            <li>
              <span className="block text-3xl text-green-600 font-bold">
                35%
              </span>
              Repeat Customer Increase
            </li>
            <li>
              <span className="block text-3xl text-green-600 font-bold">
                10K+
              </span>
              Coupons Used Monthly
            </li>
            <li>
              <span className="block text-3xl text-green-600 font-bold">
                99%
              </span>
              Satisfaction Rate
            </li>
          </ul>
        </div>
      </section>

      {/*=======================Dashboard Loyalty ==============================*/}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
          >
            <img
              src={WebsiteImages.LoyaltyWebsite}
              alt="Loyalty Dashboard Interface"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* LEFT TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
              Smarter <span className="text-blue-600">Loyalty Management</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Our{" "}
              <span className="font-semibold text-blue-600">
                Loyalty Dashboard
              </span>{" "}
              gives your team real-time access to customer insights, engagement
              history, and reward performance—ensuring better retention with
              less effort.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: <FaChartPie className="text-white" />,
                  title: "Behavior-Based Insights",
                  desc: "Track what drives loyalty using data visualizations and smart filters.",
                },
                {
                  icon: <FaGift className="text-white" />,
                  title: "Automated Rewards",
                  desc: "Set triggers for automatic coupon deliveries, tiers, or cashbacks.",
                },
                {
                  icon: <FaClock className="text-white" />,
                  title: "Real-Time Tracking",
                  desc: "Live metrics for redemption, performance, and active campaigns.",
                },
                {
                  icon: <FaUsers className="text-white" />,
                  title: "Customer Segments",
                  desc: "Personalize campaigns based on engagement score, region, or lifetime value.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white border-l-4 border-blue-500 p-4 rounded-xl shadow hover:shadow-md transition-all"
                >
                  <div className="bg-blue-600 p-2 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/*======================= Mobile App Features ==============================*/}
      <section className="bg-gradient-to-br from-white to-blue-50 py-24 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT – Text & Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-snug">
              Loyalty <span className="text-blue-600">Mobile App</span> Features
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Power your customer engagement with our sleek mobile
              app—personalized, real-time, and reward-driven.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Mobile Coupon Wallet",
                  desc: "Access, save & redeem all your earned coupons on the go.",
                  icon: "🎟️",
                },
                {
                  title: "Reward Points Tracker",
                  desc: "Live view of bonus points and transaction history.",
                  icon: "📊",
                },
                {
                  title: "Scan to Redeem",
                  desc: "Instant redemption via QR code scanning in-store.",
                  icon: "📲",
                },
                {
                  title: "Notification Alerts",
                  desc: "Get notified for new offers, tier upgrades, and more.",
                  icon: "🔔",
                },
                {
                  title: "Personalized Offers",
                  desc: "Tailored discounts based on behavior and location.",
                  icon: "🎯",
                },
                {
                  title: "Referral Rewards",
                  desc: "Earn points by inviting friends and family.",
                  icon: "🤝",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT – App Screenshot */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={WebsiteImages.LoyaltyMobile}
              alt="Loyalty Mobile App UI"
              className="rounded-3xl w-full max-w-[500px] shadow-2xl border border-gray-200"
            />
          </motion.div>
        </div>
      </section>

      {/*==================== Form =====================*/}
      <section>
        <FormPage />
      </section>

      <WhatsAppButton />
    </>
  );
}
