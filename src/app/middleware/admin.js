import { NextResponse } from 'next/server';

export function middleware(req) {
  const isAdmin = req.cookies.get('role') === 'admin'; // Assuming the role is stored in a cookie

  if (!isAdmin) {
    return NextResponse.redirect('/unauthorized'); // Redirect if not an admin
  }

  return NextResponse.next(); // Proceed to the requested route
}

export const config = {
  matcher: ['/admin/:path*'], // Apply middleware to admin routes
};
