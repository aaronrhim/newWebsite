"use client";

import React from "react";
import { ProjectDeep } from "../lib/project-details";

export default function ProjectDeep({ deep }: { deep: ProjectDeep | undefined }) {
  if (!deep) return null;
  return (
    <div className="space-y-6 mb-8 text-sm text-muted-foreground">
      {deep.longDescription && <p className="leading-relaxed">{deep.longDescription}</p>}

      {deep.features && (
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2">Highlights</h4>
          <ul className="list-disc pl-5 text-sm space-y-1">
            {deep.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      )}

      {deep.gallery && (
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2">Gallery</h4>
          <div className="flex gap-2 flex-wrap">
            {deep.gallery.map((g, i) => (
              <img key={i} src={g} alt={`${deep.id}-gallery-${i}`} className="w-20 h-14 object-cover rounded-md" />
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-3">
        {deep.external && (
          <a href={deep.external} target="_blank" rel="noreferrer" className="text-primary underline">
            View website
          </a>
        )}
        {deep.repo && (
          <a href={deep.repo} target="_blank" rel="noreferrer" className="text-primary underline">
            View repo
          </a>
        )}
      </div>
    </div>
  );
}
