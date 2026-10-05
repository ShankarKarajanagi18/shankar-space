// Everything you will want to change lives in this file.
// Items marked `sample: true` are placeholders. Replace them with real work,
// then set `showSampleTags` to false so the "Sample" labels disappear.

export const site = {
  name: "Shankar",
  role: "Writer and web developer",
  city: "Bengaluru",
  email: "shankark7397@gmail.com",
  whatsapp: "917397994276", // country code + number, no plus sign
  photo: "", // e.g. "/shankar.jpg" after you add the file to /public
  showSampleTags: true,
};

// Lines shown in the hero edit demo.
export const edits = [
  {
    before:
      "We are a passionate team delivering innovative solutions for all your needs.",
    after: "We fix leaking pipes in Indiranagar within two hours.",
    note: "Said what they actually do.",
  },
  {
    before: "Follow us for exciting updates and amazing offers!",
    after:
      "Saturday only: second dosa free. Show this post at the counter.",
    note: "Gave people a reason to act today.",
  },
  {
    before: "Our product is of the highest quality and designed with care.",
    after: "Stitched in Tiruppur. Washed 50 times in testing. Still the same size.",
    note: "Swapped a claim for proof.",
  },
];

export const services = [
  {
    id: "writing",
    name: "Content writing",
    for: "Founders and marketing teams who need blogs, landing pages and emails that sound like a person wrote them.",
    delivers: [
      "SEO blog posts and long-form articles",
      "Website and landing page copy",
      "Email sequences and newsletters",
      "Writing in English, Hindi and Kannada",
    ],
    from: "Get a quote.",
    turnaround: "Most pieces take 3 to 5 working days.",
  },
  {
    id: "social",
    name: "Social media",
    for: "Small brands that post often and see little come back.",
    delivers: [
      "A content calendar ready before the month starts",
      "Captions, carousels and Reel scripts",
      "Replies to comments and messages",
      "A one-page report every week",
    ],
    from: "Get a quote.",
    turnaround: "First calendar in 5 working days.",
  },
  {
    id: "marketing",
    name: "Digital marketing",
    for: "Businesses ready to pay for ads or search traffic and want to know what it returns.",
    delivers: [
      "Audience and channel plan",
      "Google and Meta ad setup with the copy written",
      "Landing page review",
      "Monthly numbers in plain language",
    ],
    from: "Get a quote.",
    turnaround: "First campaign live within 7 days.",
  },
  {
    id: "web",
    name: "Web development",
    for: "Small brands that need a clear, useful website without a long agency process.",
    delivers: [
      "Responsive business sites and landing pages",
      "Simple online stores",
      "Contact and booking forms",
      "Basic SEO and speed setup",
    ],
    from: "Quote after a short brief.",
    turnaround: "A landing page takes about a week.",
  },
];

