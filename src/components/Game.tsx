"use client";

import { useRef } from "react";

import { GameProvider } from "@/context/GameContext";

import { GameCanvas } from "./GameCanvas";
import { GameCounter } from "./GameCounter";

export function Game() {
  const eventRef = useRef<HTMLDivElement | null>(null);

  return (
    <GameProvider eventRef={eventRef}>
      <GameCounter />
      <GameCanvas eventRef={eventRef} />
    </GameProvider>
  );
}