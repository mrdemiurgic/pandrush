import { faHandMiddleFinger } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useState, useEffect } from 'react';

interface Dimension {
  height: number;
  width: number;
}

const initialDimension = {height: window.innerHeight, width: window.innerWidth};

const WindowHeightContext = React.createContext<Dimension | undefined>();

export const useWindowHeight = () => {
  const val = useContext(WindowHeightContext);

  if (val === undefined) {
    throw new Error(
      `useWindowHeight must be used within the WindowHeight Provider`,
    );
  }

  return val.height;
};

interface Props {
  children: React.ReactNode;
}

const WindowHeightProvider = ({ children }: Props) => {
  const [height, setHeight] = useState<number>(initialHeight);
  const [width, setWidth] = useState<number>(initalWidth);

  

  useEffect(() => {
    const handler = () => {
      const newHeight = 

    }

  }, [])

  return (
    <WindowHeightContext.Provider value={value}>
      {children}
    </WindowHeightContext.Provider>
  );
};

export default WindowHeightProvider;
