import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import Loading from "../components/Loading";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType | null>(null);

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const isSmallScreen = () => typeof window !== "undefined" && window.innerWidth <= 1024;

  const [isLoading, setIsLoading] = useState(() => !isSmallScreen());
  const [loading, setLoading] = useState(() => (isSmallScreen() ? 100 : 0));

  const value = {
    isLoading,
    setIsLoading,
    setLoading,
  };

  useEffect(() => {
    if (!isSmallScreen()) return;

    setLoading(100);
    import("../components/utils/initialFX").then((module) => {
      if (module.initialFX) {
        module.initialFX();
      }
    });
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <LoadingContext.Provider value={value as LoadingType}>
      {isLoading && <Loading percent={loading} />}
      <main className="main-body">{children}</main>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
