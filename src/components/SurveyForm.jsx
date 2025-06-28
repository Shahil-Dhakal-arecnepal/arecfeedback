import React, { useState } from "react";

const SurveyForm = () => {
  const [name, setName] = useState("");
  const [source, setSource] = useState("");
  const [clarify, setClarify] = useState("");
  const [rating, setRating] = useState(3);
  const [feedback, setFeedback] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    setName("");
    setSource("");
    setClarify("");
    setRating(3);
    setFeedback("");
    setSuggestion("");
  };

  const handleRatingClick = (star) => {
    setRating((prev) => (prev === star ? 0 : star));
  };

  return (
        <form
          onSubmit={handleSubmit}
          className="
            bg-[#F6F7FB]
            max-w-md w-full
            px-6 py-2 space-y-5
            mx-auto
            font-sans
            "
          style={{ fontFamily: `'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif` }}
        >
        {/* Logo */}
        <div className="flex justify-center mb-1">
          <img
            src="/logo.png"
            alt="A.R. Education Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-2xl font-semibold text-[#012169] tracking-tight leading-tight">
            A.R. Education
          </h2>
          <p className="text-xs italic text-[#4B5563] mt-0.5 max-w-xs mx-auto">
            Student Feedback — Help us improve, we’re listening.
          </p>
        </div>

        {/* Name */}
        <div className="flex flex-col space-y-1">
          <label
            htmlFor="name"
            className="text-sm font-medium text-[#374151]"
          >
            Full Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-3 py-2 text-sm border border-[#D1D5DB] rounded-sm bg-white placeholder-[#9CA3AF] text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#C8102E] transition"
          />
        </div>

        {/* Source */}
        <div className="flex flex-col space-y-1">
          <label
            htmlFor="source"
            className="text-sm font-medium text-[#374151]"
          >
            Where did you hear about us?
          </label>
          <select
            id="source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            // disabled={source !== ""}
            className="px-3 py-2 text-sm border border-[#D1D5DB] rounded-sm bg-white text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#C8102E] transition"
          >
            <option value="" disabled>--Select--</option>
            <option value="social-media">Social Media</option>
            <option value="friend">Friends or Family</option>
            <option value="google">Google</option>
            <option value="event">Events</option>
            <option value="other">Others</option>
          </select>
        </div>

        {/* Clarify if 'other' */}
        {/* {source === "other" && ( */}
        <div className="flex flex-col space-y-1">
          <label
            htmlFor="clarify"
            className="text-sm font-medium text-[#374151]"
          >
            Please Clarify
          </label>
          <textarea
            id="clarify"
            rows={2}
            placeholder="Clarify a bit..."
            value={clarify}
            onChange={(e) => setClarify(e.target.value)}
            className="px-3 py-2 text-sm border border-[#D1D5DB] rounded-sm bg-white placeholder-[#9CA3AF] text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#C8102E] transition resize-none"
          />
        </div>
        {/* )} */}

        {/* Rating */}
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-[#374151]">
            Rate your experience
          </label>
          <div className="flex space-x-2 text-lg select-none">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => handleRatingClick(star)}
                aria-label={`Rate ${star}`}
                className={`transition ${
                  rating >= star ? "text-[#C8102E]" : "text-gray-300"
                } hover:text-[#A50C28]`}
                style={{ lineHeight: 1 }}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        {/* Feedback */}
        <div className="flex flex-col space-y-1">
          <label
            htmlFor="feedback"
            className="text-sm font-medium text-[#374151]"
          >
            Your Feedback
          </label>
          <textarea
            id="feedback"
            rows={3}
            placeholder="What did you like or dislike?"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="px-3 py-2 text-sm border border-[#D1D5DB] rounded-sm bg-white placeholder-[#9CA3AF] text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#C8102E] transition resize-none"
          />
        </div>

        {/* Suggestions */}
        <div className="flex flex-col space-y-1">
          <label
            htmlFor="suggestion"
            className="text-sm font-medium text-[#374151]"
          >
            Any Suggestions?
          </label>
          <textarea
            id="suggestion"
            rows={2}
            placeholder="Your suggestions"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            className="px-3 py-2 text-sm border border-[#D1D5DB] rounded-sm bg-white placeholder-[#9CA3AF] text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#C8102E] transition resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 text-sm font-semibold text-white bg-[#C8102E] rounded-sm hover:bg-[#A50C28] transition"
        >
          Submit Feedback
        </button>
      </form>
    // </div>
  );
};

export default SurveyForm;
