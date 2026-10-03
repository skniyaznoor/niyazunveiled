export default function StoreLinks() {

  const btnStyle = { 
    display: 'flex', 
    alignItems: 'center', 
    gap: '12px', 
    background: '#ffffff', 
    color: 'var(--ink)',
    border: '1px solid rgba(0,0,0,0.1)', 
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)', 
    padding: '10px 24px',
    borderRadius: '999px',
    fontFamily: 'var(--font-body)',
    fontSize: '1rem',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    position: 'relative'
  };

  return (
    <div className="btn-row" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translate(-50%, 5px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        .store-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.08) !important;
        }
      `}</style>
      
      <a 
        href="https://notionpress.com/in/read/coffee-1410198188/paperback" 
        target="_blank"
        rel="noopener noreferrer"
        className="btn store-btn" 
        style={btnStyle}
      >
        <img src="/coffee/logo/Notion_Press_Logo.png" alt="NotionPress" style={{ height: '24px', width: 'auto', objectFit: 'contain' }} />
        NotionPress (Paperback)
      </a>
      
      <a 
        href="https://notionpress.com/in/read/coffee-1410198188" 
        target="_blank"
        rel="noopener noreferrer"
        className="btn store-btn" 
        style={btnStyle}
      >
        <img src="/coffee/logo/Notion_Press_Logo.png" alt="NotionPress" style={{ height: '24px', width: 'auto', objectFit: 'contain' }} />
        NotionPress (Hardcover)
      </a>

      <a 
        href="https://www.amazon.in/dp/B0HLG2VXFW/ref=sr_1_1?crid=HR3CP1F8W9O0&dib=eyJ2IjoiMSJ9.2ob9PjLDP0v6xH3Tl4n-aBb_vvj_DFy1w_hVYBjn-QQ.sIOGRL0imZ6NI1r4z0FZ9feTuxnyjVDyKD2Y8zonyqE&dib_tag=se&keywords=coffee+sk+niyaz+noor&nsdOptOutParam=true&qid=1790702613&sprefix=coffee+sk+niyaz+no%2Caps%2C340&sr=8-1" 
        target="_blank"
        rel="noopener noreferrer"
        className="btn store-btn" 
        style={btnStyle}
      >
        <img src="/coffee/logo/Amazon_icon.png" alt="Amazon" style={{ height: '24px', width: 'auto', objectFit: 'contain' }} />
        Amazon (Paperback)
      </a>

      <a 
        href="https://www.amazon.in/dp/B0HLG2SFPR/ref=sr_1_2?crid=HR3CP1F8W9O0&dib=eyJ2IjoiMSJ9.2ob9PjLDP0v6xH3Tl4n-aBb_vvj_DFy1w_hVYBjn-QQ.sIOGRL0imZ6NI1r4z0FZ9feTuxnyjVDyKD2Y8zonyqE&dib_tag=se&keywords=coffee+sk+niyaz+noor&nsdOptOutParam=true&qid=1790702613&sprefix=coffee+sk+niyaz+no%2Caps%2C340&sr=8-2" 
        target="_blank"
        rel="noopener noreferrer"
        className="btn store-btn" 
        style={btnStyle}
      >
        <img src="/coffee/logo/Amazon_icon.png" alt="Amazon" style={{ height: '24px', width: 'auto', objectFit: 'contain' }} />
        Amazon (Hardcover)
      </a>

      <a 
        href="https://www.flipkart.com/coffee/p/itm193f5c5525efb?pid=9798907228979&lid=LSTBOK9798907228979KB1KO6&marketplace=FLIPKART&q=sk+niyaz+noor+novel&store=bks&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=cfad009b-9704-4485-810f-b4ae588ba57c.9798907228979.SEARCH&ppt=sp&ppn=sp&ssid=tpcdvuy9k00000001791002325925&qH=b335393142c419cd&ov_redirect=true&ov_redirect=true" 
        target="_blank"
        rel="noopener noreferrer"
        className="btn store-btn" 
        style={btnStyle}
      >
        <img src="/coffee/logo/Flipkart-Emblem.png" alt="Flipkart" style={{ height: '24px', width: 'auto', objectFit: 'contain' }} />
        Flipkart (Paperback)
      </a>

      <a 
        href="https://www.flipkart.com/coffee/p/itm193f5c5525efb?pid=9798907228993&lid=LSTBOK9798907228993Y9DAG0&marketplace=FLIPKART&q=sk+niyaz+noor+novel&store=bks&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=cfad009b-9704-4485-810f-b4ae588ba57c.9798907228993.SEARCH&ppt=sp&ppn=sp&ssid=tpcdvuy9k00000001791002325925&qH=b335393142c419cd&ov_redirect=true&ov_redirect=true" 
        target="_blank"
        rel="noopener noreferrer"
        className="btn store-btn" 
        style={btnStyle}
      >
        <img src="/coffee/logo/Flipkart-Emblem.png" alt="Flipkart" style={{ height: '24px', width: 'auto', objectFit: 'contain' }} />
        Flipkart (Hardcover)
      </a>
    </div>
  );
}
