(() => {
  const COPY = {
    en: {
      tagline:'YOUR NEXT STORY STARTS HERE', eyebrow:'A PERSONAL ANIME UNIVERSE', headline:'Find your next<br><em>favorite story.</em>', subhead:'A shelf of unforgettable worlds, heroes, and adventures — made yours.', exploreCollection:'Explore the collection', stories:'STORIES TO DISCOVER', curated:'CURATED WORLDS', collectionTitle:'The collection', browse:'Explore', addAnime:'Add anime', favorites:'My favorites', genre:'Genre', status:'Status', sort:'Sort', personalShelf:'YOUR PERSONAL SHELF', emptyTitle:'No stories found', emptyText:'Try another search or filter.', closingEyebrow:'YOUR NEXT ADVENTURE AWAITS', closingTitle:'Every great story<br>starts somewhere.', addToShelf:'Add to your shelf', footer:'A fan-made personal catalog. Anime titles and artwork belong to their respective owners.', allGenres:'All genres', allStatuses:'Any status', plan:'Plan to watch', watching:'Watching', completed:'Completed', sortName:'Name (A–Z)', sortYear:'Year (newest)', sortRating:'Rating (high to low)', titleField:'Anime title *', genreField:'Genres *', yearField:'Year', ratingField:'Rating (0–10)', storyField:'Short story', posterField:'Poster image', posterHelp:'Choose a poster from your device. It stays in this browser.', watchField:'Official watch link', cancel:'Cancel', saveAnime:'Save anime', yourCollection:'YOUR COLLECTION', addNew:'Add a new anime', formHint:'Keep a story close for later.', search:'Search by title or genre...', statusLabel:'Watch status', myRating:'My rating (0–10)', note:'My note', saveChanges:'Save changes', addFavorite:'☆ Add to favorites', removeFavorite:'★ Remove from favorites', watch:'▶ Open watch link', addWatch:'＋ Add watch link', noLink:'No watch link added yet.', titleRequired:'Add a title and at least one genre.', duplicate:'That title is already in your collection.', badImage:'Choose an image smaller than 2 MB.', added:'Anime added to your shelf.', saved:'Your changes are saved.', favoriteSaved:'Favorites updated.', linkPrompt:'Paste the official streaming page link:', invalidLink:'Enter a link beginning with http:// or https://.', noRating:'Leave the rating blank or enter a number from 0 to 10.', untitled:'Untitled anime', year:'Year', score:'Community rating', yourScore:'Your rating', details:'THE STORY', titles:'titles', searchEmpty:'Nothing here yet', posterFallback:'ANIMEVERSE', creditsTitle:'Artwork credits', sourcesLink:'View poster sources', creditsNotice:'Poster images are sourced from TMDB. This non-commercial fan catalog is not endorsed or certified by TMDB. All artwork belongs to its respective rights holders.', formError:'Please check the required fields.'
    },
    bn: {
      tagline:'তোমার পরের গল্প এখানেই শুরু', eyebrow:'তোমার নিজের অ্যানিমে জগৎ', headline:'খুঁজে নাও তোমার<br><em>পরের প্রিয় গল্প।</em>', subhead:'মনে রাখার মতো দুনিয়া, নায়ক আর অভিযানের নিজস্ব সংগ্রহ।', exploreCollection:'সংগ্রহ দেখো', stories:'টি গল্প দেখার অপেক্ষায়', curated:'বাছাই করা অ্যানিমে', collectionTitle:'অ্যানিমে সংগ্রহ', browse:'ঘুরে দেখুন', addAnime:'অ্যানিমে যোগ', favorites:'আমার পছন্দ', genre:'ধরন', status:'অবস্থা', sort:'সাজান', personalShelf:'তোমার ব্যক্তিগত সংগ্রহ', emptyTitle:'কোনো গল্প পাওয়া যায়নি', emptyText:'অন্য শব্দ বা ফিল্টার দিয়ে দেখো।', closingEyebrow:'পরের অভিযান অপেক্ষায়', closingTitle:'প্রতিটি দারুণ গল্পের<br>শুরু কোথাও না কোথাও।', addToShelf:'তালিকায় যোগ করুন', footer:'ভক্তের তৈরি ব্যক্তিগত সংগ্রহ। অ্যানিমের নাম ও ছবি তাদের নিজ নিজ মালিকের সম্পত্তি।', allGenres:'সব ধরন', allStatuses:'সব অবস্থা', plan:'পরে দেখব', watching:'দেখছি', completed:'দেখা শেষ', sortName:'নাম (ক–য)', sortYear:'সাল (নতুন আগে)', sortRating:'রেটিং (বেশি আগে)', titleField:'অ্যানিমের নাম *', genreField:'ধরন *', yearField:'সাল', ratingField:'রেটিং (০–১০)', storyField:'ছোট গল্প', posterField:'পোস্টারের ছবি', posterHelp:'ডিভাইস থেকে পোস্টার বাছুন। এটি এই ব্রাউজারেই থাকবে।', watchField:'অফিশিয়াল দেখার লিংক', cancel:'বাতিল', saveAnime:'অ্যানিমে সংরক্ষণ', yourCollection:'তোমার সংগ্রহ', addNew:'নতুন অ্যানিমে যোগ', formHint:'পরে দেখার জন্য গল্পটি রেখে দাও।', search:'নাম বা ধরন দিয়ে খুঁজুন...', statusLabel:'দেখার অবস্থা', myRating:'আমার রেটিং (০–১০)', note:'আমার নোট', saveChanges:'পরিবর্তন সংরক্ষণ', addFavorite:'☆ পছন্দের তালিকায় রাখুন', removeFavorite:'★ পছন্দের তালিকা থেকে সরান', watch:'▶ দেখার লিংক খুলো', addWatch:'＋ দেখার লিংক যোগ', noLink:'এখনও দেখার লিংক যোগ করা হয়নি।', titleRequired:'নাম ও অন্তত একটি ধরন লিখুন।', duplicate:'এই অ্যানিমে সংগ্রহে আগে থেকেই আছে।', badImage:'২ এমবির কম আকারের ছবি বাছুন।', added:'অ্যানিমে তালিকায় যোগ হয়েছে।', saved:'পরিবর্তন সংরক্ষিত হয়েছে।', favoriteSaved:'পছন্দের তালিকা হালনাগাদ হয়েছে।', linkPrompt:'অফিশিয়াল স্ট্রিমিং পেজের লিংক দিন:', invalidLink:'http:// অথবা https:// দিয়ে শুরু হওয়া লিংক দিন।', noRating:'রেটিং খালি রাখুন অথবা ০ থেকে ১০-এর মধ্যে দিন।', untitled:'নামহীন অ্যানিমে', year:'সাল', score:'সাধারণ রেটিং', yourScore:'তোমার রেটিং', details:'গল্প', titles:'টি অ্যানিমে', searchEmpty:'এখানে এখনও কিছু নেই', posterFallback:'অ্যানিমেভার্স', creditsTitle:'ছবির কৃতিত্ব', sourcesLink:'পোস্টারের উৎস দেখুন', creditsNotice:'পোস্টারগুলো TMDB থেকে সংগৃহীত। এই অবাণিজ্যিক ফ্যান-সাইট TMDB অনুমোদিত নয়। সব ছবির অধিকার নিজ নিজ স্বত্বাধিকারীর।', formError:'প্রয়োজনীয় ঘরগুলো ঠিক করে দেখুন।'
    }
  };
  const STORE = 'animeverse.web.v1';
  const $ = (selector, root=document) => root.querySelector(selector);
  const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const memoryStore = {};
  function storedGet(key){try{return localStorage.getItem(key)}catch{return memoryStore[key]??null}}
  function storedSet(key,value){memoryStore[key]=value;try{localStorage.setItem(key,value)}catch{}}
  const base = Array.isArray(window.ANIMEVERSE_DATA) ? window.ANIMEVERSE_DATA.map(item => ({...item, poster:item.poster})) : [];
  let lang = storedGet('animeverse.language') || 'en';
  let favoriteOnly = false;
  let toastTimer;
  let saved = readSaved();
  let anime = mergeAnime();

  function readSaved(){try{return JSON.parse(storedGet(STORE) || '{"custom":[],"progress":{},"favorites":[]}')}catch{return {custom:[],progress:{},favorites:[]}}}
  function persist(){storedSet(STORE,JSON.stringify(saved))}
  function mergeAnime(){return [...base,...(Array.isArray(saved.custom)?saved.custom:[])];}
  function t(key){return COPY[lang][key] || COPY.en[key] || key}
  function genreText(item){return lang==='bn' ? (item.genre_bn || item.genre || '') : (item.genre || '')}
  function statusText(status){return t(status==='watching'?'watching':status==='completed'?'completed':'plan')}
  function showToast(message){const node=$('#toast');node.textContent=message;node.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>node.classList.remove('show'),2300)}
  function escapeAttr(value){return esc(value).replace(/`/g,'&#96;')}

  function translate(){
    document.documentElement.lang=lang;
    $$('[data-i18n]').forEach(node=>{const key=node.dataset.i18n;if(COPY[lang][key])node.innerHTML=COPY[lang][key]});
    $('#languageBtn').textContent=lang==='en'?'বাংলা':'English';
    $('#searchInput').placeholder=t('search');
    storedSet('animeverse.language',lang);
    fillFilters();renderCards();
  }
  function fillFilters(){
    const genreSelect=$('#genreFilter'), statusSelect=$('#statusFilter'), sortSelect=$('#sortSelect');
    const oldGenre=genreSelect.value, oldStatus=statusSelect.value, oldSort=sortSelect.value;
    const genres=[...new Set(anime.flatMap(item=>String(genreText(item)).split(/\s*[•,;/]\s*/).map(x=>x.trim()).filter(Boolean)))].sort((a,b)=>a.localeCompare(b));
    genreSelect.innerHTML=`<option value="">${t('allGenres')}</option>`+genres.map(value=>`<option value="${escapeAttr(value)}">${esc(value)}</option>`).join('');
    statusSelect.innerHTML=`<option value="">${t('allStatuses')}</option><option value="plan">${t('plan')}</option><option value="watching">${t('watching')}</option><option value="completed">${t('completed')}</option>`;
    sortSelect.innerHTML=`<option value="name">${t('sortName')}</option><option value="year">${t('sortYear')}</option><option value="rating">${t('sortRating')}</option>`;
    if([...genreSelect.options].some(option=>option.value===oldGenre))genreSelect.value=oldGenre;
    if([...statusSelect.options].some(option=>option.value===oldStatus))statusSelect.value=oldStatus;
    if(oldSort)sortSelect.value=oldSort;
  }
  function getFiltered(){
    const query=$('#searchInput').value.trim().toLocaleLowerCase();
    const genre=$('#genreFilter').value, status=$('#statusFilter').value, sort=$('#sortSelect').value || 'name';
    const rows=anime.filter(item=>{
      const progress=saved.progress[item.title] || {};
      const haystack=[item.title,item.genre,item.genre_bn,item.description,item.description_bn].join(' ').toLocaleLowerCase();
      const genres=String(genreText(item)).split(/\s*[•,;/]\s*/).map(x=>x.trim());
      return (!query||haystack.includes(query))&&(!genre||genres.includes(genre))&&(!status||(progress.status||'plan')===status)&&(!favoriteOnly||saved.favorites.includes(item.title));
    });
    rows.sort((a,b)=>{
      if(sort==='year')return (parseInt(b.year,10)||0)-(parseInt(a.year,10)||0);
      if(sort==='rating'){
        const score=item=>{const value=Number(saved.progress[item.title]?.rating ?? item.rating ?? 0);return Number.isFinite(value)?value:0};
        return score(b)-score(a);
      }
      return a.title.localeCompare(b.title);
    });
    return rows;
  }
  function posterMarkup(item, cls=''){
    const src=item.posterData || item.poster;
    if(src)return `<img class="${cls}" src="${escapeAttr(src)}" alt="${esc(item.title)} poster" loading="lazy" data-poster-title="${escapeAttr(item.title)}">`;
    return `<div class="poster-fallback ${cls}"><span>✦</span><small>${esc(item.title)}</small></div>`;
  }
  function handlePosterErrors(root){
    $$('img[data-poster-title]',root).forEach(image=>image.addEventListener('error',()=>{
      const fallback=document.createElement('div');fallback.className='poster-fallback';
      const star=document.createElement('span');star.textContent='✦';
      const title=document.createElement('small');title.textContent=image.dataset.posterTitle||t('posterFallback');
      fallback.append(star,title);image.replaceWith(fallback);
    },{once:true}));
  }
  function renderCards(){
    if(!$('#animeGrid'))return;
    const rows=getFiltered();
    $('#heroCount').textContent=anime.length;
    $('#resultCount').textContent=`${rows.length} ${t('titles')}`;
    $('#favoritesToggle').classList.toggle('active',favoriteOnly);
    $('#favoritesToggle').innerHTML=`☆ <span>${t('favorites')}</span>`;
    $('#animeGrid').innerHTML=rows.map((item,index)=>{
      const data=saved.progress[item.title]||{}, status=data.status||'plan';
      const rating=data.rating ?? item.rating ?? '—';
      return `<article class="anime-card" data-title="${escapeAttr(item.title)}" style="animation-delay:${Math.min(index,12)*25}ms" tabindex="0" aria-label="${esc(item.title)}">
        <div class="poster-wrap">${posterMarkup(item)}<div class="card-topline"><span class="year-pill">${esc(item.year||'—')}</span><span class="state-pill">${esc(statusText(status))}</span></div><button class="favorite-star" type="button" aria-label="${saved.favorites.includes(item.title)?t('removeFavorite'):t('addFavorite')}">${saved.favorites.includes(item.title)?'★':'☆'}</button></div>
        <div class="card-meta"><div class="card-title-row"><h3 class="card-title">${esc(item.title)}</h3><span class="card-score">★ ${esc(rating)}</span></div><p class="card-genre">${esc(genreText(item))}</p><div class="card-foot"><span>${esc(statusText(status))}</span><strong>${data.rating!=null?`${esc(t('yourScore'))} ${esc(data.rating)}`:''}</strong></div></div>
      </article>`;
    }).join('');
    handlePosterErrors($('#animeGrid'));
    $('#emptyState').classList.toggle('hidden',rows.length>0);
    $$('.anime-card').forEach(card=>{
      card.addEventListener('click',event=>{if(!event.target.closest('.favorite-star'))openDetail(card.dataset.title)});
      card.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();openDetail(card.dataset.title)}});
      $('.favorite-star',card).addEventListener('click',event=>{event.stopPropagation();toggleFavorite(card.dataset.title)});
    });
  }
  function openDetail(name){
    const item=anime.find(entry=>entry.title===name);if(!item)return;
    const record=saved.progress[name]||{}, dialog=$('#detailDialog');
    const description=lang==='bn'?(item.description_bn||item.description||''):item.description||'—';
    const url=saved.watchLinks?.[name]||item.watch||'';
    $('#detailContent').innerHTML=`<div class="detail-layout"><div class="detail-poster">${posterMarkup(item)}</div><div class="detail-copy"><p class="genre-line">${esc(genreText(item))}</p><h2>${esc(item.title)}</h2><p class="detail-stats">${esc(item.year||'—')} &nbsp; · &nbsp; ★ ${esc(item.rating||'—')} ${esc(t('score'))}</p><p class="story"><b>${esc(t('details'))}</b><br>${esc(description)}</p><div class="detail-tools">
      <label>${esc(t('statusLabel'))}<select id="detailStatus"><option value="plan">${esc(t('plan'))}</option><option value="watching">${esc(t('watching'))}</option><option value="completed">${esc(t('completed'))}</option></select></label>
      <div class="detail-grid"><label>${esc(t('myRating'))}<input id="detailRating" type="number" min="0" max="10" step="0.1" value="${record.rating??''}" placeholder="0–10"></label><label>${esc(t('year'))}<input value="${esc(item.year||'—')}" disabled></label></div>
      <label>${esc(t('note'))}<textarea id="detailNote" rows="2" maxlength="500" placeholder="...">${esc(record.note||'')}</textarea></label>
      <div class="detail-actions"><button id="saveDetails" type="button">${esc(t('saveChanges'))}</button><button id="favoriteDetail" type="button" class="${saved.favorites.includes(name)?'is-favorite':''}">${esc(saved.favorites.includes(name)?t('removeFavorite'):t('addFavorite'))}</button>${url?`<a class="watch-link" href="${escapeAttr(url)}" target="_blank" rel="noopener noreferrer">${esc(t('watch'))}</a>`:''}<button id="editWatch" type="button">${esc(url?t('watchField'):t('addWatch'))}</button></div></div></div></div>`;
    handlePosterErrors($('#detailContent'));
    $('#detailStatus').value=record.status||'plan';
    $('#saveDetails').addEventListener('click',()=>saveDetail(name));
    $('#favoriteDetail').addEventListener('click',()=>toggleFavorite(name,true));
    $('#editWatch').addEventListener('click',()=>editWatch(name));
    dialog.showModal();
  }
  function saveDetail(name){
    const raw=$('#detailRating').value.trim();
    if(raw&&(!Number.isFinite(Number(raw))||Number(raw)<0||Number(raw)>10)){showToast(t('noRating'));return}
    const record=saved.progress[name]||{};record.status=$('#detailStatus').value;
    if(raw)record.rating=Number(raw);else delete record.rating;
    const note=$('#detailNote').value.trim();if(note)record.note=note;else delete record.note;
    saved.progress[name]=record;persist();$('#detailDialog').close();renderCards();showToast(t('saved'));
  }
  function toggleFavorite(name,stayOpen=false){
    const exists=saved.favorites.includes(name);
    saved.favorites=exists?saved.favorites.filter(value=>value!==name):[...saved.favorites,name];
    persist();renderCards();
    if(stayOpen)openDetail(name);else showToast(t('favoriteSaved'));
  }
  function editWatch(name){
    const current=saved.watchLinks?.[name]||'';
    const url=window.prompt(t('linkPrompt'),current);
    if(url===null)return;
    const value=url.trim();
    if(value&&!/^https?:\/\//i.test(value)){showToast(t('invalidLink'));return}
    saved.watchLinks=saved.watchLinks||{};
    if(value)saved.watchLinks[name]=value;else delete saved.watchLinks[name];
    persist();openDetail(name);showToast(t('saved'));
  }
  function openForm(){ $('#animeForm').reset();$('#formDialog').showModal() }
  async function addAnime(event){
    event.preventDefault();const form=event.currentTarget, values=new FormData(form);
    const title=String(values.get('title')||'').trim(), genre=String(values.get('genre')||'').trim();
    if(!title||!genre){showToast(t('titleRequired'));return}
    if(anime.some(item=>item.title.toLocaleLowerCase()===title.toLocaleLowerCase())){showToast(t('duplicate'));return}
    const file=values.get('poster');let posterData='';
    if(file&&file.size){if(file.size>2*1024*1024){showToast(t('badImage'));return}posterData=await readImage(file)}
    const watch=String(values.get('watch')||'').trim();if(watch&&!/^https?:\/\//i.test(watch)){showToast(t('invalidLink'));return}
    const rating=String(values.get('rating')||'').trim();if(rating&&(!Number.isFinite(Number(rating))||Number(rating)<0||Number(rating)>10)){showToast(t('noRating'));return}
    const item={title,genre,genre_bn:genre,year:String(values.get('year')||'').trim()||'—',rating:rating||'—',description:String(values.get('description')||'').trim(),description_bn:'',poster:'',posterData,watch};
    saved.custom=saved.custom||[];saved.custom.push(item);if(watch){saved.watchLinks=saved.watchLinks||{};saved.watchLinks[title]=watch}
    try{persist()}catch{saved.custom.pop();showToast(t('badImage'));return}
    anime=mergeAnime();$('#formDialog').close();form.reset();fillFilters();renderCards();showToast(t('added'));
  }
  function readImage(file){return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=reject;reader.readAsDataURL(file)})}

  $('#languageBtn').addEventListener('click',()=>{lang=lang==='en'?'bn':'en';translate()});
  $('#addBtn').addEventListener('click',openForm);$('#closingAddBtn').addEventListener('click',openForm);
  $('#favoritesToggle').addEventListener('click',()=>{favoriteOnly=!favoriteOnly;renderCards()});
  $('#searchInput').addEventListener('input',renderCards);$('#genreFilter').addEventListener('change',renderCards);$('#statusFilter').addEventListener('change',renderCards);$('#sortSelect').addEventListener('change',renderCards);
  $('#animeForm').addEventListener('submit',addAnime);
  $$('[data-close]').forEach(button=>button.addEventListener('click',()=>button.closest('dialog').close()));
  [$('dialog#detailDialog'),$('dialog#formDialog')].forEach(dialog=>dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()}));
  translate();
})();


