import React from "react";

interface CircleIconsProps {
  icon: any,
  dBg: string
}


export const CircleIcons: React.FC< CircleIconsProps > = ({ icon, dBg }) => {
  return (
    <div
      style={{
        width: 65,
        height: 65,
        borderRadius: 50,
        background: dBg,
        alignItems: "center",
      }}
    >
      {icon}
    </div>
  );
};
