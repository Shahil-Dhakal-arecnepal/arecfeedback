import React, { useEffect, useState } from "react";

const Feedback = () => {
  const [feedbacks] = useState([
    {
      id: 1,
      name: "Test Student 1",
      source: "social-media",
      clarify: "",
      rating: 4,
      feedback: "The office staff was very helpful and courteous.",
      suggestion: "More seating in the waiting area.",
      submittedAt: "2025-06-28 12:00",
    },
    {
      id: 2,
      name: "Test Student 2",
      source: "event",
      clarify: "",
      rating: 2,
      feedback: "It was okay.",
      suggestion: "improve facility",
      submittedAt: "2025-06-29 09:15",
    },
    // add more entries with unique IDs
  ]);

  const [selectedFeedback, setSelectedFeedback] = useState(null);

  const sourceLabels = {
    "social-media": "Social Media",
    friend: "Friends or Family",
    google: "Google",
    event: "Events",
    other: "Others",
  };

  const closeModal = () => setSelectedFeedback(null);

  return (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-[#012169]">Student Feedback</h2>
        <p className="text-sm italic text-[#4B5563] mt-1">
          Manage student feedback and customer care records.
        </p>
      </div>

      <table className="w-full table-auto border-collapse text-sm text-[#1F2937]">
        <thead className="bg-[#012169] text-white">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Source</th>
            <th className="p-3 text-center">Rating</th>
            <th className="p-3 text-left">Submitted At</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.length === 0 ? (
            <tr>
              <td colSpan="4" className="p-4 text-center text-[#9CA3AF]">
                No feedback found.
              </td>
            </tr>
          ) : (
            feedbacks.map((fb) => (
              <tr
                key={fb.id}
                onClick={() => setSelectedFeedback(fb)}
                className="border-t border-[#E5E7EB] hover:bg-[rgba(1,33,105,0.15)] transition cursor-pointer"
              >
                <td className="p-3 font-medium">{fb.name}</td>
                <td className="p-3">{sourceLabels[fb.source] || fb.source}</td>
                <td className="p-3 text-center text-[#C8102E] font-semibold">
                  {"★".repeat(fb.rating) + "☆".repeat(5 - fb.rating)}
                </td>
                <td className="p-3 whitespace-nowrap">{fb.submittedAt}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {selectedFeedback && (
        <div className="fixed inset-0 bg-[#012169] bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-md shadow-lg w-full max-w-lg p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-[#012169] hover:text-red-500 hover:cursor-pointer text-3xl"
            >
              ×
            </button>
            <h2 className="text-xl font-semibold text-[#012169] mb-3">Feedback Details</h2>
            <div className="space-y-2 text-sm text-[#012169]">
              <div><strong>Name:</strong> {selectedFeedback.name}</div>
              <div><strong>Source:</strong> {sourceLabels[selectedFeedback.source] || selectedFeedback.source}</div>
              {selectedFeedback.source === "other" && selectedFeedback.clarify && (
                <div><strong>Clarify:</strong> {selectedFeedback.clarify}</div>
              )}
              <div><strong>Rating:</strong> {selectedFeedback.rating} / 5</div>
              <div><strong>Feedback:</strong> <p className="mt-1 text-[#4B5563]">{selectedFeedback.feedback}</p></div>
              <div><strong>Suggestion:</strong> <p className="mt-1 text-[#4B5563]">{selectedFeedback.suggestion || "-"}</p></div>
              <div><strong>Submitted At:</strong> {selectedFeedback.submittedAt}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Feedback;
