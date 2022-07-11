const router = express.Router();
import express from 'express';
import { authUser, fetchUserProfile } from '../controllers/usersController.js'
import { protect } from '../middleware/authMIdleware.js'



router.post( '/login', authUser );
router.route( '/profile' ).get( protect, fetchUserProfile );

export default router;
