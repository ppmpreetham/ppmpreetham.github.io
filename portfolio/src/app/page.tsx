"use client";
import React from "react";
import WorkPage from "../components/WorkPage";
import Full3DView from "@/components/Full3DView";
import Router from "next/router";

export default function Home() {
  return (
    <div>
      <Full3DView />
    </div>
  );
}
