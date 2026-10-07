import { STORES } from '@/lib/site';

const EDITIONS = [
  { id: 'paperback', label: 'Paperback' },
  { id: 'hardcover', label: 'Hardcover' },
];

export default function StoreLinks() {
  return (
    <div className="store-grid">
      <style>{css}</style>
      {STORES.map(store => (
        <div key={store.id} className="store-card">
          <div className="store-name">
            <img src={store.logo} alt="" />
            {store.name}
          </div>
          <div className="store-editions">
            {EDITIONS.map(edition => (
              <a
                key={edition.id}
                href={store.links[edition.id]}
                target="_blank"
                rel="noopener noreferrer"
                className="store-edition"
                aria-label={`Buy the ${edition.label} on ${store.name}`}
              >
                {edition.label}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const css = `
.store-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.store-card {
  background: #fff; border: 1px solid rgba(0,0,0,0.08); border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05); padding: 16px;
  display: flex; flex-direction: column; gap: 12px;
}
.store-name { display: flex; align-items: center; gap: 10px; font-family: var(--font-heading), serif; font-weight: 600; font-size: 1.05rem; color: var(--ink); }
.store-name img { height: 24px; width: 24px; object-fit: contain; }
.store-editions { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.store-edition {
  font-family: var(--font-body), serif; font-size: 0.85rem; text-align: center; text-decoration: none;
  color: var(--berry); border: 1px solid var(--line); border-radius: 999px; padding: 7px 6px;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}
.store-edition:hover { background: var(--berry); border-color: var(--berry); color: var(--paper-2); }

@media (max-width: 960px) {
  .store-grid { grid-template-columns: 1fr; gap: 10px; }
  .store-card { flex-direction: row; align-items: center; justify-content: space-between; padding: 12px 14px; }
  .store-editions { flex: 0 0 auto; grid-template-columns: auto auto; }
  .store-edition { padding: 7px 14px; }
}
`;
