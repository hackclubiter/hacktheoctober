import React from "react";

const About = () => {
  return (
    <div id="About" className="max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col justify-center my-20 selection:bg-[#b4ff39] selection:text-[#170F1E] ">
        <div className='mx-auto shadow-custom3 bg-[#ec3750] rounded-lg p-6'>
        <h1 className='text-3xl md:text-4xl font-bold font-JetBrains'>
          What’s exciting about this event?
        </h1>
        <p className='text-xl md:text-2xl font-medium pt-6 font-JetBrains'>
          {" "}
          A plethora of Open Source Contribution for beginners, developers and
          experts. Learn, Build, Share and Contribute is the main motto. It is a
          30 Days long event, full of exciting workshops, AMAs and Open Source
          Contribution roadmaps. This is an initiative to encourage participants
          to take part in Hacktoberfest and giving back to the open-source
          community by completing pull requests, participating in events, and
          donating to open source projects.
        </p>
      </div>
    </div>
  );
};

export default About;

//
