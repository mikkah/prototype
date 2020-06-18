
import { sign } from 'jsonwebtoken'

export const createRefreshToken  = (user: any) => {
  return sign(
    { userId: user.id }, 
    process.env.APP_JWT_REFRESH!,
    { expiresIn: "2d" }
  )
}

export const createAccessToken = (user: any) => {
  return sign(
    { userId: user.id }, 
    process.env.APP_JWT_SECRET!,
    { expiresIn: "15m" }
  )
}