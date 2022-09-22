import jwt from "jsonwebtoken";

export const isUserAuthenticated = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(403).json({
      status: 403,
      message: 'FORBIDDEN'
    })
  } else {
    const token = authHeader.split(' ')[1]
    let payload;
    if (token) {
      try {
        // Parse the JWT string and store the result in `payload`.
        // Note that we are passing the key in this method as well. This method will throw an error
        // if the token is invalid (if it has expired according to the expiry time we set on sign in),
        // or if the signature does not match
        payload = jwt.verify(token, 'secret-key')
        next()
      } catch (e) {
        if (e instanceof jwt.JsonWebTokenError) {
          // if the error thrown is because the JWT is unauthorized, return a 401 error
          return res.status(401).json({
            status: 401,
            message: 'UNAUTHORIZED'
          })
        }
        console.log(e)
        // otherwise, return a bad request error
        return res.status(400).end()
      }

    } else {
      return res.status(403).json({
        status: 403,
        message: 'FORBIDDEN'
      })
    }
  }
}