---
target: src/HomePage.jsx
total_score: 17
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
timestamp: 2026-09-13T19-24-30Z
slug: src-homepage-jsx
---
Method: dual-agent (A: /root/design_review · B: /root/evidence_review)

Target: src/HomePage.jsx
Reference: https://www.rayhanm.com/

Design specificity

Keep the space direction. The best version of this portfolio is a personal observatory for engineering work: dark cinematic atmosphere, a restrained planet/sky system, and project evidence that feels carefully authored. The current version already has the raw material, but it reads "vibecoded" because every layer is expressive at once: rotating roles, purple-pink gradients, glowing cards, HUD microcopy, shimmer, twinkle, scroll reveal, carousel dots, and low-contrast telemetry all compete with the work.

The reference's opening, as observed earlier, succeeds through restraint: nearly black canvas, warm bottom light, thin tracked type, and one central particle object. Your portfolio should not copy it directly; it should borrow that discipline. Let the space mood set the room, then make Akhil, the projects, and the engineering decisions unmistakable.

Heuristic scores

| # | Heuristic | Score | Evidence |
|---|---|---:|---|
| 1 | Visibility of system status | 3 | Active nav, progress, form submitting/success states, carousel controls. |
| 2 | Match with real world | 3 | Familiar portfolio structure, but telemetry labels and "Transmit" add interpretation effort. |
| 3 | User control | 2 | Project modal has Escape/arrows; scroll reveal, motion, and nested card controls reduce control. |
| 4 | Consistency and standards | 2 | Cohesive mood; project cards route broadly to /projects, "Download Resume" opens a viewer. |
| 5 | Error prevention | 2 | Form has validation behavior, but requirements and failed-submit recovery need hardening. |
| 6 | Recognition over recall | 2 | Rotating role asks visitors to wait; project detail is hidden behind equal cards. |
| 7 | Flexibility and efficiency | n/a | Portfolio persuasion flow; advanced shortcuts are not central. |
| 8 | Aesthetic and minimalist design | 1 | Strong hero, but too many decorative systems and large unrevealed dark gaps. |
| 9 | Error recovery | 2 | Success state exists; live failure and accessibility behavior not verified. |
| 10 | Help and documentation | n/a | No complex workflow requires documentation. |
| | Total | 17/32 | Good foundation, high polish upside. |

Strengths

- The hero has a memorable composition on desktop: Akhil's name, the large planet, the dark field, and the mountain silhouette work together.
- The space concept is consistent enough to become a signature instead of a gimmick.
- The project inventory has real substance: Parkunity, Mise en Place, CARTA, Fitly, PGE forecasting, and Project UCode give the page stronger content than the current hierarchy reveals.
- The About story is warmer than the generic hero copy and can become a stronger personal anchor.

Priority issues

1. [P1] Make the core identity stable.
   The hero cycles through several labels, including Student, Full Stack Developer, AI Engineer, Web Designer, and NLP Researcher. That makes the visitor assemble your identity over time. Replace it with one stable positioning line and one concrete proof sentence. Keep one coordinate/HUD detail as flavor. Suggested command: $impeccable clarify.

2. [P1] Fix scroll-reveal readability and the empty-gap effect.
   Full-page desktop and mobile screenshots show major sections captured at near-zero opacity, producing long dark gaps before the footer. Even if this looks better during manual scrolling, content should not depend on animation to be legible. Make section content readable by default, reduce reveal distance/duration, and honor reduced motion. Suggested command: $impeccable harden.

3. [P1] Curate project proof instead of showing three equal cards.
   FeaturedProjects mechanically presents the first three projects with similar weight and sends them to the broad Projects page. One flagship project should get more space, a clearer problem/contribution/result arc, and direct exploration. Use substantiated outcomes only. Suggested command: $impeccable shape.

4. [P2] Reduce decorative systems in the content sections.
   The detector flagged repeated purple/violet gradients, gradient text, and grid-line background patterns. Source also shows glow, shimmer, HUD text, skill-chip hover, parallax, and animated backgrounds across many sections. Keep the hero immersive, then make project and experience sections quieter so the proof feels more serious. Suggested command: $impeccable distill.

5. [P2] Harden interaction and accessibility details.
   Risks include nested project-card controls, tiny carousel dots/arrows, a clickable scroll chevron implemented as a div, modal focus semantics, low-contrast microcopy, and a "Download Resume" label that opens a Drive viewer. Add a visible Contact path, clickable email, standard dialog semantics, larger labeled controls, and clearer resume wording. Suggested command: $impeccable audit.

Cognitive load

The page currently asks visitors to parse too many visual and semantic signals at once. The main load comes from the rotating role, equal project cards, many animated treatments, low-contrast secondary text, and non-obvious gallery controls. The linear section order is good; the fix is prioritization, not a total rebuild.

Emotional journey

The opening creates curiosity and ambition. The drop happens when the page moves from a strong world into generic portfolio patterns and large dark intervals. The intended peak should be a project moment, not the animation itself. The ending can work well if contact feels direct and human instead of only thematic.

Persona notes

- First-time recruiter: quickly sees atmosphere, but not the one sentence that explains what Akhil is best at.
- Technical peer: wants project decisions, constraints, and contribution, but sees polished summaries before proof.
- Mobile visitor: gets less of the distinctive planet scene and more empty darkness, so the vibe risks becoming absence.
- Keyboard or screen-reader visitor: likely friction around carousel controls, modal focus, and clickable non-button elements.

Minor observations

- ProjectList contains typos: "communuity" and "Tax Calulator".
- Some technology icons appear mismatched to labels, which can make the stack feel less trustworthy.
- Footer implementation credit is less valuable than a concise personal signoff.
- The About section's nonprofit origin story feels more personal and memorable than the hero's current rotating role.

Questions

- What should a visitor remember after ten seconds: AI tools, full-stack product craft, UT/NLP research, or founder/community energy?
- Which single project best proves that identity?
- Is the space theme personal to you, or mainly an aesthetic you like? Either answer is fine, but the copy should know which one it is.
