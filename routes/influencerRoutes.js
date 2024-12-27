const express=require("express");
const {createInfluencerProfile, getAllInfluencerProfiles, getInfluencerProfileById, updateInfluencerProfile, deleteInfluencerProfile}=require('../controllers/influencerController')


//router object
const router=express.Router();

//routes

//get all influencer profiles
router.get("/getAllInfluencerProfiles",getAllInfluencerProfiles);

//get influencer profile by id
router.get("/getInfluencerProfileById",getInfluencerProfileById);

//update an influencer profile
router.put("/updateInfluencerProfile",updateInfluencerProfile)

//create an influencer profile
router.post("/createInfluencerProfile",createInfluencerProfile)

//delete an influencer profile
router.delete("/deleteInfluencerProfile",deleteInfluencerProfile)






module.exports=router;