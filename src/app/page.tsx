import Markdown from "react-markdown";

import { personalData } from "@/constants";

import BlurFade from "@/components/ui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="welcome">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex flex-col flex-1 space-y-1.5">
              <BlurFade delay={0.04} inView>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, I&apos;m {personalData.name.split(" ")[0]} 👋
                </h1>
              </BlurFade>
              <BlurFade delay={0.04} inView>
                <p className="max-w-[600px] md:text-xl font-light">
                  {personalData.description}
                </p>
              </BlurFade>
            </div>

            <BlurFade delay={0.04} inView>
              <Avatar className="size-28 border">
                <AvatarImage
                  src={personalData.avatarUrl}
                  alt={personalData.name}
                />
                <AvatarFallback>{personalData.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about">
        <BlurFade delay={0.04 * 3} inView>
          <h2 className="text-xl font-bold">About me</h2>
        </BlurFade>
        <BlurFade delay={0.04 * 4} inView>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {personalData.summary}
          </Markdown>
        </BlurFade>
      </section>
    </main>
  );
}
