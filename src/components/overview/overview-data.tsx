function OverviewData() {
  const data = [
    {
      label: "Risk Score",
      icon: "z3bola",
      score: "84",
      description: "out of 100",
      descriptionColor: "text-green-300",
      ranges: {
        50: "green",
        80: "orange",
        100: "red",
      },
    },
    {
      label: "Active Sessions",
      icon: "z3bola",
      score: "1,247",
      description: "out of 100",
      descriptionColor: "text-green-300",
    },
    {
      label: "Risk Score",
      icon: "z3bola",
      score: "84",
      descriptionColor: "text-muted-foreground",
      description: "out of 100",
    },
    {
      label: "Risk Score",
      icon: "z3bola",
      score: "84",
      description: "out of 100",
      descriptionColor: "text-green-300",
    },
  ];
  return <div>OverViewData</div>;
}

export default OverviewData;
