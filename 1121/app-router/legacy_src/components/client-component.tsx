"use client";
import React, { ReactNode } from "react";

const ClientComponent = ({ children }: { children: ReactNode }) => {
  console.log("Client Component");
  return <>{children}</>;
};

export default ClientComponent;
