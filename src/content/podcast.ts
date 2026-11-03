export type Episode = {
  id: string;
  title: string;
  summary: string;
  publishedAt: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const podcast = {
  name: "Curious Frequency",
  subject: "Surprising ideas in science, culture, and everyday technology.",
  purpose:
    "A show for people who like to follow a question a little further than the obvious answer.",
  featuredEpisodeId: "the-secret-life-of-sound",
};

export const episodes = [
  {
    id: "the-secret-life-of-sound",
    title: "The secret life of sound",
    summary:
      "From a room's hidden acoustics to the sounds we stop noticing, discover how listening changes what we see.",
    publishedAt: "2026-10-21",
  },
  {
    id: "why-we-love-a-good-map",
    title: "Why we love a good map",
    summary:
      "Maps are never just directions. They're tiny arguments about what matters and where we belong.",
    publishedAt: "2026-10-07",
  },
  {
    id: "the-myth-of-multitasking",
    title: "The myth of multitasking",
    summary:
      "What feels like doing everything at once is often a clever, costly game of mental switching.",
    publishedAt: "2026-09-23",
  },
  {
    id: "a-brief-history-of-the-button",
    title: "A brief history of the button",
    summary:
      "A tiny interface detail transformed machines, fashion, and the way people expect technology to respond.",
    publishedAt: "2026-09-09",
  },
  {
    id: "the-science-of-first-impressions",
    title: "The science of first impressions",
    summary:
      "How quickly do we decide what we think—and how often does a second look change the story?",
    publishedAt: "2026-08-26",
  },
  {
    id: "when-nothing-is-really-silent",
    title: "When nothing is really silent",
    summary:
      "Step into an anechoic room and meet the surprising sounds your own body has been making.",
    publishedAt: "2026-08-12",
  },
  {
    id: "the-unexpected-geometry-of-nature",
    title: "The unexpected geometry of nature",
    summary:
      "Patterns in leaves, coastlines, and clouds reveal the quiet mathematics behind the natural world.",
    publishedAt: "2026-07-29",
  },
  {
    id: "why-time-feels-different-on-vacation",
    title: "Why time feels different on vacation",
    summary:
      "New places create new memories, and that may be why a short trip can feel wonderfully long.",
    publishedAt: "2026-07-15",
  },
  {
    id: "the-pocket-sized-history-of-the-pocket",
    title: "The pocket-sized history of the pocket",
    summary:
      "A practical bit of clothing became a surprisingly revealing symbol of work, style, and independence.",
    publishedAt: "2026-07-01",
  },
  {
    id: "what-makes-a-smell-a-memory",
    title: "What makes a smell a memory?",
    summary:
      "Follow the unusually direct route between your nose, your memories, and the feelings attached to them.",
    publishedAt: "2026-06-17",
  },
  {
    id: "the-quiet-power-of-a-checklist",
    title: "The quiet power of a checklist",
    summary:
      "A simple list can make room for expertise by keeping the easy-to-forget details in view.",
    publishedAt: "2026-06-03",
  },
  {
    id: "how-colors-get-their-names",
    title: "How colors get their names",
    summary:
      "The words we use for color tell a story about language, perception, and what a culture notices.",
    publishedAt: "2026-05-20",
  },
  {
    id: "the-physics-of-a-perfect-cup-of-tea",
    title: "The physics of a perfect cup of tea",
    summary:
      "A small everyday ritual is full of heat transfer, chemistry, and personal theories about steeping.",
    publishedAt: "2026-05-06",
  },
  {
    id: "why-old-buildings-feel-different",
    title: "Why old buildings feel different",
    summary:
      "Materials, proportions, and the evidence of human hands all shape how a place makes us feel.",
    publishedAt: "2026-04-22",
  },
  {
    id: "the-curious-case-of-the-missing-socks",
    title: "The curious case of the missing socks",
    summary:
      "Laundry-room mysteries are less about portals and more about friction, static, and busy routines.",
    publishedAt: "2026-04-08",
  },
  {
    id: "a-world-without-standard-time",
    title: "A world without standard time",
    summary:
      "Before synchronized clocks, every town kept its own time. Then railways changed the whole map.",
    publishedAt: "2026-03-25",
  },
  {
    id: "why-we-talk-to-our-plants",
    title: "Why we talk to our plants",
    summary:
      "Whether or not the fern understands, caring for something green can change the rhythm of a day.",
    publishedAt: "2026-03-11",
  },
  {
    id: "the-art-of-the-perfect-pause",
    title: "The art of the perfect pause",
    summary:
      "A well-placed silence can make a conversation, a song, or a story say much more.",
    publishedAt: "2026-02-25",
  },
  {
    id: "what-your-handwriting-remembers",
    title: "What your handwriting remembers",
    summary:
      "Putting pen to paper recruits the body in a way that typing and tapping do not quite replace.",
    publishedAt: "2026-02-11",
  },
  {
    id: "the-everyday-wonder-of-bubbles",
    title: "The everyday wonder of bubbles",
    summary:
      "A soap bubble is a fleeting lesson in surface tension, shifting colors, and beautiful impermanence.",
    publishedAt: "2026-01-28",
  },
] satisfies Episode[];

function getFeaturedEpisode(): Episode {
  const episode = episodes.find(
    (item) => item.id === podcast.featuredEpisodeId,
  );
  if (!episode) {
    throw new Error(
      `Featured episode "${podcast.featuredEpisodeId}" is missing from the episode catalog.`,
    );
  }
  return episode;
}

export const featuredEpisode = getFeaturedEpisode();

export const faqItems = [
  {
    id: "what-is-the-show",
    question: "What is Curious Frequency about?",
    answer:
      "We follow surprising questions across science, culture, and everyday technology, with curiosity as our guide.",
  },
  {
    id: "how-often",
    question: "How often are new episodes added?",
    answer:
      "This sample catalog uses illustrative dates. New entries can be added when the embedded site content is updated.",
  },
  {
    id: "where-to-listen",
    question: "Where can I listen to an episode?",
    answer:
      "This demo shares episode descriptions and dates only; it does not include audio playback or listening links.",
  },
  {
    id: "episode-length",
    question: "How long is each episode?",
    answer:
      "Episode lengths are not specified in this sample catalog, so no duration is promised here.",
  },
  {
    id: "suggest-a-topic",
    question: "Can I suggest a topic?",
    answer:
      "There is no contact or submission channel configured in this demo, but the sample show is always open to a good question.",
  },
  {
    id: "who-is-it-for",
    question: "Who is the show for?",
    answer:
      "Anyone who enjoys following a small question into a bigger idea will feel at home here.",
  },
] satisfies FaqItem[];
