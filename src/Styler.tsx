import { useEffect } from "react";
import tenoxui, { defineProps, makeStyles, moreColor } from "tenoxui";

const Styler: React.FC = () => {
  useEffect(() => {
    defineProps({
      dis: ["display"],
      bdr: ["border"],
      bc: ["borderColor"],
      all: ["all"],
      "ob-fit": ["objectFit"],
      "bd-bottom": ["borderBottom"],
    });

    makeStyles({
      body: "bg-[neutral-100] tc-[neutral-900]",
      ".w-full,.w-mx": "w-100%",
      ".h-full,.h-mx": "h-100%",
      ".flex": "dis-flex",
      ".fx-ctr,.flex-center": "dis-flex flex-parent-center",
      ".fd-col": "fd-column",
      ".form-wrapper form input":
        "p-15px bdr-none bd-bottom-[input__border] w-250px",
    });

    moreColor();
    tenoxui();
  }, []);

  return null; 
};

export default Styler;
