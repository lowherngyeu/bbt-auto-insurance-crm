// Shared visual standard for renewal, contact and policy-view actions in every role/view.
function standardActionKind(label,handler='') {
  const text=String(label).replace(/\s+/g,' ').trim();
  if(text==='Request renewal')return 'request';
  if(/^(?:✓\s*)?(?:Mark contacted|Contacted)$/.test(text))return 'contact';
  if(/^View(?: active)? policy(?:\s*↗)?$/.test(text)||text==='View ↗'&&/detail\(/.test(handler))return 'view';
  if(text==='Pending renewal · View request'||text==='Pending renewal')return 'pending';
  return '';
}
const standardActionStyle=document.createElement('style');
standardActionStyle.id='crm-standard-action-buttons';
standardActionStyle.textContent=`
button.crm-action{box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;gap:6px;width:148px;min-height:40px;padding:9px 12px;margin:3px 6px 3px 0;border:1px solid #176f58;border-radius:7px;font-family:inherit;font-size:13px;font-weight:600;line-height:20px;text-align:center;white-space:nowrap;vertical-align:middle;transition:background .15s,border-color .15s;}
button.crm-action-request{background:#146f5b;color:#fff;}
button.crm-action-contact,button.crm-action-view{background:#fff;color:#146f5b;}
button.crm-action-request:hover:not(:disabled){background:#105b4a;border-color:#105b4a;}
button.crm-action-contact:hover:not(:disabled),button.crm-action-view:hover:not(:disabled){background:#eaf4ee;border-color:#105b4a;color:#105b4a;}
button.crm-action:focus-visible{outline:3px solid #8cc5ad;outline-offset:2px;}
button.crm-action:disabled{background:#f0f3f2;color:#87938e;border-color:#d6deda;cursor:not-allowed!important;opacity:1!important;}
button.crm-action-contact:disabled{background:#e8f2ec;color:#36795e;border-color:#bfd8c8;}
button.crm-action-pending{background:#fff4df;color:#946b22;border-color:#e6d0a3;}
button.crm-action-pending:hover{background:#ffedcb;}
`;
document.head.append(standardActionStyle);
function standardizeActionButtons(){document.querySelectorAll('button').forEach(button=>{const kind=standardActionKind(button.textContent,button.getAttribute('onclick')||'');if(!kind)return;button.classList.add('crm-action','crm-action-'+kind);if(kind==='pending'&&button.textContent.trim()==='Pending renewal · View request'){button.textContent='Pending renewal';button.title='View renewal request';button.setAttribute('aria-label','Pending renewal · View request')}})}
let standardActionQueued=false;
const standardActionObserver=new MutationObserver(()=>{if(standardActionQueued)return;standardActionQueued=true;queueMicrotask(()=>{standardActionQueued=false;standardizeActionButtons()})});
standardActionObserver.observe(document.body,{childList:true,subtree:true,characterData:true});
standardizeActionButtons();

