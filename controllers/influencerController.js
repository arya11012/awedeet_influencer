const mongoose=require("mongoose")
const InfluencerModel=require('../models/InfluencerModel')

//get all influencer profiles
exports.getAllInfluencerProfiles=async(req,res)=>{
    try{
        const Influencers=await InfluencerModel.find({});
        if(!Influencers){
            return res.status(200).send({
                success:true,
                message:"No Influencers Found",
            })
        }
        return res.status(200).send({
            success:true,
            message:"All Influencers Profiles received:",
            Influencers,
        })
    }
    catch(error){
        console.log(error)
        return res.status(500).send({
            success:false,
            message:"Error in getting Influencers Profile",error,
        })
    }
}
//get influecer profile by id
exports.getInfluencerProfileById=async(req,res)=>{
    try{
        const {id}=req.query;

        
        const Influencer=await InfluencerModel.findById(id);
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({
                success: false,
                message: "Invalid influencer ID format",
            });
        }
        if(!Influencer){
            return res.status(200).send({
                success:true,
                message:"No Influencer with specified id found",
            })
        }
        return res.status(200).send({
            success:true,
            message:"Influencers Profile Found :",
            Influencer,
        })
    }
    catch(error){
        console.log(error)
        return res.status(500).send({
            success:false,
            message:"Error in getting Influencers Profile",error,
        })
    }
}

//create influencer profile

exports.createInfluencerProfile=async(req,res)=>{
    try{
        const {name,handle,likes,comments,shares,followers,audienceAgeRange,audienceGender}=req.body;
        if(!name||!handle||!likes||!comments||!shares||!followers || !audienceAgeRange || !audienceGender){
            return res.status(400).send({
                success:false,
                message:"Please provide all fields : name,handle,likes,comments,shares,followers,audienceAgeRange,audienceGender",
            })
        }
        
       
        //check if the influencer already exists in the database/handle is unique
        const existingInfluencer=await InfluencerModel.findOne({handle:handle});
        if(existingInfluencer){
            return res.status(400).send({
                success:false,
                message:"The specified instagram handle already exists",
            })
        }
        //check for positive integers
        if( likes<0 || comments<0 || shares<0 || followers<0){
            return res.status(400).send({
                success:false,
                message:"Likes,comments,shares and followers should be positive integers ", 
            })
        }
        //check for valid age range
        if(!(['18-24', '25-34', '35-44', '45+'].includes(audienceAgeRange))){
            return res.status(400).send({
                success:false,
                message:"Please select a valid age range: '18-24', '25-34', '35-44', '45+' ", 
            })
        }
        //check for valid gender
        if(!(['Male','Female',"Other"].includes(audienceGender))){
            return res.status(400).send({
                success:false,
                message:"Please select a valid gender: Male,Female or Other", 
            })
        }
        const newInfluencer=new InfluencerModel({name,handle,likes,comments,shares,followers,audienceAgeRange,audienceGender});
        newInfluencer.save();
        return res.status(201).send({
            success:true,
            message:"New Influecer Profile Created",newInfluencer,
        })

        
    }
    catch(error){
        console.log(error);
        return res.status(400).send({
        success: false,
        message: "Error while creating Influecner Profile ",
        error,
        });
    }
}

//Update Influencer Profile 
exports.updateInfluencerProfile = async (req, res) => {
    try {
        // Destructure the query params and request body
        const { id } = req.query;
        const { name, handle, likes, comments, shares, followers, audienceAgeRange, audienceGender } = req.body;

        // Create the update object, only including fields that exist in the request body
        const updateFields = {};

        if (name) updateFields.name = name;
        if (handle) updateFields.handle = handle;
        if (likes) updateFields.likes = likes;
        if (comments) updateFields.comments = comments;
        if (shares) updateFields.shares = shares;
        if (followers) updateFields.followers = followers;
        if (audienceAgeRange) updateFields.audienceAgeRange = audienceAgeRange;
        if (audienceGender) updateFields.audienceGender = audienceGender;

        // If no fields are provided, return a 400 error
        if (Object.keys(updateFields).length === 0) {
            return res.status(400).json({
                success: false,
                message: 'No fields provided to update',
            });
        }

        // Find the influencer by ID and update their profile
        const influencer = await InfluencerModel.findByIdAndUpdate(
            id, 
            updateFields, // Fields to update
            { new: true, runValidators: true } // Options to return the updated document and validate the data
        );

        // If influencer is not found, return a 404 error
        if (!influencer) {
            return res.status(404).json({
                success: false,
                message: 'Influencer not found',
            });
        }

        // Return success response with the updated influencer profile
        return res.status(200).json({
            success: true,
            message: 'Influencer profile updated successfully',
            influencer,
        });

    } catch (error) {
        //  handle errors
        console.error(error);
        return res.status(500).json({
            success: false,
            message: ' Error in updating profile of the influencer',
            error: error.message,
        });
    }
};

//delete Influencer Profile
exports.deleteInfluencerProfile=async(req,res)=>{
    try{
        const {id}=req.query;
        const deleteInfluencer=await InfluencerModel.findByIdAndDelete(id);
        if(!deleteInfluencer){
            return res.status(404).json({
                success: false,
                message: 'Influencer not found',
            });
        }
        return res.status(200).json({
            success: true,
            message: 'Influencer profile deleted',
            deleteInfluencer,
        });
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            success: false,
            message: ' Error in deleting profile of the influencer',
            error: error.message,
        });
    }
}