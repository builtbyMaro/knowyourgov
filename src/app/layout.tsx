import type {Metadata} from 'next';
import {Provider,Header,Footer} from '@/components/site';
import './globals.css';
export const metadata:Metadata={title:{default:'KnowYourGov | Understand your government',template:'%s | KnowYourGov'},description:'An independent, nonpartisan guide to Nigerian government and voting.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><Provider><a className="skip" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/></Provider></body></html>}
