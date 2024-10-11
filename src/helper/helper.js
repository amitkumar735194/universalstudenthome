
// import path from "path";
// import { writeFile } from "fs/promises";
// import sharp from "sharp";

import { NextResponse } from "next/server";

export const baseUrl = "http://localhost:3000/";

 

  export const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
      document.body.appendChild(script);
    });
  };

 
  export function slugify(text) {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-'); // Replace multiple - with single -
}



export function getResponse(status=false,data=null,status_code=500){

  return NextResponse.json({status:status, data:data},{status:status_code});
}