import React from "react";

export default function ResumePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] w-full gap-8">
      <h1 className="text-4xl font-bold text-white">Resume</h1>
      <div className="w-full h-[800px] border border-white/10 rounded-xl overflow-hidden bg-white/5">
        <iframe
          src="/resume.pdf"
          width="100%"
          height="100%"
          className="border-none"
          title="Resume"
        ></iframe>
      </div>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors"
      >
        Download Resume
      </a>
    </div>
  );
}
