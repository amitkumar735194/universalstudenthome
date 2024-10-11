import { NextResponse } from 'next/server';

export function middleware(req) {
  // Retrieve the adminAuthToken cookie
  const adminAuthToken = req.cookies.get('adminAuthToken');
console.log(adminAuthToken);
  // Check if the adminAuthToken cookie exists and is valid
  const isAdmin = adminAuthToken && adminAuthToken.name === 'adminAuthToken';
  if (!isAdmin) { 
    const url = new URL('/admin-login', req.url);
    return NextResponse.redirect(url);
    // return NextResponse.redirect(`/admin-login`);
   
  }

  return NextResponse.next();  
}

export const config = {
  matcher: ['/admin/:path*'], 
};
