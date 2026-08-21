import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import "./BackToTop.css";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className={`nexora-back-to-top ${visible ? "is-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp size={19} />
    </button>
  );
};

export default BackToTop;
