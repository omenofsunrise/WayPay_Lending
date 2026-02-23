import React, { createContext, useContext, useRef } from 'react';

interface ScrollContextType {
  sections: {
    home: React.RefObject<HTMLDivElement | null>;
    features: React.RefObject<HTMLDivElement | null>;
    application: React.RefObject<HTMLDivElement | null>;
    tarif: React.RefObject<HTMLDivElement | null>;
    contacts: React.RefObject<HTMLDivElement | null>;
  };
  scrollToSection: (section: string) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};

export const ScrollProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const homeRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const applicationRef = useRef<HTMLDivElement>(null);
  const tarifRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    const sections = {
      home: homeRef,
      features: featuresRef,
      application: applicationRef,
      tarif: tarifRef,
      contacts: contactsRef
    };

    const sectionRef = sections[section as keyof typeof sections];
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const value: ScrollContextType = {
    sections: {
      home: homeRef,
      features: featuresRef,
      application: applicationRef,
      tarif: tarifRef,
      contacts: contactsRef
    },
    scrollToSection
  };

  return (
    <ScrollContext.Provider value={value}>
      {children}
    </ScrollContext.Provider>
  );
};