import { useEffect, useState } from "react"
import "./assets/styles.css"
import { Storage } from "@plasmohq/storage"
import darkMode from "~content";
import getCurrentTab from "~functions/currentTab";

function IndexPopup() {

  const [toggle, setToggle] = useState(false);

  const executeContentScript = async () => {
    const tab = await getCurrentTab();
    chrome.scripting.executeScript({
      target: { tabId: tab.id, allFrames: true },
      files: ["content.tsx"],
    });
  };

  const handleToggle = () => {
    setToggle(true);
    console.log(toggle);
    executeContentScript();
  };

  return (
    <div>
      <button type="button" onClick={handleToggle}>
        Dark mode
      </button>
    </div>
  );
}

export default IndexPopup;
