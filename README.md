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
- Agents view only assigned customers, policies, details, and reminders; they may mark customers contacted and request renewal but cannot upload or save policies.
- Customer profiles contain name, unique IC, contact number, email, address, and an assigned account. Admin, Staff, and Agent accounts can own customers.
- Customer IC comparison ignores spaces, hyphens, and letter case. Seed ICs are deliberately fictional identifiers.
- A customer can have multiple vehicles and policies. Insurer and vehicle information belong to separate policy records, not personal profiles.
- Agents may mark only their own current policies contacted from Policies, policy details, and Renewals. Admin/Staff see who contacted the customer and when (Malaysia time). Contacting is idempotent, leaves insurance/request status unchanged, and does not send a message to the customer. A renewed insurance period starts with a fresh contact state, retaining the previous period’s contact history.
- Renewal quotation files are separate from renewed policies. Admin/Staff (and Superadmin) upload or replace quotations while requests are Pending. Agents can view and download quotations only for their own customers. The existing Upload renewed policy action remains available; quotation upload never completes the request or changes coverage dates. PDF/JPG/PNG up to 5 MB, signature validation, uploader metadata, a fictional sample PDF, and download are supported. File bytes are held in browser IndexedDB (bbt-demo-documents), not GitHub or server storage. PDF preview loads pinned PDF.js 4.10.38 from jsDelivr and renders local bytes into canvas; no document bytes are sent to that CDN. Internet access is needed for the PDF viewer library; download remains available if preview fails. Quotations are retained with historical requests and linked from their renewed policies. Clearing browser storage removes quotation files. Cross-device access requires backend document storage.
- Requested renewals opens a listing with All / Pending / Completed filters, request and policy IDs, customer/vehicle, requester/date, contact follow-up, and authorized processing actions. A new request opens this listing immediately; pending policy badges and notification buttons link to it. Search is scoped to the current role’s accessible customer requests. Empty lists explain how to request renewal and that browser-local data does not synchronize between devices.
- Agent, Admin, Staff (and Superadmin) can request renewal for an accessible current policy. Its workflow status becomes Pending, duplicate requests are blocked, and Admin/Staff see an in-app pending notification and request inbox. Opening an upload does not complete the request: only a successful renewed-policy save completes it and activates the linked new policy. The requester and completing account are retained. Same-origin browser tabs refresh policy notifications using storage events; there is no cross-device messaging, shared backend or push/email delivery.
- Renewed policy uploads replace the latest vehicle insurance period and retain linked historical policies. Current views show the new dates and insurer; reminder dates use the new expiry. Renewals must match the same customer and vehicle, and overlapping periods are rejected. Historical records remain viewable by authorized roles.
- Staff/Admin upload simulation, sample AI extraction, review, editing, and direct policy save without approval.
- Search, CSV export for operational roles, renewal follow-up tracking, and responsive navigation.
- Renewal reminders for Admin, Staff and Agent at 60, 30 and 7 days before expiry; separate 31–60, 8–30, 0–7 and overdue groups. Agents see only assigned customer reminders. Admin/Staff can filter their own customers or all agency customers. Malaysia calendar dates, date simulation, reminder badges and linked policy details are included. Reminders are calculated in the browser; no automatic messages or background notifications are sent.

## Data and implementation

`index.html` is self-contained and includes all application scripts and styles. `accounts.js`, `customers.js`, and `renewals.js`, and `policy-renewal.js`, and `renewal-requests.js`, and `contact-tracking.js`, and `requested-renewals.js`, and `renewal-quotations.js` are source reference copies of the corresponding inline modules. If editing these copies, synchronize the corresponding inline sections in `index.html` before release.

Changes made in the demo are stored only in the current browser's local storage under `bbt-demo-policies`, `bbt-demo-accounts`, and `bbt-demo-customers`. They are not uploaded to GitHub or synchronized between devices. Clear these keys in browser storage to reset the demo. Source contains fictional seed records only; screenshots and browser exports are excluded.

Role switching and filtering demonstrate intended behavior; they are not authentication or server-enforced authorization. Before using real data, implement server-side authentication and permissions, database uniqueness constraints, secure document storage, and privacy controls. Never enter actual customer ICs or other personal records into this prototype.
