import React, { lazy, Suspense } from "react";

import dynamic from 'next/dynamic'

const Ruleta = dynamic(() => import('../components/Ruleta'), {
  ssr: false
})

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Ruleta />
    </Suspense>
  );
}