export const work = [
  {
    id: "cafe-blog",
    type: "writing",
    title: "Why your café's Instagram isn't selling coffee",
    client: "Sample project",
    year: "2026",
    summary:
      "A blog post for a café group's website. It moved the owner's attention from pretty photos to posts that ask for a visit.",
    body: [
      "Most café feeds look the same: latte art, warm light, a caption that says Monday fuel. People like it. Nobody walks in because of it.",
      "The posts that fill tables answer one question: why should I come today? A new drink with a price. A table for four on Friday that's still open. The barista who invented the drink, saying what's in it.",
      "Pick one post a week that asks for a visit and gives a reason. Keep the pretty photo for the other six.",
    ],
    sample: true,
  },
  {
    id: "candle-page",
    type: "writing",
    title: "Product page rewrite for a candle brand",
    client: "Sample project",
    year: "2026",
    summary:
      "A full rewrite of the best-selling product page, starting with the one thing only this brand could say.",
    body: [
      "The old page opened with premium handcrafted candles. Every candle site says that. So the new one opens with when the candles are poured and how long they cure.",
      "Scent notes moved above the fold. Burn time got a plain number. The reviews started with the most specific one, not the most glowing.",
      "The page now reads like the founder talking across a counter.",
    ],
    sample: true,
  },
  {
    id: "welcome-emails",
    type: "writing",
    title: "Five-email welcome sequence",
    client: "Sample project",
    year: "2025",
    summary:
      "A short sequence that turns a new subscriber into a first order.",
    body: [
      "Email one lands within a minute of signup and has one job: confirm the discount code works.",
      "Email two tells the founder's story in six lines. Email three answers the question support gets most: how long does delivery take?",
      "Emails four and five handle the two reasons people don't buy: they're not sure it suits their skin, and they forgot.",
    ],
    sample: true,
  },
  {
    id: "gym-reels",
    type: "social",
    title: "Reel scripts for a neighbourhood gym",
    client: "Sample project",
    year: "2026",
    summary: "A month of short-video scripts and captions for a studio with no marketing team.",
    posts: [
      {
        kind: "Reel script",
        text: "Day 1 versus day 30. Same shirt, same gym. The only change is the plank timer. Show it, don't explain it.",
      },
      {
        kind: "Caption",
        text: "Nobody tells you the first week is just showing up. We saved you a spot at 6:30 tomorrow. Bring water, skip the pressure.",
      },
      {
        kind: "Carousel",
        text: "Slide 1: Three things our trainers wish you'd skip. Slide 2: Skipping warm-ups. Slide 3: Weighing yourself daily. Slide 4: Comparing your week 1 to someone's year 3.",
      },
    ],
    sample: true,
  },
  {
    id: "design-course",
    type: "marketing",
    title: "Search ads and landing page for an online design course",
    client: "Sample project",
    year: "2026",
    summary:
      "Google Search ads, a rewritten landing page and Meta retargeting, run for eight weeks.",
    body: [
      "The ads were sending people to a page that opened with the creator's bio. The new page opens with what a student can build by week four.",
      "The signup form went from seven fields to three. Ads were split by audience, so beginners and career-switchers saw different promises.",
    ],
    sample: true,
  },
  {
    id: "perfume-store",
    type: "web",
    title: "Perfume shop with a simple checkout flow",
    client: "Sample project",
    year: "2026",
    summary: "A full-stack perfume e-commerce concept with product browsing, a cart, and a focused checkout path.",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    features: ["Product catalogue", "Cart and checkout", "Order management"],
    liveUrl: "",
    repoUrl: "",
    sample: true,
  },
  {
    id: "finance-dashboard",
    type: "web",
    title: "Personal finance dashboard with AI guidance",
    client: "Sample project",
    year: "2026",
    summary: "An AI-assisted dashboard concept that helps people review spending, set goals, and understand their month.",
    stack: ["Next.js", "TypeScript", "OpenAI API"],
    features: ["Spending overview", "Goal tracking", "Plain-language prompts"],
    liveUrl: "",
    repoUrl: "",
    sample: true,
  },
  {
    id: "cafe-site",
    type: "web",
    title: "One-page website for a neighbourhood café",
    client: "Sample project",
    year: "2026",
    summary: "A one-page café site that puts the menu, opening hours, location, and booking action in easy reach.",
    stack: ["Next.js", "CSS"],
    features: ["Responsive layout", "Menu section", "Booking form"],
    liveUrl: "",
    repoUrl: "",
    sample: true,
  },
];

export const rewrite = {
  before:
    "Welcome to our world of premium handcrafted candles. We are passionate about quality and our commitment to excellence shines through in every product. Shop now to experience the difference.",
  after:
    "Every candle is poured by hand on Tuesdays and left to cure for ten days. That's why the scent holds when you light it, not just when you open the box. Start with the cedar and fig. It's the one people reorder.",
};

export const process = [
  { title: "Brief", text: "A 15-minute call, or the form below. You tell me the goal and the deadline." },
  { title: "Plan", text: "Scope and dates in writing before I start." },
  { title: "Draft", text: "The first version arrives on the day we agreed." },
  { title: "Revise", text: "Two rounds of changes are included in every project." },
  { title: "Deliver", text: "Final files, the numbers, and what I'd do next." },
];

export const faqs = [
  {
    q: "How many revisions do I get?",
    a: "Two rounds on every project. A third is fine if the brief changed. We'll agree on it before I start.",
  },
  {
    q: "How do payments work?",
    a: "Half upfront for one-off projects, the rest on delivery. Monthly work is billed at the start of each month. I accept UPI, bank transfer and international wire.",
  },
  {
    q: "Can you write in Hindi or Kannada?",
    a: "Yes. I write in English, Hindi and Kannada, and I can adapt one piece for all three instead of translating word for word.",
  },
  {
    q: "Do I need to give you login access?",
    a: "Only for social media and ad management. I ask for the minimum access, and you can remove it any time.",
  },
  {
    q: "How soon can you start?",
    a: "Usually within a week of the plan being agreed. Rush work depends on my schedule.",
  },
  {
    q: "Who owns the code?",
    a: "You do. I hand over the project files and any access or setup notes needed to keep working on the site.",
  },
  {
    q: "Do you handle hosting?",
    a: "Yes. I can help choose a host, connect the domain, and get the site deployed. The hosting account stays in your name.",
  },
  {
    q: "Can you update my existing site?",
    a: "Yes. Send the current link and what you want changed. I can work within the existing setup when it makes sense.",
  },
];
