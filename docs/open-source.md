# Publishing a Guild UK product as open source

Open source products show how we work and help people for free. They must never expose the people who use them or the business behind them. Go through this list before a repository goes public, and again before each release.

## Never in a public repository

- **Secrets.** Keys, passwords, tokens, client secrets, webhook addresses with tokens in them, database connection strings. They live in the hosting platform's secret store and a password manager. The repository has a `.env.example` with names and made-up values only.
- **Real people's data.** No real names, emails, phone numbers, addresses, health or attendance records in seed files, tests, screenshots or issues. Use clearly made-up data.
- **Internal business systems.** No code, scripts, field names, pipeline stages or settings copied from the systems we use to run Guild UK itself. A product that connects to a CRM or email service connects to **the user's own account**, which they set up themselves.
- **How our own defences are tuned.** Do not copy our production rate limits, check order, block lists or alert rules. Use sensible public defaults and let each deployment set its own.
- **Private addresses.** No internal admin web addresses, personal email addresses, server names or account numbers.

## Every public repository has

- `README.md`: what it does, who it is for, how to run it, how to deploy it.
- `LICENSE`: MIT for code, unless there is a reason to choose otherwise.
- `SECURITY.md`: how to report a problem privately (security@ or hello@guilduk.com), and what we promise in return.
- `CONTRIBUTING.md`: how to suggest a change, and that contributions are under the same licence.
- `.env.example`: every setting the product needs, with made-up values.
- Tests that run on every pull request.
- Secret scanning and dependency alerts switched on in GitHub.
- The footer credit "A Guild UK project" and a product icon made with `scripts/make-icon.mjs`.

## Before the first public push

1. Search the whole history, not just the latest files, for secrets: `git log -p | grep -iE "key|secret|token|password"` and a scanner such as gitleaks.
2. If anything was ever committed, change that secret first, then rewrite or start a fresh history.
3. Read every file in `docs/`, `scripts/` and `tests/` once as a stranger would.
4. Check screenshots and example data are made up.
5. Make the repository public, then check the public page while signed out.
