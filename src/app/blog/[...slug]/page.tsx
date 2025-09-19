import React from "react";

const CatchAllRoute = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  console.log(await params);
  return (
    <div className="text-4xl">
      <h1>Catch All routes</h1>
    </div>
  );
};

export default CatchAllRoute;
