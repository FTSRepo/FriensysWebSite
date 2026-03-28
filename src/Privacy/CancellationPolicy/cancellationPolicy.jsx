import React from "react";

function CancellationPolicy() {
  return (
    <section className="bg-gray-50 min-h-screen py-20 px-4 md:px-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Cancellation Policy – Friensys Info Labs
        </h1>

        <div className="space-y-8 text-gray-700 text-sm leading-relaxed">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              1. Enrollment Cancelation
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Students ko enrollment cancel karne ke liye written request deni
                hogi.
              </li>
              <li>
                Cancelation request ko school ke academic year shuru hone se
                pehle submit karna hoga.
              </li>
              <li>
                Agar request time par milti hai, to student ki enrollment cancel
                kar di jayegi aur fees ka kuch hissa wapas kiya ja sakta hai.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              2. Fee Refund Policy
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Agar student enrollment cancel karte hain to unhe fees ka refund
                mil sakta hai, lekin iske liye kuch conditions hain:
              </li>
              <li>
                Enrollment cancel karne par <strong>100% refund</strong> agar
                request academic year shuru hone se{" "}
                <strong>30 din pehle</strong> milti hai.
              </li>
              <li>
                <strong>50% refund</strong> agar request academic year shuru
                hone ke <strong>15 din pehle</strong> milti hai.
              </li>
              <li>
                <strong>0% refund</strong> agar request academic year shuru hone
                ke baad milti hai.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              3. Service Cancelation
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Agar kisi additional service (jaise ki after-school programs,
                transportation, etc.) ko cancel karna hai, to written request
                deni hogi.
              </li>
              <li>
                Service cancel karne par fees ka refund nahi diya jayega agar
                service shuru ho chuki hai.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              4. Important Notes
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Cancelation requests ko school ke administration office ya
                designated email par bhejna hoga.
              </li>
              <li>Refunds processing mein 4-6 weeks lag sakte hain.</li>
              <li>
                School administration ka final decision sabhi cancelation
                requests par hamesha lagu hoga.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CancellationPolicy;
