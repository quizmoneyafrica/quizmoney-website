import React from "react";
import CustomImage from "../../common/CustomImage";
import PageLayout from "@/app/layout/pageLayout";

export default function ContactUsSection() {
  return (
    <PageLayout>
      <div className=" mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get in Touch with us
              </h2>
              <p className="text-gray-600">
                Tell us what you have got in mind, our Friendly team is here to
                help.
              </p>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#E4F1FA] rounded-lg flex items-center justify-center">
                <CustomImage alt="" className=" size-6" src={"/location.svg"} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">
                  Our Location
                </h3>
                <p className="text-gray-600">Ikeja, Lagos Nigeria</p>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#E4F1FA] rounded-lg flex items-center justify-center">
                <CustomImage
                  alt=""
                  className=" size-6"
                  src={"/phone-icon.svg"}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">
                  Phone Number
                </h3>
                <div className="space-y-1">
                  <p className="text-gray-600">+2349012345678</p>
                  <p className="text-gray-600">+2349012345678</p>
                </div>
              </div>
            </div>

            {/* Email Address */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#E4F1FA] rounded-lg flex items-center justify-center">
                <CustomImage alt="" className=" size-6" src={"/sms.svg"} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">
                  Email Address
                </h3>
                <p className="text-gray-600">support@quizmoney.com</p>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-[#E4F1FA] px-8 py-10 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Send Your Message</h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-white"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-white"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Type your message here"
                  className="w-full px-4 py-3 rounded-lg bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-900 rounded-full text-white py-4 px-6 font-semibold hover:bg-primary-900 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
