'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type ProfileImageEditorProps = {
  initialSrc: string;
  size?: number;
  storageKey?: string;
  className?: string;
};

type StoredState = {
  src: string;
  zoom: number;
  offsetY: number;
};

const DEFAULT_ZOOM = 1.1;
const DEFAULT_OFFSET_Y = 0;
const FALLBACK_STORAGE_KEY = 'portfolio-profile-image';

export function ProfileImageEditor({
  initialSrc,
  size = 128,
  storageKey = FALLBACK_STORAGE_KEY,
  className,
}: ProfileImageEditorProps) {
  const [imageSrc, setImageSrc] = useState<string>(initialSrc);
  const [zoom, setZoom] = useState<number>(DEFAULT_ZOOM);
  const [offsetY, setOffsetY] = useState<number>(DEFAULT_OFFSET_Y);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (!raw) return;
      const parsed = JSON.parse(raw) as StoredState;
      if (parsed?.src) {
        setImageSrc(parsed.src);
        setZoom(parsed.zoom ?? DEFAULT_ZOOM);
        setOffsetY(parsed.offsetY ?? DEFAULT_OFFSET_Y);
      }
    } catch {
      // ignore corrupted state
    }
  }, [storageKey]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const state: StoredState = { src: imageSrc, zoom, offsetY };
      window.localStorage.setItem(storageKey, JSON.stringify(state));
    } catch {
      // ignore quota / serialization errors
    }
  }, [imageSrc, zoom, offsetY, storageKey]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setImageSrc(reader.result);
        // reset adjustments for new image
        setZoom(DEFAULT_ZOOM);
        setOffsetY(DEFAULT_OFFSET_Y);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={className}>
      <div
        className="relative overflow-hidden rounded-full bg-amber-300 ring-2 ring-black/10 dark:bg-amber-400 dark:ring-white/10"
        style={{ width: size, height: size }}
      >
        <Image
          src={imageSrc}
          alt="Profile picture"
          fill
          sizes={`${size}px`}
          className="object-cover"
          style={{
            transform: `scale(${zoom}) translateY(${offsetY}px)`,
            transformOrigin: 'center',
          }}
        />
      </div>

      <button
        type="button"
        onClick={() => setShowControls((open) => !open)}
        className="mt-2 text-xs font-medium text-zinc-500 underline underline-offset-4 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        {showControls ? 'Hide photo controls' : 'Edit photo'}
      </button>

      {showControls && (
        <div className="mt-3 space-y-3 rounded-md border border-zinc-200 bg-zinc-50 p-3 text-xs dark:border-zinc-800 dark:bg-zinc-900/60">
          <div className="space-y-1">
            <label className="font-medium text-zinc-600 dark:text-zinc-300">
              Upload from your computer
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="block w-full text-[11px] text-zinc-600 file:mr-3 file:rounded file:border-0 file:bg-zinc-200 file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-zinc-900 hover:file:bg-zinc-300 dark:text-zinc-300 dark:file:bg-zinc-700 dark:file:text-zinc-50 dark:hover:file:bg-zinc-600"
            />
          </div>

          <div className="space-y-1">
            <label className="flex justify-between font-medium text-zinc-600 dark:text-zinc-300">
              <span>Zoom</span>
              <span className="font-normal text-zinc-500 dark:text-zinc-400">
                {zoom.toFixed(2)}x
              </span>
            </label>
            <input
              type="range"
              min={1}
              max={2}
              step={0.02}
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="space-y-1">
            <label className="flex justify-between font-medium text-zinc-600 dark:text-zinc-300">
              <span>Vertical position</span>
              <span className="font-normal text-zinc-500 dark:text-zinc-400">
                {offsetY}px
              </span>
            </label>
            <input
              type="range"
              min={-60}
              max={60}
              step={1}
              value={offsetY}
              onChange={(e) => setOffsetY(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}

