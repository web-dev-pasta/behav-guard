import React from "react";

function Navigation() {
  const tabs = [
    { icon: "z3bola", label: "SOC Dashboard", href: "/" },
    {
      icon: "z3bola",
      label: "Investigation",
      href: "/investigation",
    },
    {
      icon: "z3bola",
      label: "Behavioural Analysis",
      href: "/analysis",
    },
    {
      icon: "z3bola",
      label: "Incidents",
      href: "/incidents",
    },
    {
      icon: "z3bola",
      label: "Performance",
      href: "/performance",
    },
    {
      icon: "z3bola",
      label: "Configuration",
      href: "/configuration",
    },
  ];
  return <div>Navigation</div>;
}

export default Navigation;
