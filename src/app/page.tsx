"use client"
import { useState } from 'react'
import Image from "next/image";
import dynamic from 'next/dynamic'

import styles from "./page.module.css";
//动态导入，禁用ssr，否则报错ReferenceError: self is not defined
const CustomCkEditor = dynamic(() => import('@/components/cmack').then((mod) => mod.CustomCkEditor), { ssr: false })
                        
export default function Home() {
  const [content, setContent] = useState("<h1>测试</h1><p> asadasd</p><p> </p><p> </p><h2>test111</h2>");

  return (
    <main className={styles.main}>
      <div className={styles.ckeditor}>
        <CustomCkEditor data={content} onChange={(data: string)=>setContent(data)}/>
      </div>
    
    </main>
  );
}
