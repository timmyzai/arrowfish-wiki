/**
 * Auth Gate — password: fffteam8888
 * SHA-256: 1bb0d3bb531232856062c8a204dc5c69bd884a02c60c9858ff91f7e2320fac40
 * Cache TTL: 8 hours (shared across all pages on same origin)
 */
(function () {
  var PASS_HASH = '1bb0d3bb531232856062c8a204dc5c69bd884a02c60c9858ff91f7e2320fac40';
  var CACHE_KEY = 'aw_auth';
  var CACHE_TTL = 8 * 60 * 60 * 1000;

  function isCacheValid() {
    try { var ts = parseInt(localStorage.getItem(CACHE_KEY), 10); return ts && (Date.now() - ts) < CACHE_TTL; } catch (e) { return false; }
  }
  function setCache() {
    try { localStorage.setItem(CACHE_KEY, Date.now().toString()); } catch (e) {}
  }

  if (isCacheValid()) return;

  var style = document.createElement('style');
  style.textContent = [
    'body.auth-locked>*:not(#ag){display:none!important}',
    '#ag{position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:#0F172A;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans SC",sans-serif}',
    '#ag.out{opacity:0;visibility:hidden;pointer-events:none;transition:opacity .4s,visibility .4s}',
    '.ag-wrap{width:100%;max-width:380px;margin:16px;padding:40px 32px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:16px;backdrop-filter:blur(20px);animation:agIn .4s ease both}',
    '@keyframes agIn{from{opacity:0;transform:translateY(12px)}}',
    '.ag-logo{text-align:center;margin-bottom:24px}',
    '.ag-logo-text{font-size:18px;font-weight:700;color:#fff;letter-spacing:-.3px}',
    '.ag-logo-sub{font-size:12px;color:#64748B;margin-top:4px}',
    '.ag-label{display:block;font-size:12px;font-weight:600;color:#94A3B8;letter-spacing:.06em;text-transform:uppercase;margin-bottom:8px}',
    '.ag-input{width:100%;height:46px;padding:0 14px;background:rgba(15,23,42,.6);border:1.5px solid rgba(255,255,255,.12);border-radius:10px;color:#E2E8F0;font-size:15px;outline:none;box-sizing:border-box;transition:border-color .2s,box-shadow .2s}',
    '.ag-input:focus{border-color:#2563EB;box-shadow:0 0 0 3px rgba(37,99,235,.25)}',
    '.ag-input.err{border-color:#EF4444;animation:shake .35s ease}',
    '@keyframes shake{10%,90%{transform:translateX(-2px)}20%,80%{transform:translateX(3px)}30%,50%,70%{transform:translateX(-4px)}40%,60%{transform:translateX(4px)}}',
    '.ag-err{font-size:12px;color:#EF4444;min-height:18px;margin:6px 0 10px}',
    '.ag-btn{width:100%;height:46px;background:#2563EB;border:none;border-radius:10px;color:#fff;font-size:15px;font-weight:600;cursor:pointer;transition:background .2s,transform .15s,box-shadow .2s}',
    '.ag-btn:hover{background:#1D4ED8;transform:translateY(-1px);box-shadow:0 8px 20px rgba(37,99,235,.35)}',
    '.ag-btn:active{transform:translateY(0)}',
    '.ag-foot{text-align:center;margin-top:20px;font-size:11px;color:#475569}',
    '@media(max-width:480px){.ag-wrap{padding:28px 20px}}'
  ].join('');
  document.head.appendChild(style);

  function lock() { document.body.classList.add('auth-locked'); }
  if (document.body) lock(); else document.addEventListener('DOMContentLoaded', lock);

  function build() {
    var g = document.createElement('div'); g.id = 'ag';
    g.innerHTML = '<div class="ag-wrap"><div class="ag-logo"><div class="ag-logo-text">Arrowfish Wiki</div><div class="ag-logo-sub">内部文档平台</div></div><form id="agf" autocomplete="off"><label class="ag-label" for="agp">访问密码</label><input type="password" id="agp" class="ag-input" placeholder="Enter access code" autocomplete="new-password"/><div class="ag-err" id="age"></div><button type="submit" class="ag-btn">解锁访问</button></form><div class="ag-foot">Arrowfish Team · Internal Only</div></div>';
    document.body.insertBefore(g, document.body.firstChild);
    var f=document.getElementById('agf'),inp=document.getElementById('agp'),err=document.getElementById('age');
    inp.focus();
    f.addEventListener('submit',function(e){
      e.preventDefault();
      var v=inp.value.trim(); if(!v)return;
      err.textContent=''; inp.classList.remove('err');
      crypto.subtle.digest('SHA-256',new TextEncoder().encode(v)).then(function(buf){
        var h=Array.from(new Uint8Array(buf)).map(function(b){return b.toString(16).padStart(2,'0')}).join('');
        if(h===PASS_HASH){setCache();g.classList.add('out');document.body.classList.remove('auth-locked');setTimeout(function(){g.remove()},500);}
        else{inp.classList.add('err');err.textContent='密码错误，请重试';inp.select();setTimeout(function(){inp.classList.remove('err')},500);}
      });
    });
  }
  if (document.body) build(); else document.addEventListener('DOMContentLoaded', build);
})();
