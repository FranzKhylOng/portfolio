"use client";
import { FadeIn } from "./FadeIn";
import Image from "next/image";

export function About() {
  return (

    <section id="about" className="max-w-[900px] w-full mx-auto py-[100px]">
      <FadeIn delay={200} className="w-full">
        <h2 className="flex items-center text-slate-lightest text-[32px] font-semibold whitespace-nowrap mb-10 w-full
          before:content-['01.'] before:relative before:bottom-1 before:text-primary before:font-mono before:text-xl before:mr-2 before:font-normal
          after:content-[''] after:block after:relative after:top-1 after:w-full after:h-[1px] after:ml-5 after:bg-navy-lightest">
          About Me
        </h2>
      </FadeIn>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-3/5 text-slate text-lg space-y-4">
          <p>
            Hello! I&apos;m Franz, a backend-focused software developer specializing in TypeScript, Node.js, and NestJS. I enjoy building reliable, scalable APIs and production-ready systems.
          </p>

          <p>
            I have experience working with system integrations, improving application security, and maintaining stable deployments. I value clean architecture, ownership, and writing maintainable code.
          </p>

          <p>
            I&apos;m continuously improving my skills and I&apos;m open to expanding into other technologies and platforms as I grow as an engineer.
          </p>

          <p>
            Here are a few technologies I&apos;ve been working with recently:
          </p>

          <ul className="grid grid-cols-2 gap-x-3 gap-y-2 font-mono text-sm text-slate-light mt-5">
            <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-primary leading-tight">TypeScript</li>
            <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-primary leading-tight">Node.js</li>
            <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-primary leading-tight">NestJS</li>
            <li className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-primary leading-tight">MongoDB</li>
          </ul>
        </div>

        <div className="md:w-2/5 flex justify-center">
          <div className="relative w-full max-w-[300px] aspect-square rounded group">
            <div className="absolute inset-0 border-2 border-primary rounded translate-x-5 translate-y-5 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4 -z-10"></div>

            <div className="relative w-full h-full rounded overflow-hidden transition-all duration-300">
              <Image
                src="/portrait.png"
                alt="Franz Ong"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
