import{n as N}from"./glsl-BH37Aalp.js";import{u as C,fa as Ee,bP as ie,bO as G,A as D,i as ee,bL as F,bM as z,_ as B,bK as Ue,x as Me,w as Ge,X as $e,fP as je,v as He,eX as _e,U as Be,lR as Xe,lS as ke,lT as qe,ka as Ye,b5 as Ze,lU as Je,lV as Ke,lW as Qe,lX as We,lY as et,lZ as tt,l_ as nt,l$ as ot}from"./index-DevCBUKG.js";import{t as st}from"./doublePrecisionUtils-B0owpBza.js";import{r as R,t as Pe,n as L}from"./vec3f32-nZdmKIgz.js";import{n as E,f as U,e as Ce,a as Se,s as rt,c as at,g as lt,o as Ne,h as it,i as ge,j as ct,p as ut,w as ft,k as ht,l as pt,m as dt}from"./VerticalOffset.glsl-lByyj2SC.js";import{o as mt,w as De}from"./Indices-D33uE5Fd.js";import{M as Ot,l as wt,x as gt}from"./plane-C5IqRt5j.js";import{k as vt}from"./sphere-BkSyBEso.js";import{t as T}from"./orientedBoundingBox-SfuuJKFD.js";import{s as te}from"./InterleavedLayout-CvPd4l1I.js";import{e as x}from"./VertexAttribute-Cq4MnHjR.js";import{e as xt}from"./mat4f64-Dk4dwAN8.js";import{u as At}from"./meshVertexSpaceUtils-DOnMPEQJ.js";import{e as Ae}from"./projectVectorToVector-mugI6Hyn.js";import{o as yt,x as Mt}from"./hydratedFeatures--sFQDdiD.js";var Te,ve;(function(e){e[e.OBJECT=0]="OBJECT",e[e.HUD=1]="HUD",e[e.TERRAIN=2]="TERRAIN",e[e.OVERLAY=3]="OVERLAY",e[e.I3S=4]="I3S",e[e.PCL=5]="PCL",e[e.LOD=6]="LOD",e[e.VOXEL=7]="VOXEL",e[e.TILES3D=8]="TILES3D"})(Te||(Te={}));let on=class{constructor(){this.verticalOffset=0,this.selectionMode=!1,this.hud=!0,this.selectOpaqueTerrainOnly=!0,this.invisibleTerrain=!1,this.backfacesTerrain=!0,this.isFiltered=!1,this.filteredLayerUids=[],this.store=ve.ALL,this.normalRequired=!0,this.excludeLabels=!1}};(function(e){e[e.MIN=0]="MIN",e[e.MINMAX=1]="MINMAX",e[e.ALL=2]="ALL"})(ve||(ve={}));function rn(e){e.code.add(N`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}`),e.code.add(N`const vec4 RGBA_TO_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgbaTofloat(vec4 rgba) {
return dot(rgba, RGBA_TO_FLOAT_FACTORS);
}`),e.code.add(N`const vec4 uninterpolatedRGBAToFloatFactors = vec4(
1.0 / 256.0,
1.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0 / 256.0
);
float uninterpolatedRGBAToFloat(vec4 rgba) {
return (dot(round(rgba * 255.0), uninterpolatedRGBAToFloatFactors) - 0.5) * 2.0;
}`)}function an(e){return e.type==="point"}function ln(e,n){return e==null&&(e=[]),e.push(n),e}function cn(e,n){if(e==null)return null;const o=e.filter(t=>t!==n);return o.length===0?null:o}function un(e,n,o,t,s){oe[0]=e.get(n,0),oe[1]=e.get(n,1),oe[2]=e.get(n,2),st(oe,X,3),o.set(s,0,X[0]),t.set(s,0,X[1]),o.set(s,1,X[2]),t.set(s,1,X[3]),o.set(s,2,X[4]),t.set(s,2,X[5])}const oe=C(),X=new Float32Array(6);var xe;(function(e){function n(r,l){const c=r[l],a=r[l+1],i=r[l+2];return Math.sqrt(c*c+a*a+i*i)}function o(r,l){const c=r[l],a=r[l+1],i=r[l+2],p=1/Math.sqrt(c*c+a*a+i*i);r[l]*=p,r[l+1]*=p,r[l+2]*=p}function t(r,l,c){r[l]*=c,r[l+1]*=c,r[l+2]*=c}function s(r,l,c,a,i,p=l){(i=i||r)[p]=r[l]+c[a],i[p+1]=r[l+1]+c[a+1],i[p+2]=r[l+2]+c[a+2]}function f(r,l,c,a,i,p=l){(i=i||r)[p]=r[l]-c[a],i[p+1]=r[l+1]-c[a+1],i[p+2]=r[l+2]-c[a+2]}e.length=n,e.normalize=o,e.scale=t,e.add=s,e.subtract=f})(xe||(xe={}));const q=xe,de=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],Pt=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],St=[0,0,1,0,1,1,0,1],Tt=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],Ve=new Array(36);for(let e=0;e<6;e++)for(let n=0;n<6;n++)Ve[6*e+n]=e;const k=new Array(36);for(let e=0;e<6;e++)k[6*e]=0,k[6*e+1]=1,k[6*e+2]=2,k[6*e+3]=2,k[6*e+4]=3,k[6*e+5]=0;function fn(e,n){Array.isArray(n)||(n=[n,n,n]);const o=new Array(24);for(let t=0;t<8;t++)o[3*t]=de[t][0]*n[0],o[3*t+1]=de[t][1]*n[1],o[3*t+2]=de[t][2]*n[2];return new U(e,[[x.POSITION,new T(o,Tt,3,!0)],[x.NORMAL,new T(Pt,Ve,3)],[x.UV0,new T(St,k,2)]])}const me=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],bt=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],It=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],Rt=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function hn(e,n){Array.isArray(n)||(n=[n,n,n]);const o=new Array(18);for(let t=0;t<6;t++)o[3*t]=me[t][0]*n[0],o[3*t+1]=me[t][1]*n[1],o[3*t+2]=me[t][2]*n[2];return new U(e,[[x.POSITION,new T(o,It,3,!0)],[x.NORMAL,new T(bt,Rt,3)]])}const se=R(-.5,0,-.5),re=R(.5,0,-.5),ae=R(0,0,.5),le=R(0,.5,0),Y=L(),Z=L(),K=L(),Q=L(),W=L();G(Y,se,le),G(Z,se,re),B(K,Y,Z),D(K,K),G(Y,re,le),G(Z,re,ae),B(Q,Y,Z),D(Q,Q),G(Y,ae,le),G(Z,ae,se),B(W,Y,Z),D(W,W);const Oe=[se,re,ae,le],$t=[0,-1,0,K[0],K[1],K[2],Q[0],Q[1],Q[2],W[0],W[1],W[2]],Ct=[0,1,2,3,1,0,3,2,1,3,0,2],Nt=[0,0,0,1,1,1,2,2,2,3,3,3];function pn(e,n){Array.isArray(n)||(n=[n,n,n]);const o=new Array(12);for(let t=0;t<4;t++)o[3*t]=Oe[t][0]*n[0],o[3*t+1]=Oe[t][1]*n[1],o[3*t+2]=Oe[t][2]*n[2];return new U(e,[[x.POSITION,new T(o,Ct,3,!0)],[x.NORMAL,new T($t,Nt,3)]])}function dn(e,n,o,t,s={uv:!0}){const f=-Math.PI,r=2*Math.PI,l=-Math.PI/2,c=Math.PI,a=Math.max(3,Math.floor(o)),i=Math.max(2,Math.floor(t)),p=(a+1)*(i+1),A=E(3*p),M=E(3*p),y=E(2*p),w=[];let h=0;for(let O=0;O<=i;O++){const I=[],u=O/i,P=l+u*c,S=Math.cos(P);for(let $=0;$<=a;$++){const j=$/a,g=f+j*r,V=Math.cos(g)*S,b=Math.sin(P),ne=-Math.sin(g)*S;A[3*h]=V*n,A[3*h+1]=b*n,A[3*h+2]=ne*n,M[3*h]=V,M[3*h+1]=b,M[3*h+2]=ne,y[2*h]=j,y[2*h+1]=u,I.push(h),++h}w.push(I)}const m=new Array;for(let O=0;O<i;O++)for(let I=0;I<a;I++){const u=w[O][I],P=w[O][I+1],S=w[O+1][I+1],$=w[O+1][I];O===0?(m.push(u),m.push(S),m.push($)):O===i-1?(m.push(u),m.push(P),m.push(S)):(m.push(u),m.push(P),m.push(S),m.push(S),m.push($),m.push(u))}const d=[[x.POSITION,new T(A,m,3,!0)],[x.NORMAL,new T(M,m,3,!0)]];return s.uv&&d.push([x.UV0,new T(y,m,2,!0)]),s.offset&&(d[0][0]=x.OFFSET,d.push([x.POSITION,new T(Float64Array.from(s.offset),De(m.length),3,!0)])),new U(e,d)}function mn(e,n,o,t){const s=Dt(n,o);return new U(e,s)}function Dt(e,n,o){let t,s;t=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],s=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];for(let c=0;c<t.length;c+=3)q.scale(t,c,e/q.length(t,c));let f={};function r(c,a){c>a&&([c,a]=[a,c]);const i=c.toString()+"."+a.toString();if(f[i])return f[i];let p=t.length;return t.length+=3,q.add(t,3*c,t,3*a,t,p),q.scale(t,p,e/q.length(t,p)),p/=3,f[i]=p,p}for(let c=0;c<n;c++){const a=s.length,i=new Array(4*a);for(let p=0;p<a;p+=3){const A=s[p],M=s[p+1],y=s[p+2],w=r(A,M),h=r(M,y),m=r(y,A),d=4*p;i[d]=A,i[d+1]=w,i[d+2]=m,i[d+3]=M,i[d+4]=h,i[d+5]=w,i[d+6]=y,i[d+7]=m,i[d+8]=h,i[d+9]=w,i[d+10]=h,i[d+11]=m}s=i,f={}}const l=Se(t);for(let c=0;c<l.length;c+=3)q.normalize(l,c);return[[x.POSITION,new T(Se(t),s,3,!0)],[x.NORMAL,new T(l,s,3,!0)]]}function On(e,n={}){const{normal:o,position:t,color:s,rotation:f,size:r,centerOffsetAndDistance:l,uvs:c,featureAttribute:a,objectAndLayerIdColor:i=null}=n,p=t?Me(t):C(),A=o?Me(o):Ge(0,0,1),M=s?[255*s[0],255*s[1],255*s[2],s.length>3?255*s[3]:255]:[255,255,255,255],y=r!=null&&r.length===2?r:[1,1],w=f!=null?[f]:[0],h=De(1),m=[[x.POSITION,new T(p,h,3,!0)],[x.NORMAL,new T(A,h,3,!0)],[x.COLOR,new T(M,h,4,!0)],[x.SIZE,new T(y,h,2)],[x.ROTATION,new T(w,h,1,!0)]];if(c&&m.push([x.UV0,new T(c,h,c.length)]),l!=null){const d=[l[0],l[1],l[2],l[3]];m.push([x.CENTEROFFSETANDDISTANCE,new T(d,h,4)])}if(a){const d=[a[0],a[1],a[2],a[3]];m.push([x.FEATUREATTRIBUTE,new T(d,h,4)])}return new U(e,m,null,Ce.Point,i)}function Vt(e,n,o,t,s=!0,f=!0){let r=0;const l=n,c=e;let a=R(0,r,0),i=R(0,r+c,0),p=R(0,-1,0),A=R(0,1,0);t&&(r=c,i=R(0,0,0),a=R(0,r,0),p=R(0,1,0),A=R(0,-1,0));const M=[i,a],y=[p,A],w=o+2,h=Math.sqrt(c*c+l*l);if(t)for(let u=o-1;u>=0;u--){const P=u*(2*Math.PI/o),S=R(Math.cos(P)*l,r,Math.sin(P)*l);M.push(S);const $=R(c*Math.cos(P)/h,-l/h,c*Math.sin(P)/h);y.push($)}else for(let u=0;u<o;u++){const P=u*(2*Math.PI/o),S=R(Math.cos(P)*l,r,Math.sin(P)*l);M.push(S);const $=R(c*Math.cos(P)/h,l/h,c*Math.sin(P)/h);y.push($)}const m=new Array,d=new Array;if(s){for(let u=3;u<M.length;u++)m.push(1),m.push(u-1),m.push(u),d.push(0),d.push(0),d.push(0);m.push(M.length-1),m.push(2),m.push(1),d.push(0),d.push(0),d.push(0)}if(f){for(let u=3;u<M.length;u++)m.push(u),m.push(u-1),m.push(0),d.push(u),d.push(u-1),d.push(1);m.push(0),m.push(2),m.push(M.length-1),d.push(1),d.push(2),d.push(y.length-1)}const O=E(3*w);for(let u=0;u<w;u++)O[3*u]=M[u][0],O[3*u+1]=M[u][1],O[3*u+2]=M[u][2];const I=E(3*w);for(let u=0;u<w;u++)I[3*u]=y[u][0],I[3*u+1]=y[u][1],I[3*u+2]=y[u][2];return[[x.POSITION,new T(O,m,3,!0)],[x.NORMAL,new T(I,d,3,!0)]]}function wn(e,n,o,t,s,f=!0,r=!0){return new U(e,Vt(n,o,t,s,f,r))}function gn(e,n,o,t,s,f,r){const l=s?Pe(s):R(1,0,0),c=f?Pe(f):R(0,0,0);r??(r=!0);const a=L();D(a,l);const i=L();F(i,a,Math.abs(n));const p=L();F(p,i,-.5),z(p,p,c);const A=R(0,1,0);Math.abs(1-$e(a,A))<.2&&ie(A,0,0,1);const M=L();B(M,a,A),D(M,M),B(A,M,a);const y=2*t+(r?2:0),w=t+(r?2:0),h=E(3*y),m=E(3*w),d=E(2*y),O=new Array(3*t*(r?4:2)),I=new Array(3*t*(r?4:2));r&&(h[3*(y-2)]=p[0],h[3*(y-2)+1]=p[1],h[3*(y-2)+2]=p[2],d[2*(y-2)]=0,d[2*(y-2)+1]=0,h[3*(y-1)]=h[3*(y-2)]+i[0],h[3*(y-1)+1]=h[3*(y-2)+1]+i[1],h[3*(y-1)+2]=h[3*(y-2)+2]+i[2],d[2*(y-1)]=1,d[2*(y-1)+1]=1,m[3*(w-2)]=-a[0],m[3*(w-2)+1]=-a[1],m[3*(w-2)+2]=-a[2],m[3*(w-1)]=a[0],m[3*(w-1)+1]=a[1],m[3*(w-1)+2]=a[2]);const u=(g,V,b)=>{O[g]=V,I[g]=b};let P=0;const S=L(),$=L();for(let g=0;g<t;g++){const V=g*(2*Math.PI/t);F(S,A,Math.sin(V)),F($,M,Math.cos(V)),z(S,S,$),m[3*g]=S[0],m[3*g+1]=S[1],m[3*g+2]=S[2],F(S,S,o),z(S,S,p),h[3*g]=S[0],h[3*g+1]=S[1],h[3*g+2]=S[2],d[2*g]=g/t,d[2*g+1]=0,h[3*(g+t)]=h[3*g]+i[0],h[3*(g+t)+1]=h[3*g+1]+i[1],h[3*(g+t)+2]=h[3*g+2]+i[2],d[2*(g+t)]=g/t,d[2*g+1]=1;const b=(g+1)%t;u(P++,g,g),u(P++,g+t,g),u(P++,b,b),u(P++,b,b),u(P++,g+t,g),u(P++,b+t,b)}if(r){for(let g=0;g<t;g++){const V=(g+1)%t;u(P++,y-2,w-2),u(P++,g,w-2),u(P++,V,w-2)}for(let g=0;g<t;g++){const V=(g+1)%t;u(P++,g+t,w-1),u(P++,y-1,w-1),u(P++,V+t,w-1)}}const j=[[x.POSITION,new T(h,O,3,!0)],[x.NORMAL,new T(m,I,3,!0)],[x.UV0,new T(d,O,2,!0)]];return new U(e,j)}function vn(e,n,o,t,s,f){t=t||10,s=s==null||s,te(n.length>1);const r=[[0,0,0]],l=[],c=[];for(let a=0;a<t;a++){l.push([0,-a-1,-(a+1)%t-1]);const i=a/t*2*Math.PI;c.push([Math.cos(i)*o,Math.sin(i)*o])}return zt(e,c,n,r,l,s,f)}function zt(e,n,o,t,s,f,r=R(0,0,0)){const l=n.length,c=E(o.length*l*3+(6*t.length||0)),a=E(o.length*l*3+(t?6:0)),i=new Array,p=new Array;let A=0,M=0;const y=C(),w=C(),h=C(),m=C(),d=C(),O=C(),I=C(),u=C(),P=C(),S=C(),$=C(),j=C(),g=C(),V=Ot();ie(P,0,1,0),G(w,o[1],o[0]),D(w,w),f?(z(u,o[0],r),D(h,u)):ie(h,0,0,1),be(w,h,P,P,d,h,Ie),ee(m,h),ee(j,d);for(let v=0;v<t.length;v++)F(O,d,t[v][0]),F(u,h,t[v][2]),z(O,O,u),z(O,O,o[0]),c[A++]=O[0],c[A++]=O[1],c[A++]=O[2];a[M++]=-w[0],a[M++]=-w[1],a[M++]=-w[2];for(let v=0;v<s.length;v++)i.push(s[v][0]>0?s[v][0]:-s[v][0]-1+t.length),i.push(s[v][1]>0?s[v][1]:-s[v][1]-1+t.length),i.push(s[v][2]>0?s[v][2]:-s[v][2]-1+t.length),p.push(0),p.push(0),p.push(0);let b=t.length;const ne=t.length-1;for(let v=0;v<o.length;v++){let ye=!1;v>0&&(ee(y,w),v<o.length-1?(G(w,o[v+1],o[v]),D(w,w)):ye=!0,z(S,y,w),D(S,S),z($,o[v-1],m),wt(o[v],S,V),gt(V,vt($,y),u)?(G(u,u,o[v]),D(h,u),B(d,S,h),D(d,d)):be(S,m,j,P,d,h,Ie),ee(m,h),ee(j,d)),f&&(z(u,o[v],r),D(g,u));for(let H=0;H<l;H++)if(F(O,d,n[H][0]),F(u,h,n[H][1]),z(O,O,u),D(I,O),a[M++]=I[0],a[M++]=I[1],a[M++]=I[2],z(O,O,o[v]),c[A++]=O[0],c[A++]=O[1],c[A++]=O[2],!ye){const he=(H+1)%l;i.push(b+H),i.push(b+l+H),i.push(b+he),i.push(b+he),i.push(b+l+H),i.push(b+l+he);for(let pe=0;pe<6;pe++){const Le=i.length-6;p.push(i[Le+pe]-ne)}}b+=l}const ze=o[o.length-1];for(let v=0;v<t.length;v++)F(O,d,t[v][0]),F(u,h,t[v][1]),z(O,O,u),z(O,O,ze),c[A++]=O[0],c[A++]=O[1],c[A++]=O[2];const ue=M/3;a[M++]=w[0],a[M++]=w[1],a[M++]=w[2];const fe=b-l;for(let v=0;v<s.length;v++)i.push(s[v][0]>=0?b+s[v][0]:-s[v][0]-1+fe),i.push(s[v][2]>=0?b+s[v][2]:-s[v][2]-1+fe),i.push(s[v][1]>=0?b+s[v][1]:-s[v][1]-1+fe),p.push(ue),p.push(ue),p.push(ue);const Fe=[[x.POSITION,new T(c,i,3,!0)],[x.NORMAL,new T(a,p,3,!0)]];return new U(e,Fe)}function xn(e,n,o,t){te(n.length>1,"createPolylineGeometry(): polyline needs at least 2 points"),te(n[0].length===3,"createPolylineGeometry(): malformed vertex"),te(o==null||o.length===n.length,"createPolylineGeometry: need same number of points and normals"),te(o==null||o[0].length===3,"createPolylineGeometry(): malformed normal");const s=Ee(3*n.length),f=new Array(2*(n.length-1));let r=0,l=0;for(let a=0;a<n.length;a++){for(let i=0;i<3;i++)s[r++]=n[a][i];a>0&&(f[l++]=a-1,f[l++]=a)}const c=[[x.POSITION,new T(s,f,3,!0)]];if(o){const a=E(3*o.length);let i=0;for(let p=0;p<n.length;p++)for(let A=0;A<3;A++)a[i++]=o[p][A];c.push([x.NORMAL,new T(a,f,3,!0)])}return t&&c.push([x.COLOR,new T(t,mt(t.length/4),4)]),new U(e,c,null,Ce.Line)}function An(e,n,o,t,s,f=0){const r=new Array(18),l=[[-o,f,s/2],[t,f,s/2],[0,n+f,s/2],[-o,f,-s/2],[t,f,-s/2],[0,n+f,-s/2]],c=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let a=0;a<6;a++)r[3*a]=l[a][0],r[3*a+1]=l[a][1],r[3*a+2]=l[a][2];return new U(e,[[x.POSITION,new T(r,c,3,!0)]])}function yn(e,n){const o=e.getMutableAttribute(x.POSITION).data;for(let t=0;t<o.length;t+=3){const s=o[t],f=o[t+1],r=o[t+2];ie(J,s,f,r),Ue(J,J,n),o[t]=J[0],o[t+1]=J[1],o[t+2]=J[2]}}function Mn(e,n=e){const o=e.attributes,t=o.get(x.POSITION).data,s=o.get(x.NORMAL).data;if(s){const f=n.getMutableAttribute(x.NORMAL).data;for(let r=0;r<s.length;r+=3){const l=s[r+1];f[r+1]=-s[r+2],f[r+2]=l}}if(t){const f=n.getMutableAttribute(x.POSITION).data;for(let r=0;r<t.length;r+=3){const l=t[r+1];f[r+1]=-t[r+2],f[r+2]=l}}}function we(e,n,o,t,s){return!(Math.abs($e(n,e))>s)&&(B(o,e,n),D(o,o),B(t,o,e),D(t,t),!0)}function be(e,n,o,t,s,f,r){return we(e,n,s,f,r)||we(e,o,s,f,r)||we(e,t,s,f,r)}const Ie=.99619469809,J=C();var ce;(function(e){e[e.Occluded=0]="Occluded",e[e.NotOccluded=1]="NotOccluded",e[e.Both=2]="Both",e[e.COUNT=3]="COUNT"})(ce||(ce={}));function Pn(e,n){if(e.type==="point")return _(e,n,!1);if(yt(e))switch(e.type){case"extent":return _(e.center,n,!1);case"polygon":return _(e.centroid,n,!1);case"polyline":return _(Re(e),n,!0);case"mesh":return _(At(e.vertexSpace,e.spatialReference)??e.extent.center,n,!1);case"multipoint":return}else switch(e.type){case"extent":return _(Ft(e),n,!0);case"polygon":return _(Lt(e),n,!0);case"polyline":return _(Re(e),n,!0);case"multipoint":return}}function Re(e){const n=e.paths[0];if(!n||n.length===0)return null;const o=ke(n,qe(n)/2);return Ae(o[0],o[1],o[2],e.spatialReference)}function Ft(e){return Ae(.5*(e.xmax+e.xmin),.5*(e.ymax+e.ymin),e.zmin!=null&&e.zmax!=null&&isFinite(e.zmin)&&isFinite(e.zmax)?.5*(e.zmax+e.zmin):void 0,e.spatialReference)}function Lt(e){const n=e.rings[0];if(!n||n.length===0)return null;const o=Ye(e.rings,!!e.hasZ);return Ae(o[0],o[1],o[2],e.spatialReference)}function _(e,n,o){const t=o?e:Mt(e);return n&&e?Xe(e,t,n)?t:null:t}function Sn(e,n,o,t=0){if(e){n||(n=_e());const s=e;let f=.5*s.width*(o-1),r=.5*s.height*(o-1);return s.width<1e-7*s.height?f+=r/20:s.height<1e-7*s.width&&(r+=f/20),Be(n,s.xmin-f-t,s.ymin-r-t,s.xmax+f+t,s.ymax+r+t),n}return null}function Tn(e,n,o=null){const t=We(et);return e!=null&&(t[0]=e[0],t[1]=e[1],t[2]=e[2]),n!=null?t[3]=n:e!=null&&e.length>3&&(t[3]=e[3]),o&&(t[0]*=o,t[1]*=o,t[2]*=o,t[3]*=o),t}function bn(e=je,n,o,t=1){const s=new Array(3);if(n==null||o==null)s[0]=1,s[1]=1,s[2]=1;else{let f,r=0;for(let l=2;l>=0;l--){const c=e[l],a=c!=null,i=l===0&&!f&&!a,p=o[l];let A;c==="symbol-value"||i?A=p!==0?n[l]/p:1:a&&c!=="proportional"&&isFinite(c)&&(A=p!==0?c/p:1),A!=null&&(s[l]=A,f=A,r=Math.max(r,Math.abs(A)))}for(let l=2;l>=0;l--)s[l]==null?s[l]=f:s[l]===0&&(s[l]=.001*r)}for(let f=2;f>=0;f--)s[f]/=t;return He(s)}function Et(e){return e.isPrimitive!=null}function In(e){return Ut(Et(e)?[e.width,e.depth,e.height]:e)?null:"Symbol sizes may not be negative values"}function Ut(e){const n=o=>o==null||o>=0;return Array.isArray(e)?e.every(n):n(e)}function Rn(e,n,o,t=xt()){return e&&tt(t,t,-e/180*Math.PI),n&&nt(t,t,n/180*Math.PI),o&&ot(t,t,o/180*Math.PI),t}function $n(e,n,o){if(o.minDemResolution!=null)return o.minDemResolution;const t=Ze(n),s=Je(e)*t,f=Ke(e)*t,r=Qe(e)*(n.isGeographic?1:t);return s===0&&f===0&&r===0?o.minDemResolutionForPoints:.01*Math.max(s,f,r)}const Gt=.5;function Cn(e,n){e.include(rt),e.attributes.add(x.POSITION,"vec3"),e.attributes.add(x.NORMAL,"vec3"),e.attributes.add(x.CENTEROFFSETANDDISTANCE,"vec4");const o=e.vertex;at(o,n),lt(o,n),o.uniforms.add(new Ne("viewport",t=>t.camera.fullViewport),new it("polygonOffset",t=>t.shaderPolygonOffset),new ge("cameraGroundRelative",t=>t.camera.aboveGround?1:-1)),n.hasVerticalOffset&&ct(o),o.constants.add("smallOffsetAngle","float",.984807753012208),o.code.add(N`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),o.code.add(N`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${n.terrainDepthTest?N.float(0):N`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),n.draped&&!n.hasVerticalOffset||ut(o),n.draped||(o.uniforms.add(new ge("perDistancePixelRatio",t=>Math.tan(t.camera.fovY/2)/(t.camera.fullViewport[2]/2))),o.code.add(N`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${N.float(Gt)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),n.screenCenterOffsetUnitsEnabled&&ft(o),n.hasScreenSizePerspective&&ht(o),o.code.add(N`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${n.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${n.hasScreenSizePerspective&&(n.hasVerticalOffset||n.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${n.hasVerticalOffset?n.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${n.hasVerticalOffset?N`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${n.screenCenterOffsetUnitsEnabled?"":N`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${n.screenCenterOffsetUnitsEnabled?n.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${n.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}function jt(e){e.uniforms.add(new pt("alignPixelEnabled",n=>n.alignPixelEnabled)),e.code.add(N`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),e.code.add(N`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}function Nn(e){e.vertex.uniforms.add(new ge("renderTransparentlyOccludedHUD",n=>n.hudRenderStyle===ce.Occluded?1:n.hudRenderStyle===ce.NotOccluded?0:.75),new Ne("viewport",n=>n.camera.fullViewport),new dt("hudVisibilityTexture",n=>{var o;return(o=n.hudVisibility)==null?void 0:o.getTexture()})),e.vertex.include(jt),e.vertex.code.add(N`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}export{Tn as A,hn as B,dn as C,bn as D,$n as E,fn as F,be as M,yn as O,Sn as S,In as U,Ut as Z,an as a,ce as b,Vt as c,Gt as d,ve as e,ln as f,pn as g,gn as h,Te as i,wn as j,mn as k,jt as l,Mn as m,Nn as n,Pn as o,un as p,On as q,cn as r,on as s,rn as t,Cn as u,Rn as v,xn as w,zt as x,An as y,vn as z};
