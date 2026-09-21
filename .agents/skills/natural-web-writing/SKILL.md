---
name: natural-web-writing
description: Use when the user wants to generate human sounding writing for web
disable-model-invocation: true
---

# Natural Web Writing

## Purpose

Edit or generate web copy that reads like deliberate human-written prose rather than generic LLM output.

Optimize for:

- natural rhythm;
- concrete information;
- context-specific wording;
- economical explanations;
- varied but purposeful sentence construction;
- a recognizable editorial voice;
- web readability;
- factual accuracy.

Do not optimize for fooling AI detectors. Optimize the writing itself.

The objective is not to make prose artificially messy. Human writing is not defined by typos, bad grammar, slang, or randomness.

## Core Principle

Prefer specific editorial decisions over statistically safe language.

A strong passage should feel as though the writer decided:

- what matters;
- what can be omitted;
- what deserves emphasis;
- where to be concise;
- where detail is useful;
- when a paragraph has made its point.

Do not make every paragraph equally complete, balanced, polished, or comprehensive.

---

# Workflow

Use the following sequence whenever generating or revising web content.

## Gate 0 — Preserve Truth

HARD GATE.

Before stylistic editing, identify:

- factual claims;
- numbers;
- dates;
- quotations;
- names;
- product specifications;
- source attributions;
- links;
- technical terminology.

Do not change their meaning merely to improve style.

Never invent:

- personal experiences;
- interviews;
- quotations;
- customer stories;
- statistics;
- sources;
- examples presented as real events.

Do not introduce deliberate grammatical errors, fake uncertainty, misspellings, or fabricated anecdotes to make the text appear human.

If rewriting sourced material, preserve important qualifications and uncertainty.

PASS CONDITION:

The revised text says substantially the same thing unless the user explicitly requested substantive changes.

---

## Gate 1 — Determine the Actual Voice

Before writing, infer the appropriate register from the context.

Consider:

- audience;
- website type;
- subject;
- author or brand voice;
- reader knowledge;
- purpose of the page.

Possible registers include:

- editorial;
- technical;
- journalistic;
- conversational;
- professional;
- instructional;
- analytical;
- commercial.

Do not default to generic corporate professionalism.

If source material establishes a voice, preserve it unless the user asks for a different one.

PASS CONDITION:

The prose sounds appropriate for this particular page, not merely “professional.”

---

## Gate 2 — Remove Generic LLM Language

SOFT GATE.

Scan for phrases that sound unnecessarily abstract, inflated, ceremonial, or interchangeable with thousands of other pages.

Common examples include excessive use of:

- crucial;
- pivotal;
- significant;
- notable;
- robust;
- seamless;
- comprehensive;
- innovative;
- dynamic;
- multifaceted;
- intricate;
- transformative;
- vibrant;
- landscape;
- realm;
- journey;
- testament;
- underscore;
- delve;
- foster;
- empower;
- leverage.

These words are not forbidden.

Keep them when they are genuinely the clearest word.

Rewrite them when:

1. a simpler word carries the same meaning;
2. several appear close together;
3. they create abstraction without information;
4. they make an ordinary fact sound grandiose.

BAD:

"This innovative platform empowers businesses to navigate the rapidly evolving digital landscape."

BETTER:

"The platform lets businesses manage their online sales, inventory, and customer accounts from one dashboard."

Prefer information over prestige vocabulary.

---

## Gate 3 — Specificity

SOFT/HIGH-PRIORITY GATE.

Look for statements that could appear unchanged on an unrelated website.

Examples:

- "provides valuable insights";
- "offers numerous benefits";
- "helps businesses succeed";
- "creates meaningful experiences";
- "plays an important role";
- "addresses modern challenges";
- "improves efficiency";
- "enhances the user experience."

Ask:

"What exactly happened, improved, changed, or became easier?"

Replace abstractions with concrete mechanisms, observations, examples, quantities, or consequences when the available information supports them.

BAD:

"The update significantly improves performance."

BETTER:

"The update cuts the initial page load by removing two blocking JavaScript requests."

Do not invent specificity when the source does not provide it.

If evidence is limited, state the narrower claim.

---

## Gate 4 — Remove Redundant Explanation

SOFT GATE.

Check every sentence for information already conveyed by the previous one.

Common AI pattern:

Statement.

Restatement beginning with:

- "This means...";
- "In other words...";
- "This highlights...";
- "This demonstrates...";
- "This is important because...";
- "As a result...";

Keep these constructions only when the second sentence adds meaningful interpretation.

Delete sentences that merely explain an obvious implication.

BAD:

"The checkout now supports Apple Pay. This means customers can use Apple Pay when completing their purchases."

BETTER:

"The checkout now supports Apple Pay."

Trust the reader to connect straightforward ideas.

---

## Gate 5 — Sentence Rhythm

SOFT GATE.

