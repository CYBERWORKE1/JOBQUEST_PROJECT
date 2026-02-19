import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-black flex items-center justify-center px-6 py-16">
      
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-10 text-center border border-white/20">

        {/* Profile Image */}
        <div className="flex justify-center mb-6">
         <img
  src="/eklavya.jpeg"
  alt="Eklavya Kumar"
  className="w-44 h-44 rounded-full object-cover border-4 border-purple-500 shadow-lg hover:scale-105 transition duration-300"
/>

        </div>

        {/* Name */}
        <h2 className="text-4xl font-bold text-white mb-2">
          Eklavya Kumar
        </h2>

        {/* Role */}
        <p className="text-purple-400 text-lg mb-6 font-medium">
          Full Stack Developer | AI Enthusiast
        </p>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
         
          <span className="text-white font-semibold"> </span> 
          I am a Front-End Developer passionate about building AI-driven platforms like JobQuest, which simulates ATS-based resume analysis and smart job matching.
        </p>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {["HTML","CSS","React", "Node.js", "MongoDB",].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-purple-600/30 text-purple-300 rounded-full text-sm border border-purple-500 hover:bg-purple-600 transition"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Email */}
        <p className="text-white mb-4">
          📧 eklavyakumar8155@gmail.com
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-2xl text-purple-400">
          <a href="https://www.linkedin.com/in/eklavya-kumar-63a264260/" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/CYBERWORKE1" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <FaGithub />
          </a>
        </div>

      </div>
    </div>
  );
};

export default About;
