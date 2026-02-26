const PRINCIPLES_DATA = [
  { 
    name: "Boring is Good", 
    desc: "We prefer proven, stable technology over the \"new and shiny\" unless the value proposition is overwhelming. Stability is a feature." 
  },
  { 
    name: "Automate Yourself Out of a Job", 
    desc: "If you do it three times, script it. We ruthlessly eliminate toil to make room for high-value work." 
  },
  { 
    name: "MTTR > MTBF", 
    desc: "Systems will fail. What matters is how fast and gracefully we recover (Mean Time to Recovery vs Mean Time Between Failures)." 
  },
  { 
    name: "Cattle, Not Pets", 
    desc: "Servers and systems should be disposable and reproducible, not hand-raised and unique." 
  },
  { 
    name: "Documentation is Code", 
    desc: "If it isn't documented, it doesn't exist. Documentation should be versioned, close to the work, and treated as a first-class citizen." 
  },
  { 
    name: "Simplicity Wins", 
    desc: "Complexity is the enemy of security and reliability. Choose the simplest solution that works." 
  },
  { 
    name: "Psychological Safety", 
    desc: "We can admit mistakes, ask \"stupid\" questions, and challenge ideas without fear of retribution." 
  },
  { 
    name: "Blameless Post-Mortems", 
    desc: "When things break, we attack the process, not the person. \"Who\" caused it is irrelevant; \"How\" the system allowed it is everything." 
  },
  { 
    name: "Strong Opinions, Loosely Held", 
    desc: "We debate vigorously based on data and experience, but we commit fully once a decision is made. We are open to changing our minds when new data arrives." 
  },
  { 
    name: "Bus Factor > 1", 
    desc: "No single person should be the only one who knows how a critical system works. Knowledge sharing is mandatory." 
  },
  { 
    name: "Respect for Time", 
    desc: "We protect each other's focus time. Meetings require agendas and clear outcomes." 
  },
  { 
    name: "Customer Empathy", 
    desc: "We solve problems for people, not just for computers. We try to understand the user's pain before prescribing a technical pill." 
  },
  { 
    name: "Ship Small, Ship Often", 
    desc: "We release small, incremental changes to reduce risk and get faster feedback. Big bang releases are forbidden." 
  },
  { 
    name: "Data Over Gut Feel", 
    desc: "We measure what matters. Decisions should be backed by metrics, logs, and observability, not just intuition." 
  },
  { 
    name: "Default to Open", 
    desc: "We work transparently. Information is shared by default unless there is a specific reason to hide it." 
  },
  { 
    name: "You Build It, You Run It", 
    desc: "The team that writes the code or designs the system is responsible for its operation in production." 
  },
  { 
    name: "Security is Everyone's Job", 
    desc: "Security isn't a gate at the end; it's baked into the design and the daily workflow." 
  },
  { 
    name: "Constraint Drives Creativity", 
    desc: "We embrace our limitations (budget, time, legacy systems) and use them to drive innovative solutions." 
  },
  { 
    name: "No Magic", 
    desc: "We understand how our tools work. Abstractions are useful, but magic is dangerous when it breaks." 
  },
  { 
    name: "Sleep Matters", 
    desc: "No heroics. If the system requires you to wake up at 3 AM regularly, the system is broken, not the person." 
  }
];