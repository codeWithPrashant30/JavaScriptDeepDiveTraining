import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';

// Ensure JWT_SECRET is defined
if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in the environment variables');
}

const JWT_SECRET = process.env.JWT_SECRET as jwt.Secret;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

export interface JWTPayload {
  userId: string;
  email: string;
  role: string;
}

// Create JWT token
export const createToken = (payload: JWTPayload): string => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN as jwt.SignOptions['expiresIn'],
  });
};

// Verify JWT token
export const verifyToken = (token: string): JWTPayload => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded as JWTPayload;
  } catch (error) {
    throw new Error('Invalid token');
  }
};

// Set JWT cookie
export const setAuthCookie = (token: string) => {
  cookies().set('auth_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60, // 7 days
    path: '/',
  });
};

// Remove JWT cookie
export const removeAuthCookie = () => {
  cookies().delete('auth_token');
};

// Get JWT from request
export const getTokenFromRequest = (req: NextRequest): string | null => {
  const authHeader = req.headers.get('authorization');
  if (authHeader?.startsWith('Bearer ')) {
    return authHeader.substring(7);
  }
  
  const authCookie = req.cookies.get('auth_token');
  return authCookie?.value || null;
};

// Authentication middleware
export const authenticateRequest = async (req: NextRequest) => {
  try {
    const token = getTokenFromRequest(req);
    if (!token) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const decoded = verifyToken(token);
    return decoded;
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid authentication token' },
      { status: 401 }
    );
  }
};

// Role-based authorization middleware
export const authorizeRole = (allowedRoles: string[]) => {
  return async (req: NextRequest) => {
    try {
      const decoded = await authenticateRequest(req);
      if (decoded instanceof NextResponse) {
        return decoded;
      }

      if (!allowedRoles.includes(decoded.role)) {
        return NextResponse.json(
          { error: 'Access denied' },
          { status: 403 }
        );
      }

      return decoded;
    } catch (error) {
      return NextResponse.json(
        { error: 'Authorization failed' },
        { status: 403 }
      );
    }
  };
};
