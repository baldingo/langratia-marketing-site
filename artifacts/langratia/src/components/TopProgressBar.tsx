import { useState, useEffect } from "react";
import { useLocation } from "wouter";

export default function TopProgressBar() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pathname] = useLocation();

  useEffect(() => {
    setLoading(true);
    setProgress(30);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 85) {
          clearInterval(interval);
          return 85;
        }
        return prev + 15;
      });
    }, 100);

    const timer = setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 300);
    }, 500);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [pathname]);

  if (!loading && progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[3px] pointer-events-none bg-transparent">
      <div
        className="h-full transition-all duration-200 ease-out"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #6855F0 0%, #29B5F6 50%, #8B74F8 100%)",
          boxShadow: "0 0 10px #6855F0, 0 0 5px #29B5F6",
        }}
      />
    </div>
  );
}
