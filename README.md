# BBT Auto Insurance CRM V1.0

Responsive browser-only prototype with fictional data. No production database, real authentication, real uploads, or AI service is connected.

## Run locally

Install Node.js, then run from this directory:

```sh
node server.cjs
```

Open http://127.0.0.1:3000. The standalone `index.html` also works on a static web host. A local address works only on the computer running the server; storing code on GitHub does not itself publish the demo online.

## Included

- Dashboard, Customers, Vehicles, Policies, Renewals, Agents, Staff, Commissions, and Admin Accounts.
- One Superadmin (`SUPER-001`), responsible for Admin accounts; no additional Superadmin creation flow.
- Admin creates, edits, and deletes Staff accounts. Staff adds Agent accounts only.
- Unique User IDs across all roles, checked without regard to case and reserved for future login.
- Agents have read-only access to their assigned customers, policies, and details.
- Customer profiles contain name, unique IC, contact number, email, address, and an assigned account. Admin, Staff, and Agent accounts can own customers.
- Customer IC comparison ignores spaces, hyphens, and letter case. Seed ICs are deliberately fictional identifiers.
- A customer can have multiple vehicles and policies. Insurer and vehicle information belong to separate policy records, not personal profiles.
- Staff/Admin upload simulation, sample AI extraction, review, editing, and direct policy save without approval.
- Search, CSV export for operational roles, renewal follow-up tracking, and responsive navigation.

## Data and implementation

`index.html` is self-contained and includes all application scripts and styles. `accounts.js` and `customers.js` are source reference copies of the corresponding inline modules. If editing these copies, synchronize the corresponding inline sections in `index.html` before release.

Changes made in the demo are stored only in the current browser's local storage under `bbt-demo-policies`, `bbt-demo-accounts`, and `bbt-demo-customers`. They are not uploaded to GitHub or synchronized between devices. Clear these keys in browser storage to reset the demo. Source contains fictional seed records only; screenshots and browser exports are excluded.

Role switching and filtering demonstrate intended behavior; they are not authentication or server-enforced authorization. Before using real data, implement server-side authentication and permissions, database uniqueness constraints, secure document storage, and privacy controls. Never enter actual customer ICs or other personal records into this prototype.
