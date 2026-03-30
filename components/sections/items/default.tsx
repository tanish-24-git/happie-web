import {
  BlocksIcon,
  EclipseIcon,
  FastForwardIcon,
  LanguagesIcon,
  RocketIcon,
  ScanFaceIcon,
} from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription,ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "Core Features",
  items = [
    {
      title: "Hardware Detection",
      description: "Automatic CPU, RAM, and GPU detection for optimal performance.",
      icon: <ScanFaceIcon className="size-5 stroke-1" />,
    },
    {
      title: "Dynamic Execution",
      description: "Supports NVIDIA CUDA, AMD, Intel GPUs, and CPU-only gracefully.",
      icon: <FastForwardIcon className="size-5 stroke-1" />,
    },
    {
      title: "Model Management",
      description:
        "Pull models from HuggingFace, local GGUF, or use cloud API models.",
      icon: <BlocksIcon className="size-5 stroke-1" />,
    },
    {
      title: "Chat Modes",
      description: "Single-model chat for minimal resources or full Comparison Mode.",
      icon: <LanguagesIcon className="size-5 stroke-1" />,
    },
    {
      title: "Multimodal (Soon)",
      description: "Image generation, Text-to-Speech (TTS), and Speech-to-Text (STT) coming soon.",
      icon: <EclipseIcon className="size-5 stroke-1" />,
    },
    {
      title: "Docker Ready",
      description: "Easily run with a single setup script and docker-compose.",
      icon: <RocketIcon className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {items.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
