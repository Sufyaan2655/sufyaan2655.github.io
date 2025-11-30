"use client";

import LabelSection from "@/components/sections/label-section";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useTheme } from "next-themes";
import GitHubCalendar from "react-github-calendar";

type Props = {};

const GithubActivity = (props: Props) => {
  const { theme } = useTheme();
  const githubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME="Sufyaan2655";
  
  if (!githubUsername) {
    return null;
  }

  return (
    <LabelSection
      label="Github Activity"
      wrapperClassname="p-4"
      className="min-h-full"
    >
      <ScrollArea className="text-muted-foreground">
        <GitHubCalendar
          username={githubUsername}
          colorScheme={theme === "light" ? "light" : "dark"}
          hideColorLegend
          blockSize={6.6}
        />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </LabelSection>
  );
};

export default GithubActivity;
