import{eG as u,eD as y,cu as m}from"./index-CRroVR8n.js";import{a as F,r as A}from"./unitConversion-CHo8Fnbf.js";import{u as S,B as f,g as d,S as s,M as c,J as w}from"./arcade-BBefi8KM.js";import{D as l,i as h}from"./WhereClause-8TqBovll.js";import"./ImmutableArray-BPVd6ESQ.js";import"./shared-FyE7a9n3.js";import"./TimeOnly-CWS4UH_z.js";import"./number-nZMgW8tT.js";import"./featureConversionUtils-B9mEzuoj.js";import"./OptimizedFeatureSet-DAD_hUht.js";import"./memoryEstimations-CD4idZsR.js";async function o(a,n,t,e){if(t.length===1){if(u(t[0]))return s(a,t[0],c(t[1],-1));if(d(t[0]))return s(a,t[0].toArray(),c(t[1],-1))}else if(t.length===2){if(u(t[0]))return s(a,t[0],c(t[1],-1));if(d(t[0]))return s(a,t[0].toArray(),c(t[1],-1));if(f(t[0])){const i=await t[0].load(),r=await p(l.create(t[1],{fieldsIndex:i.getFieldsIndex(),timeZone:i.dateFieldsTimeZoneDefaultUTC}),e,n);return g(n,await t[0].calculateStatistic(a,r,c(t[2],1e3),n.abortSignal))}}else if(t.length===3&&f(t[0])){const i=await t[0].load(),r=await p(l.create(t[1],{fieldsIndex:i.getFieldsIndex(),timeZone:i.dateFieldsTimeZoneDefaultUTC}),e,n);return g(n,await t[0].calculateStatistic(a,r,c(t[2],1e3),n.abortSignal))}return s(a,t,-1)}function g(a,n){return n instanceof h?m.fromReaderAsTimeStampOffset(n.toStorageFormat()):n instanceof Date?m.dateJSAndZoneToArcadeDate(n,w(a)):n}async function p(a,n,t){const e=a.getVariables();if(e.length>0){const i={};for(const r of e)i[r]=n.evaluateIdentifier(t,{name:r});a.parameters=i}return a}function q(a){a.mode==="async"&&(a.functions.stdev=function(n,t){return a.standardFunctionAsync(n,t,(e,i,r)=>o("stdev",n,r,a))},a.functions.variance=function(n,t){return a.standardFunctionAsync(n,t,(e,i,r)=>o("variance",n,r,a))},a.functions.average=function(n,t){return a.standardFunctionAsync(n,t,(e,i,r)=>o("mean",n,r,a))},a.functions.mean=function(n,t){return a.standardFunctionAsync(n,t,(e,i,r)=>o("mean",n,r,a))},a.functions.sum=function(n,t){return a.standardFunctionAsync(n,t,(e,i,r)=>o("sum",n,r,a))},a.functions.min=function(n,t){return a.standardFunctionAsync(n,t,(e,i,r)=>o("min",n,r,a))},a.functions.max=function(n,t){return a.standardFunctionAsync(n,t,(e,i,r)=>o("max",n,r,a))},a.functions.count=function(n,t){return a.standardFunctionAsync(n,t,async(e,i,r)=>{if(S(r,1,1,n,t),f(r[0]))return r[0].count(e.abortSignal);if(u(r[0])||y(r[0]))return r[0].length;if(d(r[0]))return r[0].length();throw new F(n,A.InvalidParameter,t)})})}export{q as registerFunctions};
