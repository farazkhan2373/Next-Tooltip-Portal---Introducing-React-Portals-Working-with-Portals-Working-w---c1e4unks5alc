import { useState } from 'react';
import DynamicTooltip from '../components/DynamicTooltip';

export default function Home() {
  const [showTooltip, setShowTooltip] = useState("");

  return (
    <div>
     <span 
      onMouseEnter={() => setShowTooltip("t")}
        onMouseLeave={() => setShowTooltip("")}
>
        Hover over this text to see the dynamic tooltip.</span>
      {showTooltip && <DynamicTooltip />}
    </div>
  );
}
