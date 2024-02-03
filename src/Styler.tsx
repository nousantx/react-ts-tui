import { useEffect } from "react";
import tenoxui, { defineProps, makeStyles, moreColor } from "tenoxui";

const Styler: React.FC = () => {
  // using `useEffect` to achive realtime styling
  useEffect(() => {
    defineProps({
      // Custom type and property that can be used
      dis: ["display"],
      // You can use both camelCase or kebab-case
      "fx-par": ["alignItems", "justify-content"],
    });

    makeStyles({
      // make style for body here
      body: "bg-[neutral-100] tc-[neutral-900]",
      // define utility class you will use
      ".w-full, .w-mx": "w-100%",
      ".h-full, .h-mx": "h-100%",
      ".flex": "dis-flex",
      ".fx-ctr, .flex-center": "dis-flex flex-parent-center",
      ".fd-col": "fd-column",
      // Re-usable position property
      ".fixed": "post-fixed",
      ".absolute": "post-absolute",
      ".relative": "post-relative",
    });

    // add more color functionality hex, rgb, and rgba color
    moreColor();
    // initiate TenoxUI
    tenoxui();
  }, []);

  return null;
};

// Export styler
export default Styler;
