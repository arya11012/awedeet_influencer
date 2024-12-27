const mongoose=require('mongoose')

const InfluencerSchema=new mongoose.Schema(
    {

        
        name:{
            type:String,
            required:true,
            trim:true,
        },
        handle:{
            type:String,
            required:true,
            unique:true,
            match:/^@\w+$/, // Regex to ensure Instagram handle starts with @
        },
        likes:{
            type:Number,
            required:true,
            default:0,
        },
        comments:{
            type:Number,
            required:true,
            default:0,
        },
        shares:{
            type:Number,
            required:true,
            default:0,
        },
        followers:{
            type:Number,
            required:true,
            default:0,
        },
        engagementRate:{
            type:Number,
            default:function(){
                const {likes,comments,shares,followers}=this;
                return followers>0? ((likes+comments+shares)/followers):0;
            },
        },
        audienceAgeRange:{
            type:String,
            required:true,
            enum:['18-24','25-34','35-44','45+'],

        },
        audienceGender:{
            type:String,
            required:true,
            enum:['Male','Female','Other'],
        }

    },
    {
        timestamps:true,
    }
);
const InfluencerModel=mongoose.model('Influencer',InfluencerSchema);

module.exports=InfluencerModel;