function LastUpdate() {
  const time = "2 hours";
  return (
    <div className="text-muted-foreground flex flex-col items-center text-sm">
      <span>Last Update</span>
      <span>{time} ago</span>
    </div>
  );
}

export default LastUpdate;
