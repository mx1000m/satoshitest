var gdjs;(function(i){const c=new i.Logger("ResourceLoader"),R=(t,e,s)=>{if(t.startsWith("data:")||t.startsWith("blob:"))return t;const n=t.indexOf("?")===-1?"?":"&";return t+n+e+"="+s},_=t=>t.startsWith("https://project-resources.gdevelop.io/")||t.startsWith("https://project-resources-dev.gdevelop.io/"),g=20,f=5,d=3;class v{constructor(e){this.isFinished=!1;this.sceneName=e,this.onProgressCallbacks=new Array,this.onFinishCallbacks=new Array}registerCallback(e,s){if(this.isFinished){e();return}this.onFinishCallbacks.push(e),s&&this.onProgressCallbacks.push(s)}onProgress(e,s){for(const n of this.onProgressCallbacks)n(e,s)}onFinish(){this.isFinished=!0;for(const e of this.onFinishCallbacks)e()}}class w{constructor(e,s,n,r){this._sceneToLoadQueue=new Array;this._spineAtlasManager=null;this._spineManager=null;this.currentLoadingSceneName="";this.currentSceneLoadingProgress=0;this._isLoadingInForeground=!0;this._runtimeGame=e,this._resources=new Map,this._globalResources=n,this._sceneResources=new Map,this._sceneNamesToLoad=new Set,this._sceneNamesToMakeReady=new Set,this.setResources(s,n,r),this._imageManager=new i.ImageManager(this),this._soundManager=new i.SoundManager(this),this._fontManager=new i.FontManager(this),this._jsonManager=new i.JsonManager(this),this._bitmapFontManager=new i.BitmapFontManager(this,this._imageManager),this._model3DManager=new i.Model3DManager(this),i.SpineAtlasManager&&i.SpineManager&&(this._spineAtlasManager=new i.SpineAtlasManager(this,this._imageManager),this._spineManager=new i.SpineManager(this,this._spineAtlasManager));const a=[this._imageManager,this._soundManager,this._fontManager,this._jsonManager,this._bitmapFontManager,this._model3DManager];this._spineAtlasManager&&a.push(this._spineAtlasManager),this._spineManager&&a.push(this._spineManager),this._resourceManagersMap=new Map;for(const o of a)for(const u of o.getResourceKinds())this._resourceManagersMap.set(u,o)}getRuntimeGame(){return this._runtimeGame}setResources(e,s,n){this._globalResources=s,this._sceneResources.clear(),this._sceneNamesToLoad.clear(),this._sceneNamesToMakeReady.clear();for(const r of n)this._sceneResources.set(r.name,r.usedResources.map(a=>a.name)),this._sceneNamesToLoad.add(r.name),this._sceneNamesToMakeReady.add(r.name);this._sceneToLoadQueue.length=0;for(let r=n.length-1;r>=0;r--){const a=n[r];this._sceneToLoadQueue.push(new v(a.name))}this._resources.clear();for(const r of e)this._resources.set(r.name,r)}async loadAllResources(e){let s=0;await h([...this._resources.values()],g,d,async n=>{await this._loadResource(n),await this._processResource(n),s++,e(s,this._resources.size)}),this._sceneNamesToLoad.clear(),this._sceneNamesToMakeReady.clear()}async loadGlobalAndFirstSceneResources(e,s){const n=this._sceneResources.get(e);if(!n){c.warn(`Can't load resource for unknown scene: "`+e+'".');return}let r=0;const a=[...this._globalResources,...n.values()];await h(a,g,d,async o=>{const u=this._resources.get(o);if(!u){c.warn('Unable to find resource "'+o+'".');return}await this._loadResource(u),await this._processResource(u),r++,s(r,a.length)}),this._setSceneAssetsLoaded(e),this._setSceneAssetsReady(e)}async loadAllSceneInBackground(){for(;this._sceneToLoadQueue.length>0;){const e=this._sceneToLoadQueue[this._sceneToLoadQueue.length-1];e!==void 0&&(this.currentLoadingSceneName=e.sceneName,this.areSceneAssetsLoaded(e.sceneName)?this._sceneToLoadQueue.pop():(await this._doLoadSceneResources(e.sceneName,async(s,n)=>e.onProgress(s,n)),this._sceneToLoadQueue.splice(this._sceneToLoadQueue.findIndex(s=>s===e),1),e.onFinish()))}this.currentLoadingSceneName=""}async _doLoadSceneResources(e,s){const n=this._sceneResources.get(e);if(!n){c.warn(`Can't load resource for unknown scene: "`+e+'".');return}let r=0;await h([...n.values()],this._isLoadingInForeground?g:f,d,async a=>{const o=this._resources.get(a);if(!o){c.warn('Unable to find resource "'+a+'".');return}await this._loadResource(o),r++,this.currentSceneLoadingProgress=r/this._resources.size,s&&await s(r,this._resources.size)}),this._setSceneAssetsLoaded(e)}async _loadResource(e){const s=this._resourceManagersMap.get(e.kind);if(!s){c.warn('Unknown resource kind: "'+e.kind+'" for: "'+e.name+'".');return}await s.loadResource(e.name)}async loadAndProcessSceneResources(e,s){if(this.areSceneAssetsReady(e))return;await this.loadSceneResources(e,s);const n=this._sceneResources.get(e);if(!n){c.warn(`Can't load resource for unknown scene: "`+e+'".');return}let r=0;for(const a of n){const o=this._resources.get(a);if(!o){c.warn('Unable to find resource "'+a+'".');continue}await this._processResource(o),r++,s&&await s(r,n.length)}this._setSceneAssetsReady(e)}async loadSceneResources(e,s){this._isLoadingInForeground=!0;const n=this._prioritizeScene(e);return new Promise((r,a)=>{if(!n){this._isLoadingInForeground=!1,r();return}n.registerCallback(()=>{this._isLoadingInForeground=!1,r()},s)})}_prioritizeScene(e){const s=this._sceneToLoadQueue.findIndex(r=>r.sceneName===e);if(s<0)return null;const n=this._sceneToLoadQueue[s];return this._sceneToLoadQueue.splice(s,1),this._sceneToLoadQueue.push(n),n}async _processResource(e){const s=this._resourceManagersMap.get(e.kind);if(!s){c.warn('Unknown resource kind: "'+e.kind+'" for: "'+e.name+'".');return}await s.processResource(e.name)}getSceneLoadingProgress(e){return e===this.currentLoadingSceneName?this.currentSceneLoadingProgress:this.areSceneAssetsLoaded(e)?1:0}areSceneAssetsLoaded(e){return!this._sceneNamesToLoad.has(e)}areSceneAssetsReady(e){return!this._sceneNamesToMakeReady.has(e)}_setSceneAssetsLoaded(e){this._sceneNamesToLoad.delete(e)}_setSceneAssetsReady(e){this._sceneNamesToMakeReady.delete(e)}getResource(e){return this._resources.get(e)||null}getFullUrl(e){const{gdevelopResourceToken:s}=this._runtimeGame._options;return!s||!_(e)?e:R(e,"gd_resource_token",encodeURIComponent(s))}checkIfCredentialsRequired(e){return this._runtimeGame._options.gdevelopResourceToken?!1:!!_(e)}getSoundManager(){return this._soundManager}getImageManager(){return this._imageManager}getFontManager(){return this._fontManager}getBitmapFontManager(){return this._bitmapFontManager}getJsonManager(){return this._jsonManager}getModel3DManager(){return this._model3DManager}getSpineManager(){return this._spineManager}getSpineAtlasManager(){return this._spineAtlasManager}}i.ResourceLoader=w;const m=(t,e,s)=>{const n=[],r=[];let a=0,o=0;return new Promise((u,y)=>{const p=()=>{if(t.length===0){u({results:n,errors:r});return}for(;a<e&&o<t.length;){const M=t[o++];a++,s(M).then(l=>n.push(l)).catch(l=>r.push({item:M,error:l})).finally(()=>{a--,o===t.length&&a===0?u({results:n,errors:r}):p()})}};p()})},h=async(t,e,s,n)=>{const r=await m(t,e,n);r.errors.length!==0&&c.warn("Some assets couldn't be downloaded. Trying again now.");for(let a=1;a<s&&r.errors.length!==0;a++){const o=await m(t,e,n);r.results.push.apply(r.results,o.results),r.errors=o.errors}return r}})(gdjs||(gdjs={}));
//# sourceMappingURL=ResourceLoader.js.map