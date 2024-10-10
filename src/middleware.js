import { NextResponse } from 'next/server';

export function middleware(req) {
  // Retrieve the adminAuthToken cookie
  const adminAuthToken = req.cookies.get('adminAuthToken');

  // Check if the adminAuthToken cookie exists and is valid
  const isAdmin = adminAuthToken && adminAuthToken.value === 'expectedTokenValue';  

  if (!isAdmin) { 
    // return NextResponse.redirect(`/admin-login`);
   
  }

  return NextResponse.next();  
}

export const config = {
  matcher: ['/admin/:path*'], 
};
