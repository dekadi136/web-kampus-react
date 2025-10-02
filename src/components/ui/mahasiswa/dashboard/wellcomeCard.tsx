import React from "react";

export default function WelcomeCard() {
  return (
    <div className="bg-sky-600 rounded-lg p-6 flex items-center justify-between text-slate-100">
      {/* Text Section */}
      <div>
        <h2 className="font-bold text-3xl mb-2">Hello Sophia!</h2>
        <p className="text-lg">
          Today you have 9 new applications. <br />
          Also you need to hire ROR Developer, React .JS Developer.
        </p>
        <a
          href="#"
          className="text-sm underline mt-3 inline-block hover:text-blue-200"
        >
          Read more
        </a>
      </div>
    </div>
  );
}
