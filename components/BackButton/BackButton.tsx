import React from 'react';
import { useRouter } from 'next/router';

const BackButton: React.FC = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box ml2 mb2 pointer"
      type="button"
    >
      <svg className="w1" data-icon="chevronLeft" viewBox="0 0 32 32">
        <title>chevronLeft icon</title>
        <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z" />
      </svg>
      <span className="pl1">Click here to go back</span>
    </button>
  );
};

export default BackButton;
