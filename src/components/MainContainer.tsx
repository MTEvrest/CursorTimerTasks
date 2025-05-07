import React from 'react';

interface MainContainerProps {
  children?: React.ReactNode;
}

const styles = {
  container: `
    // Layout & Sizing
    min-h-screen    // Makes the container at least as tall as the viewport
    w-full         // Makes the container take full width of its parent
    max-w-screen-2xl  // Sets maximum width (1536px) to prevent too wide layouts
    
    // Positioning
    mx-auto        // Centers the container horizontally (margin-left: auto; margin-right: auto)
    
    // Spacing (responsive)
    px-4 sm:px-6 md:px-8 lg:px-12  // Horizontal padding: 16px → 24px → 32px → 48px
    py-4 sm:py-6 md:py-8          // Vertical padding: 16px → 24px → 32px
    
    // Flexbox Layout
    flex           // Enables flexbox
    flex-col       // Makes flex items stack vertically
    items-center   // Centers items horizontally in the flex container
    
    // Gaps between children (responsive)
    gap-4 sm:gap-6 md:gap-8  // Gap between elements: 16px → 24px → 32px
  `.trim().replace(/\s+/g, ' ')
};

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <main className={styles.container}>
      {children}
    </main>
  );
};

export default MainContainer; 