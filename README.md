# MikroTik PPPoE Radius Manager

This repository now includes a production-ready architecture blueprint and starter implementation for a DMA Softlab Radius Manager-like system:

- **Backend**: Laravel API (role-aware admin + PPPoE management + billing + logs)
- **Frontend**: React + Tailwind pages for dashboard and operations
- **Auth Source of Truth**: Local DB + FreeRADIUS SQL tables
- **Router Behavior**: MikroTik as PPPoE NAS only (no PPP secrets on router)

## Architecture

Web Panel → Local Database → FreeRADIUS → MikroTik PPPoE Server

## Implemented Core Building Blocks

- API route skeletons for auth, dashboard, clients, packages, NAS, renewals, payments.
- Migrations for business data plus FreeRADIUS SQL schema.
- Radius sync service that writes `radcheck` + `radusergroup` and can force reject disabled users.
- React dashboard and PPPoE clients page starters.
- Ubuntu installation and integration guide.

## Next Steps

1. Run full Laravel install in `backend` and wire controllers/resources/policies.
2. Add React router/forms/tables and authentication UI.
3. Add scheduled command for expiry automation and logging.
4. Add tests (feature + integration) for Radius sync and renew flow.

See `docs/SETUP_UBUNTU.md` for full setup flow.