Inspect several consecutive sentences rather than individual sentences.

Look for:

- nearly identical sentence length;
- repeated subject-verb openings;
- repeated transition words;
- strings of compound sentences;
- three-item lists appearing repeatedly;
- repeated "X, Y, and Z" structures;
- excessive parallel constructions;
- repeated "not only X, but also Y";
- repeated "whether X or Y";
- repeated rhetorical questions.

Vary syntax when variation improves the reading experience.

Do not mechanically alternate short and long sentences.

Natural rhythm follows meaning.

Important statements can be short.

Complex explanations can take longer sentences.

Occasional fragments are acceptable in informal web writing when they fit the voice.

Avoid deliberately manufacturing randomness.

---

## Gate 6 — Paragraph Shape

SOFT/HIGH-PRIORITY GATE.

Check whether paragraphs repeatedly use the same structure:

1. topic sentence;
2. explanation;
3. example;
4. implication;
5. conclusion.

Do not require every paragraph to provide a miniature essay.

A paragraph can:

- make one observation;
- supply evidence;
- answer one question;
- explain a mechanism;
- give an example;
- make a transition;
- contain a single important sentence.

Vary paragraph length according to content.

For web pages, prefer relatively compact paragraphs, but do not force every paragraph to contain the same number of sentences.

---

## Gate 7 — List Discipline

SOFT GATE.

LLMs often turn prose into lists too readily.

Use a list only when the information is naturally enumerable.

Do not automatically produce:

- exactly three benefits;
- exactly five recommendations;
- symmetrical pros and cons;
- a list after every introductory paragraph.

Avoid forcing ideas into three-part rhetorical structures merely because they sound complete.

If there are two important points, write two.

If there are seven, write seven.

If the information reads more naturally as prose, use prose.

---

## Gate 8 — Transition Discipline

SOFT GATE.

Reduce unnecessary connective language such as:

- moreover;
- furthermore;
- additionally;
- consequently;
- nevertheless;
- on the other hand;
- in today's world;
- in today's digital age;
- when it comes to;
- it is worth noting that;
- it is important to remember that.

Do not eliminate useful transitions.

Prefer semantic continuity over explicit signposting.

BAD:

"Furthermore, the tool also provides analytics."

BETTER:

"The tool also provides analytics."

Or simply connect the ideas without a transition.

---

## Gate 9 — Avoid Artificial Balance

SOFT GATE.

Do not automatically give every perspective equal space.

Weight sections according to:

- evidence;
- relevance;
- reader need;
- importance.

For analytical writing, include relevant counterarguments and limitations, but do not create artificial symmetry.

Avoid repetitive structures such as:

"On one hand..."

"On the other hand..."

"Ultimately, both perspectives..."

unless the subject genuinely requires this framing.

---

## Gate 10 — Introductions

SOFT/HIGH-PRIORITY GATE.

Web introductions should reach useful information quickly.

Avoid openings such as:

- "In today's fast-paced world...";
- "In an era where...";
- "Throughout history...";
- "It is no secret that...";
- "When it comes to...";
- "X has become increasingly important...";
- broad statements about modern society that merely delay the subject.

Prefer one of:

- the central fact;
- the reader's problem;
- a concrete observation;
- the key result;
- the important distinction;
- a direct definition.

Do not spend a paragraph announcing what the article is going to discuss unless navigation genuinely benefits from it.

---

## Gate 11 — Conclusions

SOFT/HIGH-PRIORITY GATE.

Do not automatically summarize the entire article.

Avoid generic final paragraphs involving:

- journeys;
- brighter futures;
- exciting possibilities;
- changing landscapes;
- powerful testaments;
- "only time will tell";
- "by embracing...";
- "as we move forward...";
- inspirational calls for collaboration.

End where the argument naturally ends.

Possible endings:

- the most important implication;
- an unresolved question;
- a concrete next step;
- a useful qualification;
- the final piece of evidence;
- a concise recommendation;
- no explicit conclusion at all.

Do not manufacture emotional closure.

---

## Gate 12 — Human Editorial Selectivity

HIGH-PRIORITY GATE.

Ask:

"Did the writer actually make choices?"

Look for evidence of editorial selection:

- some details are emphasized more than others;
- trivial information has been removed;
- examples are chosen because they clarify something;
- not every possible implication is explained;
- repetition has been cut;
- the strongest information appears early;
- the prose reflects the actual context.

An AI-like draft often tries to be complete.

A strong human editor tries to be useful.

Prefer useful.

---

# Web-Specific Checks

## Search Intent

Determine what the reader is probably trying to learn or accomplish.

Answer that intent early.

Do not bury the useful answer beneath an SEO introduction.

## Headings

Headings should identify actual information.

Prefer:

"How caching reduces server load"

over:

"Understanding the Importance of Caching"

Prefer:

