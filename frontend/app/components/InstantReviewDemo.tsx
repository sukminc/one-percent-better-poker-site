"use client";

import type { ChangeEvent, DragEvent } from "react";
import { useRef, useState } from "react";

type ReviewResponse = {
  heroName: string | null;
  tournamentName: string;
  fileName: string;
  handsReviewed: number;
  fieldNote: string;
  habits: Array<{
    title: string;
    body: string;
  }>;
  adjustment: {
    title: string;
    body: string;
  };
};

const SAMPLE_TOURNAMENTS = [
  "Daily Heater 25",
  "Midnight Sprint 15",
  "Bounty Builder 32",
  "Late Night Stack 20",
];

const SAMPLE_FIELD_NOTES = [
  "This field leaned limp-heavy and calling-heavy. Weird pressure showed up often, but the patterns stayed readable.",
  "This tournament had more non-standard sizing than usual. The table kept drifting away from theory and into habit.",
  "This field looked chaotic at first, but the same pressure patterns kept repeating once stacks got shorter.",
];

const SAMPLE_HABITS = [
  {
    title: "Preflop passivity",
    body: "You flatted too often before the flop instead of taking the lead in clear pressure spots.",
  },
  {
    title: "Thin value hesitation",
    body: "You checked back value against wide callers when the table was already showing loose behavior.",
  },
  {
    title: "River caution",
    body: "Once pots got bigger, your default leaned toward folding rather than making one last decision.",
  },
  {
    title: "Turn slowdown",
    body: "You lost aggression on later streets and let opponents drive the pace too often.",
  },
  {
    title: "Safe-line bias",
    body: "Against non-standard players, you kept choosing the standard line instead of the more profitable one.",
  },
  {
    title: "Missed isolate spots",
    body: "You passed on a few clean chances to isolate weaker players and keep the hand simpler.",
  },
];

const SAMPLE_ADJUSTMENTS = [
  "Next session, take one extra thin value spot against a player who keeps calling too wide.",
  "Next session, choose one preflop flatting spot and turn it into an aggressive lead instead.",
  "Next session, save one river fold and review whether it was real pressure or just discomfort.",
  "Next session, attack one obvious weak limp instead of letting the hand drift multi-way.",
];

function pickRandom<T>(items: T[], count = 1): T[] {
  const pool = [...items];
  const picked: T[] = [];

  while (pool.length > 0 && picked.length < count) {
    const index = Math.floor(Math.random() * pool.length);
    picked.push(pool.splice(index, 1)[0]);
  }

  return picked;
}

function createSampleReview(): ReviewResponse {
  const habits = pickRandom(SAMPLE_HABITS, 3);
  const handsReviewed = 120 + Math.floor(Math.random() * 180);

  return {
    heroName: "Sample player",
    tournamentName: pickRandom(SAMPLE_TOURNAMENTS)[0],
    fileName: "sample-hand-history.txt",
    handsReviewed,
    fieldNote: pickRandom(SAMPLE_FIELD_NOTES)[0],
    habits,
    adjustment: {
      title: "Next session adjustment",
      body: pickRandom(SAMPLE_ADJUSTMENTS)[0],
    },
  };
}

