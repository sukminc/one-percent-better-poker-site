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

export function InstantReviewDemo() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [review, setReview] = useState<ReviewResponse | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

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

      {review && (
        <div className="mt-5 space-y-4">
          <div className="mini-panel rounded-[1.5rem] p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
              First read
            </p>
            <p className="mt-2 text-xl font-semibold text-white">
              {review.heroName ? `${review.heroName}, here is your first pattern read.` : "Here is your first pattern read."}
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--color-secondary)]">
              {review.tournamentName} · {review.handsReviewed} hands reviewed
            </p>
            <p className="mt-4 text-sm leading-6 text-[var(--color-secondary)]">{review.fieldNote}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {review.habits.map((habit, index) => (
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
              {review.adjustment.title}
            </p>
            <p className="mt-3 text-lg font-semibold text-white">{review.adjustment.body}</p>
          </div>
        </div>
      )}
    </div>
  );
}