"Pricing starts at $19 per user"

over:

"Flexible Pricing Options for Every Business"

Do not capitalize every word unless the site's style requires title case.

## SEO

Use target terms naturally where context requires them.

Do not:

- repeat keywords unnecessarily;
- rewrite sentences merely to insert keywords;
- use multiple near-synonyms for the same search term in one paragraph;
- produce generic SEO filler to increase word count.

Reader comprehension outranks keyword density.

## Scannability

Use:

- descriptive headings;
- short paragraphs where appropriate;
- lists for genuinely enumerable information;
- direct topic sentences where useful.

Do not confuse scannability with excessive formatting.

## Calls to Action

Avoid vague CTAs such as:

- "Unlock your potential";
- "Start your journey";
- "Transform your business today";
- "Discover the possibilities."

Prefer concrete actions:

- "View pricing";
- "Compare plans";
- "Download the report";
- "Create an account";
- "See the API documentation."

---

# Authenticity Rules

Never try to simulate humanity through deception.

Do not add:

- fake personal memories;
- fake opinions attributed to the writer;
- fabricated firsthand experience;
- invented quotes;
- artificial typos;
- random slang;
- arbitrary sentence fragments;
- deliberate factual imprecision.

If first-person language is present in the source, preserve it appropriately.

If no firsthand experience exists, do not fabricate one.

Human-sounding writing should result from stronger editorial judgment, not fake human behavior.

---

# Detection Pass

After drafting, perform a diagnostic pass.

Flag—not automatically delete—the following:

### Lexical repetition

A distinctive adjective, verb, transition, or rhetorical phrase appearing several times unnecessarily.

### Structural repetition

Three or more consecutive paragraphs using essentially the same internal pattern.

### Cadence repetition

Several consecutive sentences with similar length and grammar.

### Empty abstraction

Claims with positive or negative language but little concrete meaning.

### Redundant interpretation

A sentence explaining an implication the reader already understands.

### Over-signposting

Frequent transitions explaining relationships that are already obvious.

### Exhaustiveness

Sections covering minor possibilities merely for completeness.

### Artificial symmetry

Ideas organized into matching groups without substantive reason.

### Generic closure

A final paragraph that adds sentiment instead of information.

### Voice drift

Sections suddenly becoming more formal, enthusiastic, sales-oriented, or academic than the rest.

---

# Gate Severity

Use three levels.

## HARD

Must be corrected.

Examples:

- fabricated facts;
- changed quotations;
- invented sources;
- misleading claims;
- contradictions;
- fake personal experiences.

## STRONG

Usually correct unless context clearly justifies it.

Examples:

- generic introductions;
- repetitive paragraph templates;
- redundant explanations;
- vague claims;
- generic conclusions;
- excessive corporate language.

## SOFT

Correct only when the pattern is noticeable.

Examples:

- em dashes;
- certain vocabulary;
- sentence-length similarities;
- three-item lists;
- transition words;
- passive voice.

Never ban a stylistic feature merely because AI models sometimes use it.

Evaluate patterns, not isolated occurrences.

---

# Rewrite Method

When revising existing copy:

1. Preserve facts and intended meaning.
2. Identify the author's strongest concrete information.
3. Cut redundant framing.
4. Replace vague abstraction where evidence permits.
5. Remove unnecessary rhetorical transitions.
6. Break repeated syntactic patterns.
7. Adjust paragraph boundaries according to ideas rather than uniform length.
8. Simplify inflated vocabulary.
9. Preserve useful technical terminology.
10. Rewrite the introduction if it delays the answer.
11. Rewrite or remove a generic conclusion.
12. Read the passage as a whole for rhythm and voice.
13. Perform one final compression pass.

Do not rewrite merely for the sake of changing words.

If a sentence already works naturally, leave it alone.

---

# Final Quality Gate

Before returning the result, check:

- Could several sentences appear verbatim on an unrelated website?
- Does each paragraph earn its place?
- Are concrete details doing more work than adjectives?
- Is anything explained twice?
- Do consecutive sentences repeatedly share the same shape?
- Are transitions being used as scaffolding rather than because they are needed?
- Does the introduction begin near the actual subject?
- Does the conclusion add information rather than ceremony?
- Has factual precision survived the rewrite?
- Does the voice remain consistent?
- Is there any invented humanity?

If problems remain, revise once more.

Stop when further editing would merely make the text different rather than better.

---

# Output Behavior

Unless the user asks for commentary:

Return the revised copy directly.

If useful, briefly identify major substantive changes separately, but do not explain every stylistic edit.

When generating from scratch:

- establish the page's purpose first;
- write for the actual audience;
- prioritize specificity;
- avoid generic filler;
- apply the gates after drafting.

When editing:

Preserve the author's genuine quirks when they improve voice.

The goal is not uniform perfection.

The goal is writing that sounds intentionally written.