export function InstantReviewDemo() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [review, setReview] = useState<ReviewResponse | null>(null);
  const [sampleReview, setSampleReview] = useState<ReviewResponse>(() => createSampleReview());
  const [sampleVisible, setSampleVisible] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const displayReview = review ?? (sampleVisible ? sampleReview : null);

  async function uploadFile(file: File) {
    setIsLoading(true);
    setError(null);
    setReview(null);
    setFileName(file.name);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/review", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Upload failed.");
      }

      setSampleVisible(false);
      setReview(data);
    } catch (uploadError) {
      setError(uploadError instanceof Error ? uploadError.message : "Upload failed.");
    } finally {
      setIsLoading(false);
    }
  }

  function onFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      void uploadFile(file);
    }
  }

  function onDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files?.[0];
    if (file) {
      void uploadFile(file);
    }
  }

  return (
    <div className="review-panel rounded-[2rem] p-5 sm:p-6">
      <div className="flex items-center justify-between border-b border-[var(--color-line)] pb-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
            Free review
          </p>
          <p className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-white">
            Try one tournament now
          </p>
        </div>
        <div className="rounded-full bg-[rgba(255,154,61,0.14)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
          Mobile + web
        </div>
      </div>

      <div
        className={`upload-panel mt-5 rounded-[1.7rem] p-5 ${isDragging ? "upload-panel-active" : ""}`}
        onDragOver={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={onDrop}
      >
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
              Drag and drop
            </p>
            <p className="mt-2 text-lg font-semibold text-white">
              Upload one GGPoker `.txt` file
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--color-secondary)]">
              Free MVP demo. No login. One tournament in, three habits out, one adjustment back.
            </p>
          </div>

          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[#0e1831] transition-transform hover:-translate-y-0.5"
          >
            Choose file
          </button>
        </div>

        <input
          ref={inputRef}
          type="file"
          accept=".txt,text/plain"
          className="hidden"
          onChange={onFileChange}
        />

        <div className="mt-5 flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
          <span className="rounded-full border border-[var(--color-line)] px-3 py-2">Desktop drag/drop</span>
          <span className="rounded-full border border-[var(--color-line)] px-3 py-2">Mobile tap upload</span>
          <span className="rounded-full border border-[var(--color-line)] px-3 py-2">Instant message</span>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => {
              setReview(null);
              setSampleReview(createSampleReview());
              setSampleVisible(true);
            }}
            className="rounded-full border border-[var(--color-line)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:border-[var(--color-secondary-accent)] hover:bg-[rgba(28,120,255,0.12)]"
          >
            Try sample report
          </button>
        </div>

        {(fileName || isLoading) && (
          <div className="mt-5 rounded-[1.1rem] border border-[var(--color-line)] bg-[rgba(255,255,255,0.03)] px-4 py-4 text-sm text-[var(--color-secondary)]">
            {isLoading ? `Reviewing ${fileName ?? "your file"}...` : `Loaded ${fileName}`}
          </div>
        )}

        {error && (
          <div className="mt-4 rounded-[1.1rem] border border-[rgba(255,154,61,0.28)] bg-[rgba(255,154,61,0.08)] px-4 py-4 text-sm text-[#ffd7b2]">
            {error}
          </div>
        )}
      </div>

      {!displayReview && !isLoading && (
        <div className="mt-5 rounded-[1.5rem] border border-[var(--color-line)] bg-[rgba(255,255,255,0.03)] px-5 py-5 text-sm leading-6 text-[var(--color-secondary)]">
          Drop a `.txt` file and your first review will appear here.
        </div>
      )}

      {displayReview && (
        <div className="report-pop mt-5 space-y-4">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
              {review ? "Your review" : "Sample report"}
            </p>
            <button
              type="button"
              onClick={() => {
                setReview(null);
                setSampleReview(createSampleReview());
                setSampleVisible(true);
              }}
              className="rounded-full border border-[var(--color-line)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:border-[var(--color-secondary-accent)] hover:bg-[rgba(28,120,255,0.12)]"
            >
              Another sample
            </button>
          </div>

          <div className="mini-panel rounded-[1.5rem] p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
              {review ? "Your review" : "Sample report"}
            </p>
            <p className="mt-2 text-xl font-semibold text-white">
              {displayReview.heroName
                ? `${displayReview.heroName}, here is your first pattern read.`
                : "Here is your first pattern read."}
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--color-secondary)]">
              {displayReview.tournamentName} · {displayReview.handsReviewed} hands reviewed
            </p>
            <p className="mt-4 text-sm leading-6 text-[var(--color-secondary)]">{displayReview.fieldNote}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {displayReview.habits.map((habit, index) => (
              <div key={habit.title} className="mini-panel rounded-[1.4rem] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                  Habit 0{index + 1}
                </p>
                <p className="mt-3 text-lg font-semibold text-white">{habit.title}</p>
                <p className="mt-3 text-sm leading-6 text-[var(--color-secondary)]">{habit.body}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[1.5rem] border border-[rgba(28,120,255,0.24)] bg-[rgba(28,120,255,0.08)] p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-secondary-accent)]">
              {displayReview.adjustment.title}
            </p>
            <p className="mt-3 text-lg font-semibold text-white">{displayReview.adjustment.body}</p>
          </div>
        </div>
      )}
    </div>
  );
}
