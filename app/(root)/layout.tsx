import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import React, { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="root-container">
      <Header />
      <div className="mx-auto w-full">
        <div className="mt-5 pb-20">{children}</div>
      </div>
      <Footer />
    </main>
  );
};

export default layout;
