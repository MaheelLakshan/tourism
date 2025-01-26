import Header from '@/components/Header';
import React, { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="root-container">
      <Header />
      <div className="mx-auto">
        <div className="mt-20 pb-20">{children}</div>
      </div>
    </main>
  );
};

export default layout;
