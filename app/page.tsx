"use client";
import { Button } from '@heroui/react';

export default function Home() {
  return (
    <section className="flex h-screen items-center justify-center ">
      <h1>hello</h1>
      <Button className={'bg-green-400 rounded'} >
        Click
      </Button>
    </section>
  );
}
