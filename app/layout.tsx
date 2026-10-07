import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
export const metadata: Metadata = {title: "GSTGuru Pro — Indian GST Practitioner Course",description:"Learn Indian GST through modules, worked examples, chapter quizzes and a final course assessment.",icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><header className="site-header"><div className="header-inner"><Link className="brand" href="/"><span className="brand-mark" aria-hidden="true">G</span><span>GSTGuru Pro<small>LEARN · APPLY · PRACTISE</small></span></Link><nav aria-label="Main navigation"><Link href="/">Curriculum</Link><Link href="/final-exam">Assessment</Link><Link href="/resources">Sources</Link></nav></div></header>{children}<footer className="site-footer">GSTGuru Pro · Independent educational course · Progress saved on this device</footer></body></html>}
