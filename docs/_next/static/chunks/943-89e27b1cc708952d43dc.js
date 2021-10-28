(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[943],{21994:function(e,r,t){const a=t(69599),n=t(17946);e.exports.Cypher=class{constructor(e){this.dictionary=a,this.wordLength=e||12,this.mnemonics=[]}setWordLength(e){"number"==typeof e&&(this.wordLength=e)}genMnemonics(){for(this.mnemonics=[];this.mnemonics.length<this.wordLength;){const e=Math.floor(Math.random(0,this.dictionary.length)*this.dictionary.length);this.mnemonics.push({index:e,word:this.dictionary[e],salt:e*this.dictionary[e].length})}return{secret:this.genSecret(),mnemonics:this.mnemonics.map((e=>e.word)).join(" ")}}genSecret(e){let r=e||this.mnemonics;if("string"==typeof r&&(r=r.split(" ")),r instanceof Array){return r.map((e=>`${e.salt}:${e.word.length}`)).join("-")}return null}secretFromPhrase(e){if("string"!==typeof e||0==e.trim().length||!/^[a-z]+/.test(e))return null;const r=e.split(" ").map((e=>{const r=this.dictionary.findIndex((r=>r==e));return{index:r,word:this.dictionary[r],salt:r*this.dictionary[r].length}}));return this.genSecret(r)}phraseFromSecret(e){if("string"!==typeof e||0==e.trim().length||!/^\d/.test(e))return null;return e.split("-").map((e=>{let r="";const t=e.split(":");if(2==t.length){const e=Number(t[0])/Number(t[1]);r=this.dictionary[e]}return r})).join(" ")}encrypt(e,r){try{"object"==typeof e&&(e=JSON.stringify(e)),r||(r=this.genMnemonics().mnemonics);const t=this.secretFromPhrase(r),a=new n(t);return a.encrypt(e)}catch(t){return console.log(t),null}}decrypt(e,r){let t=null;try{if(r||(r=this.mnemonics.join(" ")),0==r.trim().length)return null;const o=this.secretFromPhrase(r),i=new n(o);try{t=JSON.parse(i.decrypt(e))}catch(a){t=i.decrypt(e)}return t}catch(a){return console.log(a),t}}}},17946:function(e,r,t){var a=t(48764).Buffer;const n=t(55835),o="aes-256-gcm";e.exports=function(e){if(!e||"string"!==typeof e)throw new Error("Cryptr: secret must be a non-0-length string");function r(r){return n.pbkdf2Sync(e,r,1e5,32,"sha512")}this.encrypt=function(e){if(null==e)throw new Error("value must not be null or undefined");const t=n.randomBytes(16),i=n.randomBytes(64),s=r(i),l=n.createCipheriv(o,s,t),c=a.concat([l.update(String(e),"utf8"),l.final()]),u=l.getAuthTag();return a.concat([i,t,u,c]).toString("hex")},this.decrypt=function(e){if(null==e)throw new Error("value must not be null or undefined");const t=a.from(String(e),"hex"),i=t.slice(0,64),s=t.slice(64,80),l=t.slice(80,96),c=t.slice(96),u=r(i),d=n.createDecipheriv(o,u,s);return d.setAuthTag(l),d.update(c)+d.final("utf8")}}},69599:function(e,r,t){"use strict";e.exports=t(70143)},23499:function(e,r,t){"use strict";function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}function n(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,n,o=[],i=!0,s=!1;try{for(t=t.call(e);!(i=(a=t.next()).done)&&(o.push(a.value),!r||o.length!==r);i=!0);}catch(l){s=!0,n=l}finally{try{i||null==t.return||t.return()}finally{if(s)throw n}}return o}}(e,r)||function(e,r){if(e){if("string"===typeof e)return a(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(r,{$:function(){return g}});var o=t(4942),i=t(67294),s=t(68718);function l(){if(console&&console.warn){for(var e,r=arguments.length,t=new Array(r),a=0;a<r;a++)t[a]=arguments[a];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var c={};function u(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];"string"===typeof r[0]&&c[r[0]]||("string"===typeof r[0]&&(c[r[0]]=new Date),l.apply(void 0,r))}function d(e,r,t){e.loadNamespaces(r,(function(){if(e.isInitialized)t();else{e.on("initialized",(function r(){setTimeout((function(){e.off("initialized",r)}),0),t()}))}}))}function p(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!r.languages||!r.languages.length)return u("i18n.languages were undefined or empty",r.languages),!0;var a=r.languages[0],n=!!r.options&&r.options.fallbackLng,o=r.languages[r.languages.length-1];if("cimode"===a.toLowerCase())return!0;var i=function(e,t){var a=r.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===a||2===a};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!i(r.isLanguageChangingTo,e))&&(!!r.hasResourceBundle(a,e)||(!r.services.backendConnector.backend||!(!i(a,e)||n&&!i(o,e))))}function m(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?m(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function g(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=r.i18n,a=(0,i.useContext)(s.OO)||{},o=a.i18n,l=a.defaultNS,c=t||o||(0,s.nI)();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new s.zv),!c){u("You will need to pass in an i18next instance by using initReactI18next");var m=function(e){return Array.isArray(e)?e[e.length-1]:e},g=[m,{},!1];return g.t=m,g.i18n={},g.ready=!1,g}c.options.react&&void 0!==c.options.react.wait&&u("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var f=h(h(h({},(0,s.JP)()),c.options.react),r),y=f.useSuspense,b=f.keyPrefix,w=e||l||c.options&&c.options.defaultNS;w="string"===typeof w?[w]:w||["translation"],c.reportNamespaces.addUsedNamespaces&&c.reportNamespaces.addUsedNamespaces(w);var v=(c.isInitialized||c.initializedStoreOnce)&&w.every((function(e){return p(e,c,f)}));function k(){return c.getFixedT(null,"fallback"===f.nsMode?w:w[0],b)}var x=(0,i.useState)(k),j=n(x,2),z=j[0],O=j[1],S=(0,i.useRef)(!0);(0,i.useEffect)((function(){var e=f.bindI18n,r=f.bindI18nStore;function t(){S.current&&O(k)}return S.current=!0,v||y||d(c,w,(function(){S.current&&O(k)})),e&&c&&c.on(e,t),r&&c&&c.store.on(r,t),function(){S.current=!1,e&&c&&e.split(" ").forEach((function(e){return c.off(e,t)})),r&&c&&r.split(" ").forEach((function(e){return c.store.off(e,t)}))}}),[c,w.join()]);var q=(0,i.useRef)(!0);(0,i.useEffect)((function(){S.current&&!q.current&&O(k),q.current=!1}),[c]);var N=[z,c,v];if(N.t=z,N.i18n=c,N.ready=v,v)return N;if(!v&&!y)return N;throw new Promise((function(e){d(c,w,(function(){e()}))}))}},49545:function(e,r,t){"use strict";var a=t(9695);r.Z=a.instance},70143:function(e){"use strict";e.exports=JSON.parse('["abandon","ability","able","about","above","absent","absorb","abstract","absurd","abuse","access","accident","account","accuse","achieve","acid","acoustic","acquire","across","act","action","actor","actress","actual","adapt","add","addict","address","adjust","admit","adult","advance","advice","aerobic","affair","afford","afraid","again","age","agent","agree","ahead","aim","air","airport","aisle","alarm","album","alcohol","alert","alien","all","alley","allow","almost","alone","alpha","already","also","alter","always","amateur","amazing","among","amount","amused","analyst","anchor","ancient","anger","angle","angry","animal","ankle","announce","annual","another","answer","antenna","antique","anxiety","any","apart","apology","appear","apple","approve","april","arch","arctic","area","arena","argue","arm","armed","armor","army","around","arrange","arrest","arrive","arrow","art","artefact","artist","artwork","ask","aspect","assault","asset","assist","assume","asthma","athlete","atom","attack","attend","attitude","attract","auction","audit","august","aunt","author","auto","autumn","average","avocado","avoid","awake","aware","away","awesome","awful","awkward","axis","baby","bachelor","bacon","badge","bag","balance","balcony","ball","bamboo","banana","banner","bar","barely","bargain","barrel","base","basic","basket","battle","beach","bean","beauty","because","become","beef","before","begin","behave","behind","believe","below","belt","bench","benefit","best","betray","better","between","beyond","bicycle","bid","bike","bind","biology","bird","birth","bitter","black","blade","blame","blanket","blast","bleak","bless","blind","blood","blossom","blouse","blue","blur","blush","board","boat","body","boil","bomb","bone","bonus","book","boost","border","boring","borrow","boss","bottom","bounce","box","boy","bracket","brain","brand","brass","brave","bread","breeze","brick","bridge","brief","bright","bring","brisk","broccoli","broken","bronze","broom","brother","brown","brush","bubble","buddy","budget","buffalo","build","bulb","bulk","bullet","bundle","bunker","burden","burger","burst","bus","business","busy","butter","buyer","buzz","cabbage","cabin","cable","cactus","cage","cake","call","calm","camera","camp","can","canal","cancel","candy","cannon","canoe","canvas","canyon","capable","capital","captain","car","carbon","card","cargo","carpet","carry","cart","case","cash","casino","castle","casual","cat","catalog","catch","category","cattle","caught","cause","caution","cave","ceiling","celery","cement","census","century","cereal","certain","chair","chalk","champion","change","chaos","chapter","charge","chase","chat","cheap","check","cheese","chef","cherry","chest","chicken","chief","child","chimney","choice","choose","chronic","chuckle","chunk","churn","cigar","cinnamon","circle","citizen","city","civil","claim","clap","clarify","claw","clay","clean","clerk","clever","click","client","cliff","climb","clinic","clip","clock","clog","close","cloth","cloud","clown","club","clump","cluster","clutch","coach","coast","coconut","code","coffee","coil","coin","collect","color","column","combine","come","comfort","comic","common","company","concert","conduct","confirm","congress","connect","consider","control","convince","cook","cool","copper","copy","coral","core","corn","correct","cost","cotton","couch","country","couple","course","cousin","cover","coyote","crack","cradle","craft","cram","crane","crash","crater","crawl","crazy","cream","credit","creek","crew","cricket","crime","crisp","critic","crop","cross","crouch","crowd","crucial","cruel","cruise","crumble","crunch","crush","cry","crystal","cube","culture","cup","cupboard","curious","current","curtain","curve","cushion","custom","cute","cycle","dad","damage","damp","dance","danger","daring","dash","daughter","dawn","day","deal","debate","debris","decade","december","decide","decline","decorate","decrease","deer","defense","define","defy","degree","delay","deliver","demand","demise","denial","dentist","deny","depart","depend","deposit","depth","deputy","derive","describe","desert","design","desk","despair","destroy","detail","detect","develop","device","devote","diagram","dial","diamond","diary","dice","diesel","diet","differ","digital","dignity","dilemma","dinner","dinosaur","direct","dirt","disagree","discover","disease","dish","dismiss","disorder","display","distance","divert","divide","divorce","dizzy","doctor","document","dog","doll","dolphin","domain","donate","donkey","donor","door","dose","double","dove","draft","dragon","drama","drastic","draw","dream","dress","drift","drill","drink","drip","drive","drop","drum","dry","duck","dumb","dune","during","dust","dutch","duty","dwarf","dynamic","eager","eagle","early","earn","earth","easily","east","easy","echo","ecology","economy","edge","edit","educate","effort","egg","eight","either","elbow","elder","electric","elegant","element","elephant","elevator","elite","else","embark","embody","embrace","emerge","emotion","employ","empower","empty","enable","enact","end","endless","endorse","enemy","energy","enforce","engage","engine","enhance","enjoy","enlist","enough","enrich","enroll","ensure","enter","entire","entry","envelope","episode","equal","equip","era","erase","erode","erosion","error","erupt","escape","essay","essence","estate","eternal","ethics","evidence","evil","evoke","evolve","exact","example","excess","exchange","excite","exclude","excuse","execute","exercise","exhaust","exhibit","exile","exist","exit","exotic","expand","expect","expire","explain","expose","express","extend","extra","eye","eyebrow","fabric","face","faculty","fade","faint","faith","fall","false","fame","family","famous","fan","fancy","fantasy","farm","fashion","fat","fatal","father","fatigue","fault","favorite","feature","february","federal","fee","feed","feel","female","fence","festival","fetch","fever","few","fiber","fiction","field","figure","file","film","filter","final","find","fine","finger","finish","fire","firm","first","fiscal","fish","fit","fitness","fix","flag","flame","flash","flat","flavor","flee","flight","flip","float","flock","floor","flower","fluid","flush","fly","foam","focus","fog","foil","fold","follow","food","foot","force","forest","forget","fork","fortune","forum","forward","fossil","foster","found","fox","fragile","frame","frequent","fresh","friend","fringe","frog","front","frost","frown","frozen","fruit","fuel","fun","funny","furnace","fury","future","gadget","gain","galaxy","gallery","game","gap","garage","garbage","garden","garlic","garment","gas","gasp","gate","gather","gauge","gaze","general","genius","genre","gentle","genuine","gesture","ghost","giant","gift","giggle","ginger","giraffe","girl","give","glad","glance","glare","glass","glide","glimpse","globe","gloom","glory","glove","glow","glue","goat","goddess","gold","good","goose","gorilla","gospel","gossip","govern","gown","grab","grace","grain","grant","grape","grass","gravity","great","green","grid","grief","grit","grocery","group","grow","grunt","guard","guess","guide","guilt","guitar","gun","gym","habit","hair","half","hammer","hamster","hand","happy","harbor","hard","harsh","harvest","hat","have","hawk","hazard","head","health","heart","heavy","hedgehog","height","hello","helmet","help","hen","hero","hidden","high","hill","hint","hip","hire","history","hobby","hockey","hold","hole","holiday","hollow","home","honey","hood","hope","horn","horror","horse","hospital","host","hotel","hour","hover","hub","huge","human","humble","humor","hundred","hungry","hunt","hurdle","hurry","hurt","husband","hybrid","ice","icon","idea","identify","idle","ignore","ill","illegal","illness","image","imitate","immense","immune","impact","impose","improve","impulse","inch","include","income","increase","index","indicate","indoor","industry","infant","inflict","inform","inhale","inherit","initial","inject","injury","inmate","inner","innocent","input","inquiry","insane","insect","inside","inspire","install","intact","interest","into","invest","invite","involve","iron","island","isolate","issue","item","ivory","jacket","jaguar","jar","jazz","jealous","jeans","jelly","jewel","job","join","joke","journey","joy","judge","juice","jump","jungle","junior","junk","just","kangaroo","keen","keep","ketchup","key","kick","kid","kidney","kind","kingdom","kiss","kit","kitchen","kite","kitten","kiwi","knee","knife","knock","know","lab","label","labor","ladder","lady","lake","lamp","language","laptop","large","later","latin","laugh","laundry","lava","law","lawn","lawsuit","layer","lazy","leader","leaf","learn","leave","lecture","left","leg","legal","legend","leisure","lemon","lend","length","lens","leopard","lesson","letter","level","liar","liberty","library","license","life","lift","light","like","limb","limit","link","lion","liquid","list","little","live","lizard","load","loan","lobster","local","lock","logic","lonely","long","loop","lottery","loud","lounge","love","loyal","lucky","luggage","lumber","lunar","lunch","luxury","lyrics","machine","mad","magic","magnet","maid","mail","main","major","make","mammal","man","manage","mandate","mango","mansion","manual","maple","marble","march","margin","marine","market","marriage","mask","mass","master","match","material","math","matrix","matter","maximum","maze","meadow","mean","measure","meat","mechanic","medal","media","melody","melt","member","memory","mention","menu","mercy","merge","merit","merry","mesh","message","metal","method","middle","midnight","milk","million","mimic","mind","minimum","minor","minute","miracle","mirror","misery","miss","mistake","mix","mixed","mixture","mobile","model","modify","mom","moment","monitor","monkey","monster","month","moon","moral","more","morning","mosquito","mother","motion","motor","mountain","mouse","move","movie","much","muffin","mule","multiply","muscle","museum","mushroom","music","must","mutual","myself","mystery","myth","naive","name","napkin","narrow","nasty","nation","nature","near","neck","need","negative","neglect","neither","nephew","nerve","nest","net","network","neutral","never","news","next","nice","night","noble","noise","nominee","noodle","normal","north","nose","notable","note","nothing","notice","novel","now","nuclear","number","nurse","nut","oak","obey","object","oblige","obscure","observe","obtain","obvious","occur","ocean","october","odor","off","offer","office","often","oil","okay","old","olive","olympic","omit","once","one","onion","online","only","open","opera","opinion","oppose","option","orange","orbit","orchard","order","ordinary","organ","orient","original","orphan","ostrich","other","outdoor","outer","output","outside","oval","oven","over","own","owner","oxygen","oyster","ozone","pact","paddle","page","pair","palace","palm","panda","panel","panic","panther","paper","parade","parent","park","parrot","party","pass","patch","path","patient","patrol","pattern","pause","pave","payment","peace","peanut","pear","peasant","pelican","pen","penalty","pencil","people","pepper","perfect","permit","person","pet","phone","photo","phrase","physical","piano","picnic","picture","piece","pig","pigeon","pill","pilot","pink","pioneer","pipe","pistol","pitch","pizza","place","planet","plastic","plate","play","please","pledge","pluck","plug","plunge","poem","poet","point","polar","pole","police","pond","pony","pool","popular","portion","position","possible","post","potato","pottery","poverty","powder","power","practice","praise","predict","prefer","prepare","present","pretty","prevent","price","pride","primary","print","priority","prison","private","prize","problem","process","produce","profit","program","project","promote","proof","property","prosper","protect","proud","provide","public","pudding","pull","pulp","pulse","pumpkin","punch","pupil","puppy","purchase","purity","purpose","purse","push","put","puzzle","pyramid","quality","quantum","quarter","question","quick","quit","quiz","quote","rabbit","raccoon","race","rack","radar","radio","rail","rain","raise","rally","ramp","ranch","random","range","rapid","rare","rate","rather","raven","raw","razor","ready","real","reason","rebel","rebuild","recall","receive","recipe","record","recycle","reduce","reflect","reform","refuse","region","regret","regular","reject","relax","release","relief","rely","remain","remember","remind","remove","render","renew","rent","reopen","repair","repeat","replace","report","require","rescue","resemble","resist","resource","response","result","retire","retreat","return","reunion","reveal","review","reward","rhythm","rib","ribbon","rice","rich","ride","ridge","rifle","right","rigid","ring","riot","ripple","risk","ritual","rival","river","road","roast","robot","robust","rocket","romance","roof","rookie","room","rose","rotate","rough","round","route","royal","rubber","rude","rug","rule","run","runway","rural","sad","saddle","sadness","safe","sail","salad","salmon","salon","salt","salute","same","sample","sand","satisfy","satoshi","sauce","sausage","save","say","scale","scan","scare","scatter","scene","scheme","school","science","scissors","scorpion","scout","scrap","screen","script","scrub","sea","search","season","seat","second","secret","section","security","seed","seek","segment","select","sell","seminar","senior","sense","sentence","series","service","session","settle","setup","seven","shadow","shaft","shallow","share","shed","shell","sheriff","shield","shift","shine","ship","shiver","shock","shoe","shoot","shop","short","shoulder","shove","shrimp","shrug","shuffle","shy","sibling","sick","side","siege","sight","sign","silent","silk","silly","silver","similar","simple","since","sing","siren","sister","situate","six","size","skate","sketch","ski","skill","skin","skirt","skull","slab","slam","sleep","slender","slice","slide","slight","slim","slogan","slot","slow","slush","small","smart","smile","smoke","smooth","snack","snake","snap","sniff","snow","soap","soccer","social","sock","soda","soft","solar","soldier","solid","solution","solve","someone","song","soon","sorry","sort","soul","sound","soup","source","south","space","spare","spatial","spawn","speak","special","speed","spell","spend","sphere","spice","spider","spike","spin","spirit","split","spoil","sponsor","spoon","sport","spot","spray","spread","spring","spy","square","squeeze","squirrel","stable","stadium","staff","stage","stairs","stamp","stand","start","state","stay","steak","steel","stem","step","stereo","stick","still","sting","stock","stomach","stone","stool","story","stove","strategy","street","strike","strong","struggle","student","stuff","stumble","style","subject","submit","subway","success","such","sudden","suffer","sugar","suggest","suit","summer","sun","sunny","sunset","super","supply","supreme","sure","surface","surge","surprise","surround","survey","suspect","sustain","swallow","swamp","swap","swarm","swear","sweet","swift","swim","swing","switch","sword","symbol","symptom","syrup","system","table","tackle","tag","tail","talent","talk","tank","tape","target","task","taste","tattoo","taxi","teach","team","tell","ten","tenant","tennis","tent","term","test","text","thank","that","theme","then","theory","there","they","thing","this","thought","three","thrive","throw","thumb","thunder","ticket","tide","tiger","tilt","timber","time","tiny","tip","tired","tissue","title","toast","tobacco","today","toddler","toe","together","toilet","token","tomato","tomorrow","tone","tongue","tonight","tool","tooth","top","topic","topple","torch","tornado","tortoise","toss","total","tourist","toward","tower","town","toy","track","trade","traffic","tragic","train","transfer","trap","trash","travel","tray","treat","tree","trend","trial","tribe","trick","trigger","trim","trip","trophy","trouble","truck","true","truly","trumpet","trust","truth","try","tube","tuition","tumble","tuna","tunnel","turkey","turn","turtle","twelve","twenty","twice","twin","twist","two","type","typical","ugly","umbrella","unable","unaware","uncle","uncover","under","undo","unfair","unfold","unhappy","uniform","unique","unit","universe","unknown","unlock","until","unusual","unveil","update","upgrade","uphold","upon","upper","upset","urban","urge","usage","use","used","useful","useless","usual","utility","vacant","vacuum","vague","valid","valley","valve","van","vanish","vapor","various","vast","vault","vehicle","velvet","vendor","venture","venue","verb","verify","version","very","vessel","veteran","viable","vibrant","vicious","victory","video","view","village","vintage","violin","virtual","virus","visa","visit","visual","vital","vivid","vocal","voice","void","volcano","volume","vote","voyage","wage","wagon","wait","walk","wall","walnut","want","warfare","warm","warrior","wash","wasp","waste","water","wave","way","wealth","weapon","wear","weasel","weather","web","wedding","weekend","weird","welcome","west","wet","whale","what","wheat","wheel","when","where","whip","whisper","wide","width","wife","wild","will","win","window","wine","wing","wink","winner","winter","wire","wisdom","wise","wish","witness","wolf","woman","wonder","wood","wool","word","work","world","worry","worth","wrap","wreck","wrestle","wrist","write","wrong","yard","year","yellow","you","young","youth","zebra","zero","zone","zoo"]')}}]);