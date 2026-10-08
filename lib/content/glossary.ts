import { MODULES } from './index';
import type { KeyTerm, QuizQuestion } from './types';

const extras: KeyTerm[] = [
 {term:'ITC',def:'Input tax credit: purchase GST you are legally allowed to use against normal sales GST.'},
 {term:'RCM',def:'Reverse Charge Mechanism: the buyer pays GST for specifically covered purchases, instead of the seller paying it.'},
 {term:'CGST',def:'Central Goods and Services Tax: the central-government part of an ordinary within-State GST charge.'},
 {term:'SGST',def:'State Goods and Services Tax: the State-government part of an ordinary within-State GST charge.'},
 {term:'UTGST',def:'Union Territory Goods and Services Tax: the corresponding territory tax used in applicable Union territories.'},
 {term:'IGST',def:'Integrated Goods and Services Tax: the usual GST for a supply between States, subject to the location and special rules.'},
 {term:'SEZ',def:'Special Economic Zone: a designated area with special rules. GST benefits depend on the qualifying supply and purpose.'},
 {term:'PAN',def:'Permanent Account Number: the underlying tax identity connecting the same business’s activities across India.'},
 {term:'capital goods',def:'Longer-use business goods recorded as assets, such as equipment. Their credit-allocation rules can differ from materials and services.'},
 {term:'B2C',def:'Business-to-consumer: a sale to a customer who is not purchasing under a business GST registration.'},
 {term:'dynamic QR',def:'A type of payment/invoice QR requirement for specified consumer invoices. It is separate from registering covered invoices for an IRN.'},
 {term:'REG-06',def:'The form containing the approved GST registration certificate.'},
];
const allTerms = [...extras, ...MODULES.flatMap(m=>m.chapters.flatMap(c=>c.keyTerms))];
function normalise(text:string){return text.toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu,' ').trim();}
export function getQuizTerms(question: QuizQuestion): KeyTerm[] {
 const text=` ${normalise([question.question,...question.options??[]].join(' '))} `;
 const unique=new Map<string,KeyTerm>();
 for(const item of allTerms){
  const name=normalise(item.term.split(/\s*\(/)[0]); const key=name;
  if(name==='advance'&&text.includes(' advance ruling ')) continue;
  if(text.includes(` ${name} `)&&!unique.has(key)) unique.set(key,item);
 }
 return [...unique.values()];
}
