// Run with: node tests/recommendation-smoke.mjs
// Validates the actual in-browser scoring functions and current 46-bike catalog.
import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
const start=html.indexOf('<script>',130000)+8;
assert.ok(start>8);
const src=html.slice(start,html.indexOf('</script>',start));
new Function(src); // Syntax validation of the complete application.
function section(a,b){const i=src.indexOf(a),j=src.indexOf(b,i+1);assert.ok(i>=0&&j>i,'Missing section '+a);return src.slice(i,j)}
const data=section("const fmbTrack=","/* Ride-character notes audited");
const builds=section("function buildPrice(","function reviewEvidenceAdjustment(");
const reviews=section("const REVIEW_OBSERVATION_LEDGER_V71","function scoreComponents(");
const scoring=section("function scoreComponents(","// Group riding/terrain/handling first");
const setup=`const defaults=()=>({suspensionType:'full',ride:'mixed',terrainDetail:null,quiver:'one',existing:'mixed',role:'mixed',features:'none',park:'never',focus:'balanced',gravityClimb:'medium',budget:12000,stretch:'open',tech:'mixed',feel:'balanced',priority:{cl:8,de:8,weight:10,cool:5,price:2,play:6},prefs:{drive:'SRAM',shift:'electronic',wheel:'none',fork:'none',brake:'none',frame:'none',wheelSize:'29',brand:[],exclude:[]},strength:{drive:'prefer',shift:'prefer'},overrides:{},extraBike:null,limit:false});let state=defaults(),answers={};`;
const suite=`
const cases=[
{name:'XC race',ride:'xc',terrainDetail:'xc-race',tech:'smooth',priority:{cl:10,de:3,weight:10,cool:2,price:2,play:4}},
{name:'Downcountry',ride:'dc',tech:'rough',priority:{cl:9,de:8,weight:8,cool:5,price:2,play:8}},
{name:'Balanced trail',ride:'trail',tech:'rough',priority:{cl:8,de:8,weight:10,cool:5,price:2,play:6}},
{name:'Descending trail',ride:'trail',tech:'extreme',priority:{cl:5,de:10,weight:4,cool:3,price:2,play:7}},
{name:'All mountain',ride:'mountain',tech:'rough',features:'large',focus:'stable',priority:{cl:6,de:10,weight:5,cool:4,price:2,play:5}},
{name:'Enduro park',ride:'enduro',tech:'extreme',park:'often',focus:'impact',gravityClimb:'low',priority:{cl:3,de:10,weight:2,cool:3,price:2,play:4}}];
const results=cases.map(c=>{state={...defaults(),...c,priority:{...defaults().priority,...c.priority}};return {name:c.name,top:suitable().slice(0,6).map(b=>({name:b.name,id:b.id,cat:b.cat,score:b.match})),all:suitable().map(b=>({id:b.id,match:b.match,rideMatch:b.rideMatch}))};});
state={...defaults(),ride:'trail',tech:'rough',priority:{...defaults().priority,weight:1}};
const low=B.filter(b=>['rascal','fuelex'].includes(b.id)).map(b=>[b.id,scoreComponents(b).raw]);
state.priority.weight=10;
const high=B.filter(b=>['rascal','fuelex'].includes(b.id)).map(b=>[b.id,scoreComponents(b).raw]);
return {count:B.length,results,low,high};`;
const out=new Function('window',data+setup+builds+reviews+scoring+suite)({});
assert.equal(out.count,46,'All current catalog bikes included');
for(const test of out.results){
 assert.ok(test.all.length>=35,test.name+' eligible full-suspension options');
 for(const bike of test.all){
  assert.ok(Number.isFinite(bike.match)&&bike.match>=1&&bike.match<=10,test.name+' score '+bike.id);
  assert.ok(Number.isFinite(bike.rideMatch),test.name+' ride fit '+bike.id);
 }
 const scores=test.all.map(b=>b.match);
 assert.ok(scores.every((x,i)=>i===0||scores[i-1]>=x),'Full precision sorting');
}
const cat=(i,n,c)=>out.results[i].top.slice(0,n).filter(x=>c.includes(x.cat)).length;
assert.ok(cat(0,4,['xc'])>=2,'XC race should prioritize XC');
assert.ok(cat(2,5,['trail','allmountain'])>=4,'Balanced trail should not recommend XC race bikes');
assert.ok(cat(5,5,['enduro'])>=4,'Enduro park must prioritize enduro');
assert.ok(out.results[2].top[0].score<9.95,'No score inflation to 10');
const spread=xs=>xs.find(x=>x[0]==='rascal')[1]-xs.find(x=>x[0]==='fuelex')[1];
assert.ok(spread(out.high)>spread(out.low),'More weight priority improves lighter bike relative to heavier bike');
console.log('PASS 46-bike catalog, 6 rider profiles, numeric/sorting/weight/category checks');
for(const t of out.results)console.log(t.name+': '+t.top.slice(0,3).map(x=>x.name+' '+x.score.toFixed(2)).join(' | '));
