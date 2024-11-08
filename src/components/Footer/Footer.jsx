import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';

const SocialMediaLinks = () => {
  return (
    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
      
      
      {/* Download Resume */}
      <a className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary flex justify-center items-center w-50 h-50'
        href="/resume.pdf" // Link to your resume in the public directory
        download
        aria-label="Download Resume"
        style={{
          borderRadius: '8px', // Rounded corners
          gap: '0.5rem', // Space between icon and text
        }}
      >
        <FaDownload size={20} />
        <span>Download Resume</span>
      </a>
    </div>
  );
};

export default SocialMediaLinks;
