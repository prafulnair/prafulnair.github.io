# AGENTS.md

## Purpose

Define repository rules for automation agents. Humans are exempt.

## Scope

These rules apply to bots/agents (workflows, schedulers, chat‑ops, etc.). They **must not** alter PR state or metadata beyond CI status.

## PR instructions

* **Title format:** `[<project_name>] <Concise, imperative title>`
* **Description should include:** what changed, why, risk/impact, and how it was tested. Link issues when relevant.


## Branch naming

* Allowed patterns: `feat/<name>`, `fix/<name>`, `chore/<name>`, `docs/<name>`, `refactor/<name>`, `test/<name>`
* **Regex (allow‑list):** `^(feat|fix|chore|docs|refactor|test)\/[a-z0-9][a-z0-9\-]*$`
* Disallowed: any branch containing `codex`, `agent`, or `bot` (case‑insensitive), spaces, uppercase, or trailing dashes.

## Agent rules

* Do **not** comment on pull requests (no summaries, nudges, or status posts).
* Do **not** add, edit, or remove labels.
* Do **not** request reviewers or assignees.
* Do **not** merge, close, or re‑open PRs.
* Do **not** modify PR titles, descriptions, or templates.
* Do **not** include `codex`, `agent`, or `bot` in branch names, PR titles, commit messages, or tags.

## How agents report results

* Use **GitHub Checks** (check runs + annotations) or the workflow job summary.
* A single check name is recommended: `automation/validation`.
* For policy violations (e.g., invalid branch name or title format), set the check to **failure** with a brief reason and a link to this file. Do not post PR comments.

## Examples of violations

* Title missing project prefix: `Fix 404` → must be `[web] Fix 404`.
* Branch contains bot term: `feat/codex‑tooling` → not allowed.
* Agent adds a label or posts a comment → not allowed.
