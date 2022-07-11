import User from '../models/userModels.js';
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js'



//@desc Authenticate the user & get token
//@route POST /api/users/login
//@access Public

const authUser = asyncHandler( async ( req, res ) => {
  const { email, password } = req.body

  const user = await User.findOne( {
    email
  } )

  if ( user && ( await user.matchPassword( password ) ) ) {
    res.json( {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken( user._id )
    } )
  } else {
    res.status( 401 )
    throw new Error( 'Invalid email or password' )
  }
} )



//@desc GET User profile
//@route GET /api/users/profile
//@access Private

const fetchUserProfile = asyncHandler( async ( req, res ) => {
  const user = await User.findById( req.user._id)
  // res.send( 'Success' )
  if ( user ) {
    res.json( {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status( 404 )
    throw new Error('User Not Found')
  }
  // console.log( user )

} )


export { authUser, fetchUserProfile }